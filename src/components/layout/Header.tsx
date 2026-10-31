import { useEffect, useState } from 'react'
import { navLinks } from '../../data/navLinks'
import { brandName } from '../../data/site'
import { githubProfileUrl } from '../../data/socialLinks'
import Button from '../ui/Button'
import Container from './Container'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header data-mobile-menu-open={isMenuOpen || undefined}>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 z-header w-full transition-all duration-navigation ease-standard ${
          isScrolled ? 'bg-navigation py-nav-scrolled-y backdrop-blur-navigation' : 'py-nav-y'
        }`}
      >
        <Container className="flex items-center justify-between">
          <a
            className="font-heading text-heading-xs font-semibold tracking-heading text-text transition hover:scale-110"
            href="#home"
            onClick={closeMenu}
          >
            {brandName}
          </a>

          <div
            id="mobile-navigation"
            className={`fixed top-0 right-0 z-menu flex h-screen w-full max-w-mobile-menu flex-col items-center justify-center gap-mobile-menu-gap bg-surface shadow-menu transition-transform duration-500 ease-standard ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } tablet:static tablet:ml-auto tablet:h-auto tablet:max-w-none tablet:translate-x-0 tablet:flex-row tablet:gap-nav-gap tablet:bg-transparent tablet:shadow-none`}
          >
            <ul className="flex flex-col items-center gap-card tablet:flex-row tablet:gap-nav-gap">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="relative inline-block font-medium text-nav-link-mobile transition duration-300 ease-standard after:absolute after:top-nav-underline-top after:left-0 after:h-0.5 after:w-0 after:rounded-underline after:bg-linear-to-r after:from-accent after:to-accent-muted after:transition-all after:duration-300 after:ease-standard hover:after:w-full max-tablet:text-nav-mobile max-tablet:hover:translate-x-nav-link-lift max-tablet:hover:text-text max-tablet:after:top-auto max-tablet:after:-bottom-nav-underline-bottom max-tablet:after:h-0.75 tablet:text-text"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="whitespace-nowrap" href={githubProfileUrl} target="_blank">
              Visit Github
            </Button>
          </div>

          <button
            type="button"
            className="z-menu-toggle cursor-pointer text-menu text-text transition-transform duration-300 ease-standard tablet:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <i
              aria-hidden="true"
              className={isMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}
            />
          </button>
        </Container>
      </nav>
    </header>
  )
}

export default Header
