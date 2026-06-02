import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{
      minHeight: '80vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ textAlign: 'center', padding: '0 20px' }}>
        <div style={{
          fontSize: 'clamp(80px, 20vw, 160px)', fontWeight: 900,
          color: '#1a2744', lineHeight: 1, marginBottom: 16,
          fontFamily: 'Montserrat, sans-serif',
        }}>
          404
        </div>
        <h3 style={{
          fontSize: 24, color: '#1a2744',
          marginBottom: 12, fontWeight: 700,
        }}>
          This page doesn't exist.
        </h3>
        <p style={{ color: '#666', marginBottom: 32, fontSize: 16 }}>
          Let's get you back to something useful.
        </p>
        <Link
          to="/"
          className="theme-btn btn-style-one"
        >
          <span className="btn-title">Back to Home</span>
        </Link>
      </div>
    </section>
  )
}
