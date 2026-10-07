import Placeholder from './Placeholder'
export default function Collection() {
  return (
    <section id="collection" className="collection">
      <h2 className="mega">Built<br />different.</h2>
      <p className="hand">Not everyone is meant to fit in.</p>
      <div className="mosaic">
        <div className="m1"><Placeholder label="Campaign — I" tone={2} ratio="3 / 4" /></div>
        <div className="m2"><Placeholder label="Campaign — II" tone={4} ratio="1 / 1" /></div>
        <div className="m3"><Placeholder label="Campaign — III" tone={1} ratio="16 / 10" /></div>
      </div>
    </section>
  )
}
