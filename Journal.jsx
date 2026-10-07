import { JOURNAL } from '../data'
export default function Journal() {
  return (
    <section id="journal" className="journal">
      <h2 className="h2">Journal</h2>
      <ul>{JOURNAL.map(j => <li key={j.t}><a href="#journal"><span>{j.t}</span><small>{j.d}</small></a></li>)}</ul>
    </section>
  )
}
