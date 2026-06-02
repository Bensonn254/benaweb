import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import PageBanner from '../components/ui/PageBanner'

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_KEY

const skills = [
  { title: 'React & Firebase', pct: '90%' },
  { title: 'UI/UX Design',     pct: '85%' },
  { title: 'SEO & Performance', pct: '80%' },
]

export default function TeamDetails() {
  const [form, setForm] = useState({
    from_name: '', from_email: '',
    subject: '', phone: '', message: '',
  })
  const [status, setStatus] = useState(null)

  const set = field => e =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE, EMAILJS_TEMPLATE,
        form, EMAILJS_KEY
      )
      setStatus('success')
      setForm({
        from_name: '', from_email: '',
        subject: '', phone: '', message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageBanner
        title="Benard Odhiambo"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'The Founder', path: '/team' },
          { label: 'Benard Odhiambo' },
        ]}
      />

      <section className="team-details">
        <div className="container pb-100">

          {/* ── Top section ── */}
          <div className="team-details__top pb-70">
            <div className="row">

              {/* Photo */}
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-left">
                    <div className="team-details__top-img" style={{ position: 'relative' }}>
                      <picture>
                        <source
                          srcSet="/images/resource/profile_img.webp"
                          type="image/webp"
                        />
                        <img
                          src="/images/resource/profile_img.jpg"
                          alt="Benard Odhiambo"
                          loading="lazy"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </picture>
                      <div className="signature-stamp">
                        <img 
                          src="/images/resource/my_sign-removebg-preview.png" 
                          alt="Benard Signature" 
                        />
                      </div>
                    </div>
                </div>
              </div>

              {/* Info */}
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">

                    <h3 className="team-details__top-name">
                      Benard Odhiambo
                    </h3>
                    <p className="team-details__top-title">
                      Frontend Developer &amp; Founder, BenaWeb
                    </p>
                    <p className="team-details__top-text-1">
                      "We build websites that work as hard
                      as you do."
                    </p>

                    {/* Contact details */}
                    <div className="team-details-contact mb-30">
                      <h5 className="mb-0">Email Address</h5>
                      <div>
                        <a href="mailto:hello@benaweb.co.ke">
                          hello@benaweb.co.ke
                        </a>
                      </div>
                    </div>
                    <div className="team-details-contact mb-30">
                      <h5 className="mb-0">Phone Number</h5>
                      <div>
                        <a href="tel:+254743052401">
                          +254 743 052 401
                        </a>
                      </div>
                    </div>
                    <div className="team-details-contact mb-30">
                      <h5 className="mb-0">Web Address</h5>
                      <div>
                        <a href="/">benaweb.co.ke</a>
                      </div>
                    </div>

                    {/* Social */}
                    <div className="team-details__social">
                      <a
                        href="https://twitter.com/bensonn254"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Skills + Experience ── */}
          <div className="team-details__bottom pt-100">
            <div className="row">

              {/* How we work */}
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__bottom-left">
                  <h4 className="team-details__bottom-left-title">
                    How We Work
                  </h4>
                  <p className="team-details__bottom-left-text">
                    Every project starts with a discovery call to
                    understand your goals, your users, and your
                    market. From there we move to wireframes,
                    design approval, development, and testing —
                    keeping you in the loop at every stage.
                    We deliver on time and communicate directly,
                    with no account managers in between.
                  </p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__bottom-right">
                  <div className="team-details__progress">
                    {skills.map(s => (
                      <div
                        key={s.title}
                        className="team-details__progress-single"
                      >
                        <h4 className="team-details__progress-title">
                          {s.title}
                        </h4>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent={s.pct}
                            style={{ width: s.pct }}
                          >
                            <div className="count-text">
                              {s.pct}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="team-contact-form">
        <div className="container pb-100">
          <div className="sec-title text-center">
            <span className="sub-title">Work With Us</span>
            <h2 className="section-title__title">
              Tell us about your project
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Your Name"
                        required
                        value={form.from_name}
                        onChange={set('from_name')}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={form.from_email}
                        onChange={set('from_email')}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Subject"
                        required
                        value={form.subject}
                        onChange={set('subject')}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone (optional)"
                        value={form.phone}
                        onChange={set('phone')}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Tell us about your project..."
                        required
                        value={form.message}
                        onChange={set('message')}
                      />
                    </div>
                  </div>
                </div>

                {status === 'success' && (
                  <div style={{
                    background: '#e8f5e9',
                    border: '1px solid #a5d6a7',
                    borderRadius: 6, padding: '14px 20px',
                    color: '#2e7d32', marginBottom: 20,
                    fontWeight: 600,
                  }}>
                    ✓ Message sent! We'll be in touch
                    within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{
                    background: '#ffebee',
                    border: '1px solid #ef9a9a',
                    borderRadius: 6, padding: '14px 20px',
                    color: '#c62828', marginBottom: 20,
                  }}>
                    Something went wrong. Please email{' '}
                    <a href="mailto:hello@benaweb.co.ke"
                      style={{ color: '#c62828' }}>
                      hello@benaweb.co.ke
                    </a>{' '}
                    directly.
                  </div>
                )}

                <div className="mb-3">
                  <button
                    type="submit"
                    className="theme-btn btn-style-one"
                    disabled={status === 'sending'}
                    style={{
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                  >
                    <span className="btn-title">
                      {status === 'sending'
                        ? 'Sending...'
                        : 'Send Message'}
                    </span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}
