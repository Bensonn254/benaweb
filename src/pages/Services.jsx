import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'
import services from '../data/services'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Web Design Services | BenaWeb — Nairobi</title>
        <meta name="description" content="Custom website design, React web apps, e-commerce, SEO, and website maintenance for Kenyan businesses. Starting from KES 20,000." />
        <link rel="canonical" href="https://benaweb.co.ke/services" />
      </Helmet>
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="services-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">What We Offer</span>
            <h2>Six services built for <br />Kenyan businesses.</h2>
          </div>
          <div className="row">
            {services.map(s => (
              <div
                key={s.slug}
                className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className={`icon ${s.icon}`} />
                  </div>
                  <h5 className="title">
                    <Link to={`/services/${s.slug}`}>{s.title}</Link>
                  </h5>
                  <div className="text">{s.short}</div>
                  <Link to={`/services/${s.slug}`} className="read-more">
                    <i className="fa fa-long-arrow-alt-right" /> Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-box">
            <div className="text">
              Need <strong>SEO, revamps, or ongoing maintenance</strong>?
              We cover that too.
            </div>
            <Link to="/contact" className="theme-btn btn-style-one">
              <span className="btn-title">Get a Free Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
