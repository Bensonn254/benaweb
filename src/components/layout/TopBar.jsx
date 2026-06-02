import { useState, useEffect } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function TopBar() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    // Set initial class on mount
    if (window.scrollY <= 10) {
      document.body.classList.add('topbar-visible')
    }

    const onScroll = () => {
      const y = window.scrollY
      // Show ONLY when near top (within 10px)
      // Hide the moment user scrolls down
      if (y <= 10) {
        setVisible(true)
        document.body.classList.add('topbar-visible')
      } else {
        setVisible(false)
        document.body.classList.remove('topbar-visible')
      }
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <div
      className="topbar-strip"
      style={{
        background: '#0f0f0f',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 99999,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
        fontSize: 13,
      }}
    >
      <div className="auto-container">
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 0', flexWrap: 'wrap', gap: 8,
        }}>

          {/* Left */}
          <ul style={{ display: 'flex', gap: 24,
            listStyle: 'none', margin: 0, padding: 0,
            flexWrap: 'wrap' }}>
            <li style={{ display: 'flex',
              alignItems: 'center', gap: 6 }}>
              <FaEnvelope style={{ color: '#b8952a',
                fontSize: 12 }} />
              <a href="mailto:hello@benaweb.co.ke"
                style={{ color: '#aaa',
                  textDecoration: 'none', fontSize: 13 }}>
                hello@benaweb.co.ke
              </a>
            </li>
            <li style={{ display: 'flex',
              alignItems: 'center', gap: 6 }}>
              <FaMapMarkerAlt style={{ color: '#b8952a',
                fontSize: 12 }} />
              <span style={{ color: '#aaa', fontSize: 13 }}>
                Nairobi, Kenya
              </span>
            </li>
          </ul>

          {/* Right */}
          <div style={{ display: 'flex',
            alignItems: 'center', gap: 20 }}>
            <ul style={{ display: 'flex', gap: 0,
              listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ].map((item, i) => (
                <li key={item.label} style={{
                  display: 'flex', alignItems: 'center' }}>
                  {i > 0 && (
                    <span style={{ color: '#333',
                      margin: '0 8px' }}>/</span>
                  )}
                  <a href={item.href} style={{
                    color: '#aaa', textDecoration: 'none',
                    fontSize: 13, transition: 'color 0.2s',
                  }}
                    onMouseEnter={e =>
                      e.target.style.color = '#b8952a'}
                    onMouseLeave={e =>
                      e.target.style.color = '#aaa'}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex',
              gap: 14, alignItems: 'center' }}>
              {[
                { icon: <FaTwitter />,
                  href: 'https://twitter.com/bensonn254' },
                { icon: <FaFacebook />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ color: '#aaa', fontSize: 14,
                    transition: 'color 0.2s' }}
                  onMouseEnter={e =>
                    e.target.style.color = '#b8952a'}
                  onMouseLeave={e =>
                    e.target.style.color = '#aaa'}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
