import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaTimes, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Pages',
    children: [
      { label: 'About', path: '/about' },
      { label: 'The Founder', path: '/team' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Custom Website Design', path: '/services/custom-website-design' },
      { label: 'React Web Application', path: '/services/react-web-application' },
      { label: 'E-Commerce Development', path: '/services/ecommerce-development' },
      { label: 'Website Revamp', path: '/services/website-revamp' },
      { label: 'SEO & Content Optimization', path: '/services/seo-content-optimization' },
      { label: 'Website Care & Maintenance', path: '/services/website-care-maintenance' },
    ],
  },
  { label: 'Work', path: '/projects' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const Logo = ({ benaColor, webColor, tagColor, tagOpacity = 1 }) => (
  <Link to="/" className="benaweb-logo" style={{ textDecoration: 'none' }}>
    <div className="bw-wordmark">
      <span className="bw-bena" style={{ color: benaColor }}>BENA</span>
      <span className="bw-web" style={{ color: webColor }}>WEB</span>
    </div>
    <div className="bw-tag" style={{ color: tagColor, opacity: tagOpacity }}>
      African-Led. Globally Focused.
    </div>
  </Link>
)

const NavList = ({ onLinkClick, textColor = '#fff' }) => {
  const location = useLocation()
  return (
    <ul className="navigation" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: 0 }}>
      {navItems.map((item, idx) =>
        item.children ? (
          <li key={`${item.label}-${idx}`} className="dropdown" style={{ position: 'relative' }}>
            {item.path ? (
              <NavLink to={item.path} style={{ color: textColor }} onClick={onLinkClick}>
                {item.label}
              </NavLink>
            ) : (
              <a href="#" style={{ color: textColor }} onClick={e => e.preventDefault()}>
                {item.label}
              </a>
            )}
            <ul style={{ listStyle: 'none', padding: '10px 0', margin: 0 }}>
              {item.children.map((c, cIdx) => (
                <li key={`${c.path}-${cIdx}`}>
                  <NavLink to={c.path} onClick={onLinkClick}>{c.label}</NavLink>
                </li>
              ))}
            </ul>
          </li>
        ) : item.label === 'Contact' ? (
          <li key={`${item.path}-${idx}`} className={location.pathname === item.path ? 'current' : ''}>
            <NavLink
              to={item.path}
              onClick={onLinkClick}
              style={({ isActive }) => ({
                background: isActive ? '#8a6d1e' : '#b8952a',
                color: '#ffffff',
                padding: '8px 20px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'background 0.2s',
                textDecoration: 'none',
                display: 'inline-block',
              })}
            >
              {item.label}
            </NavLink>
          </li>
        ) : (
          <li key={`${item.path}-${idx}`} className={location.pathname === item.path ? 'current' : ''}>
            <NavLink to={item.path} onClick={onLinkClick} style={{ color: textColor }}>
              {item.label}
            </NavLink>
          </li>
        )
      )}
    </ul>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // eslint-disable-next-line
  useEffect(() => { setMobileOpen(false) }, [location])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── STICKY HEADER ── */}
      <div className={`sticky-header${scrolled ? ' fixed-header' : ''}`}>
        <div className="auto-container">
          <div className="inner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="logo">
              <Logo benaColor="#1a2744" webColor="#8a6d1e" tagColor="#8a6d1e" tagOpacity={0.85} />
            </div>
            <div className="main-menu" style={{ display: 'flex', alignItems: 'center' }}>
              <nav className="nav">
                <NavList textColor="#1a2744" />
              </nav>
            </div>
            {/* Inside sticky header inner-container — add this */}
            <div className="outer-box">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                style={{
                  background: 'none', border: 'none',
                  cursor: 'pointer', padding: '6px',
                  display: 'flex', flexDirection: 'column', gap: '5px',
                }}
              >
                <span style={{ display: 'block', width: 25, height: 2,
                  background: '#1a2744', borderRadius: 2 }} />
                <span style={{ display: 'block', width: 25, height: 2,
                  background: '#1a2744', borderRadius: 2 }} />
                <span style={{ display: 'block', width: 25, height: 2,
                  background: '#1a2744', borderRadius: 2 }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <header className="main-header header-style-three">
        <div className="auto-container">
          <div className="main-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}>

            {/* Logo */}
            <div className="logo-box">
              <Logo benaColor="#ffffff" webColor="#b8952a" tagColor="#b8952a" tagOpacity={0.85} />
            </div>

            {/* Desktop nav */}
            <div className="nav-outer" style={{ display: 'flex', alignItems: 'center' }}>
              <nav className="nav main-menu">
                <NavList textColor="#ffffff" />
              </nav>
            </div>

            {/* Hamburger — always visible, toggled by CSS at breakpoint */}
            <div className="outer-box">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  zIndex: 100,
                }}
              >
                <span style={{ display: 'block', width: 25, height: 2, background: '#fff', borderRadius: 2 }} />
                <span style={{ display: 'block', width: 25, height: 2, background: '#fff', borderRadius: 2 }} />
                <span style={{ display: 'block', width: 25, height: 2, background: '#fff', borderRadius: 2 }} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 999998,
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
        }}
      />

      {/* Drawer — RIGHT side */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 300,
          maxWidth: '100%',
          height: '100vh',
          background: '#1a2744',
          zIndex: 999999,
          transform: mobileOpen
            ? 'translateX(0)'
            : 'translateX(100%)',
          transition: 'transform 0.4s ease',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Upper box — logo + close */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <div style={{ display: 'inline-flex',
              alignItems: 'baseline' }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900, fontSize: 22,
                letterSpacing: -0.5, color: '#ffffff',
                lineHeight: 1,
              }}>BENA</span>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 300, fontSize: 22,
                letterSpacing: -0.5, color: '#b8952a',
                lineHeight: 1,
              }}>WEB</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              background: 'none', border: 'none',
              color: '#b8952a', fontSize: 22,
              cursor: 'pointer', lineHeight: 1,
              padding: 4,
            }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <ul style={{
          listStyle: 'none', margin: 0, padding: 0,
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {navItems.map(item =>
            item.children ? (
              <li key={item.label} style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}>
                <details>
                  <summary style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 20px',
                    cursor: 'pointer',
                    listStyle: 'none',
                    color: '#ffffff',
                    fontSize: 15,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                  }}>
                    {item.label}
                    <span style={{
                      color: '#b8952a', fontSize: 18,
                    }}>›</span>
                  </summary>
                  <ul style={{
                    listStyle: 'none', padding: 0, margin: 0,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    {item.children.map(c => (
                      <li key={c.path} style={{
                        borderBottom:
                          '1px solid rgba(255,255,255,0.1)',
                      }}>
                        <NavLink
                          to={c.path}
                          onClick={() => setMobileOpen(false)}
                          style={({ isActive }) => ({
                            display: 'block',
                            padding: '10px 20px 10px 36px',
                            color: isActive
                              ? '#b8952a' : '#ccc',
                            textDecoration: 'none',
                            fontSize: 14,
                            fontFamily: 'Montserrat, sans-serif',
                          })}
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : item.label === 'Contact' ? (
              <li key={item.path} style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                padding: '12px 20px',
              }}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: '#b8952a',
                    color: '#fff',
                    borderRadius: 4,
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: 'none',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Contact
                </NavLink>
              </li>
            ) : (
              <li key={item.path} style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '12px 20px',
                    color: isActive ? '#b8952a' : '#ffffff',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                    transition: 'color 0.2s',
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Contact info at bottom */}
        <div style={{
          marginTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 16px',
          paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
        }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: 10, marginBottom: 12,
            }}>
            <span style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid rgba(184,149,42,0.5)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}>
              <FaPhone style={{ color: '#b8952a',
                fontSize: 14 }} />
            </span>
            <div>
              <div style={{ color: '#aaa', fontSize: 10,
                letterSpacing: 2, textTransform: 'uppercase',
                marginBottom: 2 }}>
                CALL NOW
              </div>
              <a href="tel:+254743052401" style={{
                color: '#fff', fontSize: 14,
                textDecoration: 'none',
              }}>
                +254 743 052 401
              </a>
            </div>
          </div>

            <div style={{
              display: 'flex', alignItems: 'center',
              gap: 10, marginBottom: 12,
            }}>
            <span style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid rgba(184,149,42,0.5)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}>
              <FaEnvelope style={{ color: '#b8952a',
                fontSize: 14 }} />
            </span>
            <div>
              <div style={{ color: '#aaa', fontSize: 10,
                letterSpacing: 2, textTransform: 'uppercase',
                marginBottom: 2 }}>
                SEND EMAIL
              </div>
              <a href="mailto:hello@benaweb.co.ke" style={{
                color: '#fff', fontSize: 13,
                textDecoration: 'none',
              }}>
                hello@benaweb.co.ke
              </a>
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid rgba(184,149,42,0.5)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}>
              <FaClock style={{ color: '#b8952a',
                fontSize: 14 }} />
            </span>
            <div>
              <div style={{ color: '#aaa', fontSize: 10,
                letterSpacing: 2, textTransform: 'uppercase',
                marginBottom: 2 }}>
                WORKING HOURS
              </div>
              <span style={{ color: '#fff', fontSize: 13 }}>
                Mon – Sat 8:00 – 6:30
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
