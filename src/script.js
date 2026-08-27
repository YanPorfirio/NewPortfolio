(() => {
    // Evita execução duplicada caso o script seja carregado mais de uma vez.
    if (window.__portfolioScriptInitialized) return;
    window.__portfolioScriptInitialized = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Gerenciamento do Header no Scroll
    const nav = document.querySelector('nav');
    const scrollObserver = () => {
        if (!nav) return;

        if (window.scrollY > 20) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    };

    window.addEventListener('scroll', scrollObserver, { passive: true });
    // Garante que o estado do header já fique correto ao carregar a página.
    scrollObserver();

    // Menu Mobile
    const menuIcon = document.querySelector('#menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if (menuIcon && navMenu) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('ri-close-line');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        };

        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.onclick = () => {
                menuIcon.classList.remove('ri-close-line');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            };
        });
    }

    const scheduleIdle = window.requestIdleCallback
        ? (cb) => window.requestIdleCallback(cb, { timeout: 1200 })
        : (cb) => window.setTimeout(cb, 250);

    const projectImages = document.querySelectorAll('.project-card img');
    scheduleIdle(() => {
        projectImages.forEach((img) => {
            const decodeImage = () => {
                if (typeof img.decode === 'function') {
                    img.decode().catch(() => {});
                }
            };

            if (img.complete) decodeImage();
            else img.addEventListener('load', decodeImage, { once: true });
        });
    });

    // Reveal Animation com Intersection Observer (Mais performático)
    const reveals = document.querySelectorAll('.reveal');
    const showAll = () => reveals.forEach(el => el.classList.add('visible'));

    // Se não houver elementos ou se a API não existir, evita erro e mostra o conteúdo.
    if (prefersReducedMotion || !('IntersectionObserver' in window) || !reveals.length) {
        showAll();
        return;
    }

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        // Considera visível se o elemento cruza a área vertical da viewport.
        return rect.bottom >= 0 && rect.top <= viewHeight;
    };

    const revealOptions = {
        threshold: 0.15, // Dispara quando 15% do elemento está visível
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, revealOptions);

    // Garante que elementos já visíveis ao abrir fiquem visíveis imediatamente.
    reveals.forEach(el => {
        if (isInViewport(el)) el.classList.add('visible');
        else revealOnScroll.observe(el);
    });

    // Rechecagem após o primeiro paint (evita race com fontes/layout).
    requestAnimationFrame(() => {
        reveals.forEach(el => {
            if (!el.classList.contains('visible') && isInViewport(el)) {
                el.classList.add('visible');
            }
        });
    });

    // Theme Switcher Logic
    const themeDots = document.querySelectorAll('.theme-dot');
    const setTheme = (theme) => {
        if (theme === 'midnight') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
        localStorage.setItem('portfolio-theme', theme);
        
        themeDots.forEach(dot => {
            if (dot.getAttribute('data-theme') === theme) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    };

    themeDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const theme = dot.getAttribute('data-theme');
            setTheme(theme);
        });
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'midnight';
    setTheme(savedTheme);
})();
