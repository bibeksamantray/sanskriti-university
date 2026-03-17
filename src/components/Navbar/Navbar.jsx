import { useEffect, useState } from 'react'
import './Navbar.css'

const navItems = [
  'About Us',
  'Academics',
  'Admissions',
  'International',
  'Life @ SU',
  'Placement',
  'Research',
]

function Navbar() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHide(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${hide ? 'navbar--hidden' : ''}`}>
      <div className="navbar__logo">
        <img
          src="https://www.sanskriti.edu.in/new-assets/images/header-footer/su-logo.webp"
          alt="Sanskriti University"
        />
      </div>
      <nav className="navbar__links">
        {navItems.map((item) => (
          <a key={item} className="navbar__link" href="#">
            {item}
          </a>
        ))}
      </nav>
      <button className="navbar__cta">Apply Now</button>
    </header>
  )
}

export default Navbar
