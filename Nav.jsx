import { useEffect, useState } from 'react'
import { LOGO, NAV } from '../data'
export default function Nav({ cart }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <a href="#top" className="brand" aria-label="VAYRO home"><img src={LOGO} alt="" /><span>VAYRO</span></a>
      <nav className={`links ${open ? 'open' : ''}`} aria-label="Primary">
        {NAV.map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>)}
      </nav>
      <a href="#cart" className="cart" onClick={e => e.preventDefault()}>Cart ({cart})</a>
      <button className="burger" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><i /><i /></button>
    </header>
  )
}
