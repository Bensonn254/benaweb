import { useState } from 'react'
import PageBanner from '../components/ui/PageBanner'
import { Helmet } from 'react-helmet-async'
import faqs from '../data/faqs'

export default function Faq() {
  const [openId, setOpenId] = useState(1)

  return (
    <>
      <Helmet>
        <title>FAQ | BenaWeb — Web Design Questions Answered</title>
        <meta name="description" content="Answers to common questions about working with BenaWeb — timelines, pricing, process, and mobile optimisation." />
        <link rel="canonical" href="https://benaweb.co.ke/faq" />
      </Helmet>
      <PageBanner
        title="Frequently Asked Questions"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section style={{ padding: '80px 0' }}>
        <div className="auto-container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {faqs.map(faq => (
              <div
                key={faq.id}
                style={{
                  borderBottom: '1px solid #eee',
                  marginBottom: 4,
                }}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    background: 'none', border: 'none',
                    padding: '20px 0', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', gap: 16,
                  }}
                >
                  <span style={{
                    fontSize: 17, fontWeight: 600,
                    color: openId === faq.id ? '#b8952a' : '#1a2744',
                    fontFamily: 'Montserrat, sans-serif',
                    transition: 'color 0.2s',
                    textAlign: 'left',
                  }}>
                    {faq.question}
                  </span>
                  <span style={{
                    fontSize: 20, fontWeight: 700,
                    color: '#b8952a', flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: openId === faq.id ? 'rotate(45deg)' : 'rotate(0)',
                    display: 'inline-block',
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: openId === faq.id ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}>
                  <p style={{
                    padding: '0 0 20px', color: '#666',
                    fontSize: 15, lineHeight: '28px',
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 20 }}>
              Still have questions? Reach out directly.
            </p>
            <a
              href="/contact"
              className="theme-btn btn-style-one"
            >
              <span className="btn-title">Get in Touch</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
