import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'
import pricing from '../data/pricing'

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Web Design Pricing | BenaWeb — From KES 20,000</title>
        <meta name="description" content="Transparent web design pricing for Kenyan businesses. Starter from KES 20K, Business from KES 40K, Custom Web App from KES 70K." />
        <link rel="canonical" href="https://benaweb.co.ke/pricing" />
      </Helmet>
      <PageBanner
        title="Pricing"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Pricing' },
        ]}
      />

      <section className="pricing-section">
        <div className="bg" />
        <div className="auto-container">

          <div className="sec-title text-center">
            <span className="sub-title">Transparent Pricing</span>
            <h2>Project pricing that fits <br />your budget and goals</h2>
          </div>

          <div className="row">
            {pricing.map(plan => (
              <div
                key={plan.id}
                className={`pricing-block${plan.featured ? ' tagged' : ''} col-lg-4 col-md-6 col-sm-12`}
              >
                <div className="inner-box">
                  <div className="title-box">
                    <h3 className="title">{plan.title}</h3>
                    <div className="text">{plan.subtitle}</div>
                  </div>
                  <h2 className="price">
                    <sup>{plan.price.split(' ')[0]} </sup>
                    {plan.price.split(' ')[1]}
                    <sub>{plan.suffix}</sub>
                  </h2>
                  <h6 className="sub-title">What's included:</h6>
                  <ul className="features">
                    {plan.features.map(f => (
                      <li
                        key={f.text}
                        className={f.included ? '' : 'false'}
                      >
                        {f.text}
                      </li>
                    ))}
                  </ul>
                  <p style={{
                    fontSize: 12, color: '#999',
                    marginBottom: 16, fontStyle: 'italic'
                  }}>
                    {plan.note}
                  </p>
                  <Link to="/contact" className="theme-btn btn-style-one">
                    <span className="btn-title">{plan.cta}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Retainer strip */}
          <div className="text-center" style={{ padding: '40px 0 10px' }}>
            <p style={{ fontSize: 15, color: '#666' }}>
              Need ongoing support? Ask about our{' '}
              <strong>monthly retainer packages</strong>{' '}
              starting from <strong>KES 8,000/month</strong>.
            </p>
            <Link
              to="/contact"
              className="theme-btn btn-style-one"
              style={{ marginTop: 16, display: 'inline-block' }}
            >
              <span className="btn-title">Ask About Retainers</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
