import { useEffect, useState } from 'react'
import Placeholder from './Placeholder'
import { PRODUCTS } from '../data'
export default function Shop({ add }) {
  const [q, setQ] = useState(null)
  useEffect(() => {
    if (!q) return
    const k = e => e.key === 'Escape' && setQ(null)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [q])
  return (
    <section id="shop" className="shop">
      <h2 className="h2">Shop</h2>
      <div className="grid">
        {PRODUCTS.map((p, i) => (
          <article key={p.id} className={`card c${i}`}>
            <div className="media">
              <Placeholder src={p.image} label={p.name} tone={p.tone} />
              <button className="quick" onClick={() => setQ(p)}>Quick view</button>
            </div>
            <div className="meta"><h3>{p.name}</h3><span>${p.price}</span></div>
            <button className="btn" onClick={() => add()}>Shop now</button>
          </article>
        ))}
      </div>
      {q && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={q.name} onClick={() => setQ(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <Placeholder src={q.image} label={q.name} tone={q.tone} />
            <div className="info">
              <h3>{q.name}</h3><p className="price">${q.price}</p><p>{q.note}</p>
              <button className="btn solid" onClick={() => { add(); setQ(null) }}>Add to cart</button>
              <button className="btn" onClick={() => setQ(null)} autoFocus>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
