'use client'

import { useState, useEffect } from 'react'

export default function ScrollUp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 350)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="#"
      className={`scrollup${visible ? ' show-scroll' : ''}`}
      id="scroll-up"
      aria-label="Remonter en haut"
    >
      <i className="ri-arrow-up-line"></i>
    </a>
  )
}
