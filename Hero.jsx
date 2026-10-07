import { useRef } from 'react'
import { LOGO } from '../data'
export default function Hero() {
  const ref = useRef(null)
  const move = e => {
    const r = ref.current; if (!r) return
    r.style.setProperty('--px', ((e.clientX / innerWidth - .5) * 14).toFixed(2) + 'px')
    r.style.setProperty('--py', ((e.clientY / innerHeight - .5) * 14).toFixed(2) + 'px')
  }
  return (
    <section id="top" className="hero" ref={ref} onMouseMove={move}>
      <div className="glow" />
      <div className="stage">
        <img className="logo" src={LOGO} alt="VAYRO" />
        <p className="mindset">Not just clothes,<br />it’s a mindset.</p>
        <p className="sign"><b>VAYRO.</b> <em>Built different.</em></p>
      </div>
      <a className="scroll" href="#shop" aria-label="Scroll to shop"><span /></a>
    </section>
  )
}
