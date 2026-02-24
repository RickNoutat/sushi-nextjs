'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À Propos' },
  { href: '#popular', label: 'Populaire' },
  { href: '#recently', label: 'Nouveautés' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bgHeader, setBgHeader] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme')
    if (savedTheme === 'dark') {
      setDarkTheme(true)
      document.body.classList.add('dark-theme')
    }

    const handleScroll = () => {
      setBgHeader(window.scrollY >= 50)

      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const el = section as HTMLElement
        const sectionTop = el.offsetTop - 58
        const sectionHeight = el.offsetHeight
        const id = el.getAttribute('id') || ''
        if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = !darkTheme
    setDarkTheme(next)
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('selected-theme', next ? 'dark' : 'light')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${bgHeader ? ' bg-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src="/assets/img/logo.png" alt="logo" />
          Sushi
        </a>

        <div className={`nav__menu${menuOpen ? ' show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="nav__item">
                <a
                  href={href}
                  className={`nav__link${activeSection === href.slice(1) ? ' active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>

          <img src="/assets/img/leaf-branch-4.png" alt="" className="nav__img-1" />
          <img src="/assets/img/leaf-branch-3.png" alt="" className="nav__img-2" />
        </div>

        <div className="nav__buttons">
          <i
            className={`${darkTheme ? 'ri-sun-line' : 'ri-moon-line'} change-theme`}
            id="theme-button"
            onClick={toggleTheme}
          />
          <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(true)}>
            <i className="ri-apps-2-line"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}
