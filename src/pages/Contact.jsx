import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_KEY

export default function Contact() {
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
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        form,
        EMAILJS_KEY
      )
      setStatus('success')
      setForm({
        from_name: '', from_email: '',
        subject: '', phone: '', message: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact BenaWeb | Get a Free Quote — Nairobi</title>
        <meta name="description" content="Get in touch with BenaWeb. Call +254 743 052 401 or email hello@benaweb.co.ke. Based in Nairobi, Kenya." />
        <link rel="canonical" href="https://benaweb.co.ke/contact" />
      </Helmet>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* ── Contact details + map ── */}
      <section className="contact-details">
        <div className="container">
          <div className="row">

            {/* Left — info */}
            <div className="col-xl-5 col-lg-6 mb-md-60">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">
                    Need any help?
                  </span>
                  <h2>Let's build something
                    together</h2>
                  <div className="text">
                    Whether you have a project brief or
                    just an idea, we'd love to hear from
                    you. Fill in the form or reach out
                    directly — we respond within 24 hours.
                  </div>
                </div>

                <ul className="list-unstyled
                  contact-details__info">

                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus" />
                    </div>
                    <div className="text">
                      <h6>Call or WhatsApp</h6>
                      <a href="tel:+254743052401">
                        +254 743 052 401
                      </a>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1" />
                    </div>
                    <div className="text">
                      <h6>Send an email</h6>
                      <a href="mailto:hello@benaweb.co.ke">
                        hello@benaweb.co.ke
                      </a>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location" />
                    </div>
                    <div className="text">
                      <h6>Service Area</h6>
                      <span>Nairobi, Kenya (Remote)</span>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="lnr-icon-clock" />
                    </div>
                    <div className="text">
                      <h6>Working Hours</h6>
                      <span>
                        Mon – Sat: 8:00am – 6:30pm
                        <br />Sunday: Closed
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <span className="lnr-icon-star" style={{ color: '#b8952a' }} />
                    </div>
                    <div className="text">
                      <h6>Google Profile</h6>
                      <a 
                        href="https://www.google.com/search?sca_esv=88cd9ac92428eef7&sxsrf=ANbL-n5PH9FvkXu4dQsesIl5wtQ90bNKUQ%3A1775207724309&q=BenaWeb&stick=H4sIAAAAAAAAAONgU1IxqDAyNjdLMjZIS0kyNjFITLEyqEhNMzW3MEw1NDcwMDMySzZfxMrulJqXGJ6aBACk3B5JMgAAAA&mat=CW7fdHdGRE0R&ved=2ahUKEwibj72OrNGTAxUy_rsIHW1qBF4QrMcEegQIJhAC"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#b8952a', textDecoration: 'underline' }}
                      >
                        Review us on Google
                      </a>
                    </div>
                  </li>

                </ul>
              </div>
            </div>

            {/* Right — map */}
            <div className="col-xl-7 col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743862!2d36.68238!3d-1.3028617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="550"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen=""
                loading="lazy"
                title="BenaWeb — Nairobi, Kenya"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="team-contact-form">
        <div className="container pb-100">
          <div className="sec-title text-center">
            <span className="sub-title">
              Contact With Us Now
            </span>
            <h2 className="section-title__title">
              Tell us about your project
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                id="contact_form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="from_name"
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
                        name="from_email"
                        className="form-control required email"
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
                        name="subject"
                        className="form-control required"
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
                        name="phone"
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
                        name="message"
                        className="form-control required"
                        rows="6"
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
                    borderRadius: 6,
                    padding: '14px 20px',
                    color: '#2e7d32',
                    marginBottom: 20,
                    fontWeight: 600,
                  }}>
                    ✓ Message sent! We'll get back
                    to you within 24 hours.
                  </div>
                )}

                {status === 'error' && (
                  <div style={{
                    background: '#ffebee',
                    border: '1px solid #ef9a9a',
                    borderRadius: 6,
                    padding: '14px 20px',
                    color: '#c62828',
                    marginBottom: 20,
                  }}>
                    Something went wrong. Please email{' '}
                    <a
                      href="mailto:hello@benaweb.co.ke"
                      style={{ color: '#c62828' }}
                    >
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
                      opacity: status === 'sending'
                        ? 0.7 : 1,
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
