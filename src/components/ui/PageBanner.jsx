import { Link } from 'react-router-dom'

export default function PageBanner({ title, breadcrumbs = [] }) {
  return (
    <section
      className="page-banner-section"
      style={{
        background: 'linear-gradient(135deg, #1a2744 0%, #0f1929 60%, #1a2744 100%)',
        padding: '160px 0 40px',
        marginTop: 0,
      }}
    >
      <div className="auto-container">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            color: '#ffffff', fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700, marginBottom: 16, lineHeight: 1.2,
          }}>
            {title}
          </h1>
          <ul style={{
            display: 'flex', justifyContent: 'center', gap: 8,
            listStyle: 'none', padding: 0, margin: 0,
            flexWrap: 'wrap',
          }}>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && (
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>›</span>
                )}
                {crumb.path ? (
                  <Link to={crumb.path} style={{
                    color: '#b8952a', fontSize: 14, fontWeight: 500,
                    textDecoration: 'none',
                  }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
