import { LOGO } from '../data'
export default function Footer() {
  return (
    <footer className="footer">
      <img src={LOGO} alt="" />
      <p className="f-brand">VAYRO<br /><em>Built different.</em></p>
      <p className="f-line">Not just clothes,<br />it’s a mindset.</p>
      <nav aria-label="Social"><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">X</a></nav>
      <nav aria-label="Footer"><a href="#shop">Shop</a><a href="#about">About</a><a href="#">Contact</a><a href="#">Privacy</a><a href="#">Terms</a></nav>
      <small>© 2026 VAYRO</small>
    </footer>
  )
}
