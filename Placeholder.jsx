export default function Placeholder({ src, label, tone = 1, ratio = '4 / 5' }) {
  if (src) return <img className="ph" src={src} alt={label} loading="lazy" style={{ aspectRatio: ratio }} />
  return (
    <div className={`ph ph-${tone}`} style={{ aspectRatio: ratio }} role="img" aria-label={`${label} (image placeholder)`}>
      <span>{label}</span>
    </div>
  )
}
