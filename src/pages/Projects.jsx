import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'
import projects from '../data/projects'

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Our Work & Projects | BenaWeb — Nairobi</title>
        <meta name="description" content="Browse BenaWeb's portfolio — e-commerce platforms, React web apps, law firm websites, and more built for Kenyan businesses." />
        <link rel="canonical" href="https://benaweb.co.ke/projects" />
      </Helmet>
      <PageBanner
        title="Our Work"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Work' },
        ]}
      />

      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="sec-title text-center"
            style={{ marginBottom: 50 }}>
            <span className="sub-title">Recent Work</span>
            <h2>Digital Solutions for
              <br />Local & Global Brands</h2>
          </div>

          <div className="row g-3">
            {projects.map(p => (
              <div
                key={p.slug}
                className="col-lg-4 col-md-6 col-sm-12"
              >
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link to={`/projects/${p.slug}`}>
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </Link>
                      </figure>
                      <div className="info-box">
                        <Link
                          to={`/projects/${p.slug}`}
                          className="read-more"
                        >
                          <i className="fa fa-long-arrow-alt-right" />
                        </Link>
                        <span className="cat">{p.cat}</span>
                        <h6 className="title">
                          <Link to={`/projects/${p.slug}`}>
                            {p.title}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div style={{
            textAlign: 'center', marginTop: 60,
            padding: '40px', background: '#f8f4ed',
            borderRadius: 8,
          }}>
            <h4 style={{
              color: '#1a2744', marginBottom: 12,
              fontWeight: 700,
            }}>
              Have a project in mind?
            </h4>
            <p style={{
              color: '#666', fontSize: 15,
              marginBottom: 24,
            }}>
              Let's discuss your requirements and
              give you a clear timeline and quote.
            </p>
            <Link
              to="/contact"
              className="theme-btn btn-style-one"
            >
              <span className="btn-title">Start a Project</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
