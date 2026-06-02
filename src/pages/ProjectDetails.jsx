import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/ui/PageBanner'
import projects from '../data/projects'
import NotFound from './NotFound'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <NotFound />

  const related = projects
    .filter(p => p.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <PageBanner
        title="Project Details"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Work', path: '/projects' },
          { label: project.title },
        ]}
      />

      <section className="project-details">
        <div className="container">

          {/* Hero image */}
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details__top">
                <div className="project-details__img">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="project-details__content">
            <div className="row">

              {/* Main text */}
              <div className="col-xl-8 col-lg-8">
                <div className="project-details__content-left">
                  <h3 className="mb-4">{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="mb-5" style={{ marginTop: 20 }}>
                    We delivered a responsive UI, optimised images,
                    and set up analytics to track performance.
                    After launch, the site loaded faster on mobile
                    and increased enquiries significantly.
                  </p>



                </div>
              </div>

              {/* Sidebar info */}
              <div className="col-xl-4 col-lg-4">

                {/* Project info box */}
                <div style={{
                  background: '#f8f4ed', borderRadius: 8,
                  padding: '28px 24px', marginBottom: 24,
                }}>
                  <h5 style={{
                    color: '#1a2744', fontWeight: 700,
                    marginBottom: 20,
                    paddingBottom: 12,
                    borderBottom: '2px solid #b8952a',
                  }}>
                    Project Info
                  </h5>
                  {[
                    { label: 'Client', value: project.client },
                    { label: 'Category', value: project.category },
                    { label: 'Date', value: project.date },
                  ].map(row => (
                    <div
                      key={row.label}
                      className="project-details__info-item"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: '1px solid #e8e0d4',
                        fontSize: 14,
                      }}
                    >
                      <span style={{
                        color: '#999', fontWeight: 600,
                      }}>
                        {row.label}
                      </span>
                      <span style={{
                        color: '#1a2744', fontWeight: 500,
                        textAlign: 'right', maxWidth: '60%',
                      }}>
                        {row.value}
                      </span>
                    </div>
                  ))}

                  {project.url && project.url !== '#' && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn btn-style-one"
                      style={{
                        marginTop: 20,
                        display: 'block',
                        textAlign: 'center',
                      }}
                    >
                      <span className="btn-title">
                        Visit Live Site
                      </span>
                    </a>
                  )}
                </div>

                {/* CTA box */}
                <div style={{
                  background: '#1a2744', borderRadius: 8,
                  padding: '28px 24px', color: '#fff',
                }}>
                  <h5 style={{
                    color: '#b8952a', marginBottom: 12,
                    fontWeight: 700,
                  }}>
                    Have a similar project?
                  </h5>
                  <p style={{
                    color: '#ccc', fontSize: 14,
                    marginBottom: 20, lineHeight: '22px',
                  }}>
                    Let's build something great together.
                    We respond within 24 hours.
                  </p>
                  <Link
                    to="/contact"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">Get a Quote</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Related projects */}
          <div style={{ marginTop: 60 }}>
            <div className="sec-title" style={{ marginBottom: 30 }}>
              <span className="sub-title">More Work</span>
              <h4 style={{ color: '#1a2744', fontWeight: 700 }}>
                Related Projects
              </h4>
            </div>
            <div className="row">
              {related.map(p => (
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
          </div>

        </div>
      </section>
    </>
  )
}
