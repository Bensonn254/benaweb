import { Link } from 'react-router-dom'
import {
  FaTwitter, FaFacebook, FaInstagram,
  FaPaperPlane, FaEnvelope, FaPhoneSquare, FaMapMarkerAlt, FaStar
} from 'react-icons/fa'

const portfolioThumbs = [1,2,3,4,5,6]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="main-footer" style={{ backgroundColor: '#181818' }}>

      {/* ── Subscribe strip ── */}
      <div className="auto-container">
        <div className="subscribe-form" style={{ backgroundColor: '#1a2744', padding: '0 60px' }}>
          <div className="title-column">
            <h5 className="title" style={{ color: '#fff', paddingLeft: 0, marginBottom: 35, marginTop: 35 }}>
              <i className="icon flaticon-licensing" style={{ color: '#b8952a', marginRight: 12 }} />
              Get web tips &amp; project updates
            </h5>
          </div>
          <div className="form-column">
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: 0, width: 400 }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  style={{
                    flex: 1, height: 54, background: 'transparent',
                    border: 'none', borderBottom: '3px solid rgba(255,255,255,0.2)',
                    color: '#fff', fontSize: 15, paddingRight: 60,
                    outline: 'none'
                  }}
                  className="footer-email-input"
                />
                <button
                  type="submit"
                  style={{
                    position: 'relative', zIndex: 5,
                    background: 'transparent', border: 'none',
                    color: '#b8952a', fontSize: 20, cursor: 'pointer',
                    marginLeft: -40
                  }}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── Widgets ── */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">

            {/* Col 1 — About */}
            <div className="footer-column col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget about-widget">
                <div className="logo" style={{ marginBottom: 20 }}>
                  <Link to="/" className="benaweb-logo logo-footer">
                    <div className="bw-wordmark">
                      <span className="bw-bena" style={{ color: '#f8f4ed' }}>BENA</span>
                      <span className="bw-web" style={{ color: '#b8952a' }}>WEB</span>
                    </div>
                    <div className="bw-tag" style={{ color: '#b8952a', opacity: 0.7 }}>
                      Building Your Digital Presence
                    </div>
                  </Link>
                </div>
                <div className="text" style={{ color: '#8f8f8f', fontSize: 15, lineHeight: '28px', marginBottom: 20 }}>
                  Nairobi-based digital studio building high-performance websites, 
                  React web apps, and SEO solutions for brands across Africa and beyond.
                </div>
                <ul style={{ display: 'flex', gap: 10, listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Twitter', href: 'https://twitter.com/bensonn254', icon: <FaTwitter /> },
                    { label: 'Facebook', href: '#', icon: <FaFacebook /> },
                    { label: 'Instagram', href: '#', icon: <FaInstagram /> },
                  ].map(({ label, href, icon }, sIdx) => (
                    <li key={`${label}-${sIdx}`}>
                      <a
                        href={href}
                        target={href !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 40, height: 40, borderRadius: '50%',
                          backgroundColor: '#1a2744', color: '#fff', fontSize: 14,
                          transition: 'background 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8952a'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a2744'}
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 2 — Explore */}
            <div className="footer-column col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget links-widget" style={{ paddingLeft: 40 }}>
                <h6 className="widget-title">Explore</h6>
                <ul className="user-links">
                  <li><Link to="/about">About Company</Link></li>
                  <li><Link to="/blog">News &amp; Media</Link></li>
                  <li><Link to="/projects">Our Projects</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Col 3 — Contact */}
            <div className="footer-column col-xl-4 col-lg-4 col-md-12">
              <div className="footer-widget contacts-widget">
                <h6 className="widget-title">Contact</h6>
                <div className="text">Nairobi, Kenya</div>
                <ul className="contact-info" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ color: '#fff', marginBottom: 10 }}>
                    <FaEnvelope style={{ color: '#b8952a', marginRight: 10 }} />
                    <a href="mailto:hello@benaweb.co.ke" style={{ color: '#fff' }}>hello@benaweb.co.ke</a>
                  </li>
                  <li style={{ color: '#fff', marginBottom: 10 }}>
                    <FaPhoneSquare style={{ color: '#b8952a', marginRight: 10 }} />
                    <a href="tel:+254743052401" style={{ color: '#fff' }}>+254 743 052 401</a>
                  </li>
                  <li style={{ color: '#8f8f8f', marginBottom: 10 }}>
                    <FaMapMarkerAlt style={{ color: '#b8952a', marginRight: 10 }} />
                    Serving: Nairobi, Kenya 
                  </li>
                  <li style={{ marginTop: 15 }}>
                    <a 
                      href="https://www.google.com/search?sca_esv=88cd9ac92428eef7&sxsrf=ANbL-n5PH9FvkXu4dQsesIl5wtQ90bNKUQ%3A1775207724309&q=BenaWeb&stick=H4sIAAAAAAAAAONgU1IxqDAyNjdLMjZIS0kyNjFITLEyqEhNMzW3MEw1NDcwMDMySzZfxMrulJqXGJ6aBACk3B5JMgAAAA&mat=CW7fdHdGRE0R&ved=2ahUKEwibj72OrNGTAxUy_rsIHW1qBF4QrMcEegQIJhAC"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#b8952a', border: '1px solid #b8952a', padding: '6px 12px', 
                        borderRadius: 4, display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 13, textDecoration: 'none'
                      }}
                    >
                      <FaStar /> Review us on Google
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer bottom ── */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              &copy; {year} <Link to="/" style={{ color: 'inherit' }}>BenaWeb</Link>. All rights reserved.
            </div>
            <div style={{
              textAlign: 'center', marginTop: 8,
              fontSize: 13, color: '#8f8f8f',
            }}>
              Built and maintained by{' '}
              <a
                href="https://bensonn254-portfolio.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#b8952a', textDecoration: 'none' }}
              >
                Benard
              </a>.
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
