import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'
import services from '../data/services'
import NotFound from './NotFound'

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  if (!service) return <NotFound />

  return (
    <>
      <Helmet>
        <title>{service.title} | BenaWeb — Nairobi</title>
        <meta name="description" content={service.short} />
        <link rel="canonical" href={`https://benaweb.co.ke/services/${service.slug}`} />
      </Helmet>
      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      <section className="services-details">
        <div className="container">
          <div className="row">

            {/* ── Sidebar ── */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">

                {/* Service list */}
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      {services.map(s => (
                        <li
                          key={s.slug}
                          className={s.slug === slug ? 'current' : ''}
                        >
                          <Link to={`/services/${s.slug}`}>
                            <i className="fas fa-angle-right" />
                            <span>{s.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contact box */}
                <div className="sidebar-widget contact-widget">
                  <div className="widget-content"
                    style={{
                      background: '#1a2744', borderRadius: 8,
                      padding: '32px 28px', color: '#fff',
                      marginTop: 24,
                    }}>
                    <h5 style={{ color: '#b8952a', marginBottom: 12 }}>
                      Have a project in mind?
                    </h5>
                    <p style={{
                      color: '#ccc', fontSize: 14, marginBottom: 20,
                      lineHeight: '22px',
                    }}>
                      Tell us about your requirements and
                      get a clear quote within 24 hours.
                    </p>
                    <a
                      href="tel:+254743052401"
                      style={{ display: 'flex', alignItems: 'center',
                        gap: 8, color: '#fff', marginBottom: 12,
                        fontSize: 15, textDecoration: 'none' }}
                    >
                      <i className="fa fa-phone"
                        style={{ color: '#b8952a' }} />
                      +254 743 052 401
                    </a>
                    <a
                      href="mailto:hello@benaweb.co.ke"
                      style={{ display: 'flex', alignItems: 'center',
                        gap: 8, color: '#fff', fontSize: 15,
                        textDecoration: 'none' }}
                    >
                      <i className="fa fa-envelope"
                        style={{ color: '#b8952a' }} />
                      hello@benaweb.co.ke
                    </a>
                    <Link
                      to="/contact"
                      className="theme-btn btn-style-one"
                      style={{ marginTop: 24, display: 'block',
                        textAlign: 'center' }}
                    >
                      <span className="btn-title">Get a Quote</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Main content ── */}
            <div className="col-xl-8 col-lg-8">

              {/* Intro */}
              <img
                src="/images/resource/service-d1.jpg"
                alt={service.title}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: 8,
                  marginBottom: 30 }}
              />
              <h3 style={{ color: '#1a2744', marginBottom: 16 }}>
                {service.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '30px',
                fontSize: 16, marginBottom: 24 }}>
                {service.description}
              </p>

              {/* What's included */}
              <h4 style={{ color: '#1a2744', margin: '32px 0 16px',
                fontWeight: 700 }}>
                What's Included
              </h4>
              <div className="row">
                {service.details.map((d, i) => (
                  <div key={i} className="col-md-6"
                    style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', gap: 10,
                      alignItems: 'flex-start' }}>
                      <i className="fa fa-check-circle"
                        style={{ color: '#b8952a', marginTop: 3,
                          flexShrink: 0 }} />
                      <span style={{ color: '#444', fontSize: 15 }}>
                        {d}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why choose us */}
              <div style={{
                background: '#f8f4ed', borderRadius: 8,
                padding: '28px 32px', margin: '36px 0',
                borderLeft: '4px solid #b8952a',
              }}>
                <h4 style={{ color: '#1a2744', marginBottom: 12,
                  fontWeight: 700 }}>
                  Why BenaWeb for {service.title}?
                </h4>
                <p style={{ color: '#555', fontSize: 15,
                  lineHeight: '28px', margin: 0 }}>
                  {service.whyUs}
                </p>
              </div>

              {/* Process steps */}
              <h4 style={{ color: '#1a2744', margin: '36px 0 24px',
                fontWeight: 700 }}>
                Our Process
              </h4>
              <div className="row">
                {service.process.map(p => (
                  <div key={p.step} className="col-md-6"
                    style={{ marginBottom: 24 }}>
                    <div style={{
                      display: 'flex', gap: 16,
                      alignItems: 'flex-start',
                    }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: '#1a2744', color: '#b8952a',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontWeight: 700,
                        fontSize: 13, flexShrink: 0,
                        fontFamily: 'Montserrat, sans-serif',
                      }}>
                        {p.step}
                      </div>
                      <div>
                        <h6 style={{ color: '#1a2744', fontWeight: 700,
                          marginBottom: 4, fontSize: 15 }}>
                          {p.title}
                        </h6>
                        <p style={{ color: '#666', fontSize: 14,
                          lineHeight: '22px', margin: 0 }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h4 style={{ color: '#1a2744', margin: '36px 0 20px',
                fontWeight: 700 }}>
                Frequently Asked Questions
              </h4>
              {service.faq.map((item, i) => (
                <div key={i} style={{
                  padding: '16px 0',
                  borderBottom: '1px solid #eee',
                }}>
                  <h6 style={{ color: '#1a2744', fontWeight: 700,
                    marginBottom: 8, fontSize: 15 }}>
                    {item.q}
                  </h6>
                  <p style={{ color: '#666', fontSize: 15,
                    lineHeight: '26px', margin: 0 }}>
                    {item.a}
                  </p>
                </div>
              ))}

              {/* Final CTA */}
              <div style={{ marginTop: 40 }}>
                <Link to="/contact" className="theme-btn btn-style-one">
                  <span className="btn-title">
                    Start Your Project
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
