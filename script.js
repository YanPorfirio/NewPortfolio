(() => {
    // Evita execução duplicada caso o script seja carregado mais de uma vez.
    if (window.__portfolioScriptInitialized) return;
    window.__portfolioScriptInitialized = true;

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

    // Reveal Animation com Intersection Observer (Mais performático)
    const reveals = document.querySelectorAll('.reveal');
    const showAll = () => reveals.forEach(el => el.classList.add('visible'));

    // Se não houver elementos ou se a API não existir, evita erro e mostra o conteúdo.
    if (!('IntersectionObserver' in window) || !reveals.length) {
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
})();

