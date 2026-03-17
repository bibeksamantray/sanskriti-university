import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo-wrap">
          <img
            src="https://www.sanskriti.edu.in/new-assets/images/header-footer/su-logo.webp"
            alt="Sanskriti University"
            className="footer__logo"
          />
        </div>
        <p className="footer__text">
          Sanskriti University is dedicated to excellence in teaching, learning, and research, and to developing leaders
          in many disciplines who make a difference globally.
        </p>
        <div className="footer__divider" aria-hidden />
        <div className="footer__copyright">© 2025 Sanskriti University. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
