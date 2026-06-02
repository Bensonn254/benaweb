import { Link } from 'react-router-dom'
import PageBanner from '../components/ui/PageBanner'

export default function Team() {
  return (
    <>
      <PageBanner
        title="Meet the Founder"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'The Founder' },
        ]}
      />

      <section style={{ padding: '80px 0' }}>
        <div className="container">

          <div className="sec-title text-center"
            style={{ marginBottom: 50 }}>
            <span className="sub-title">
              Solo-led. Network-powered.
            </span>
            <h2>Built by one developer.<br />Backed by a trusted network.</h2>
          </div>

          {/* Single card — centred */}
          <div className="row justify-content-center">
            <div className="team-block-two
              col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link to="/team/benard">
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
                    </Link>
                  </figure>
                  <div className="social-links">
                    <a
                      href="https://twitter.com/bensonn254"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <span className="share-icon fa fa-plus" />
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link to="/team/benard">
                      Benard Odhiambo
                    </Link>
                  </h4>
                  <span className="designation">
                    Frontend Developer &amp; Founder, BenaWeb
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* View profile CTA */}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link
              to="/team/benard"
              className="theme-btn btn-style-one"
            >
              <span className="btn-title">View Full Profile</span>
            </Link>
          </div>

          {/* ── Collaboration Strip ── */}
          <div style={{
            marginTop: 80,
            background: '#f8f4ed',
            borderRadius: 12,
            padding: '52px 48px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 40,
            flexWrap: 'wrap',
          }}>

            {/* Left — ghost collaborator card */}
            <div style={{
              flex: '1 1 220px',
              minWidth: 220,
              maxWidth: 280,
              border: '2px dashed #b8952a',
              borderRadius: 10,
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 14,
            }}>
              <div style={{
                width: 90, height: 90,
                borderRadius: '50%',
                background: '#e8e0d4',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center',
              }}>
                <i className="fa fa-user-plus" style={{
                  fontSize: 32, color: '#b8952a',
                }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <h5 style={{
                  color: '#1a2744', fontWeight: 700,
                  fontSize: 16, marginBottom: 4,
                  fontFamily: 'Montserrat, sans-serif',
                }}>
                  Your Name Here
                </h5>
                <span style={{
                  color: '#b8952a', fontSize: 13,
                  fontWeight: 500,
                }}>
                  Designer / Copywriter / SEO Specialist
                </span>
              </div>
            </div>

            {/* Right — text + CTA */}
            <div style={{ flex: '2 1 300px' }}>
              <span style={{
                display: 'inline-block',
                fontSize: 12, letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#b8952a', fontWeight: 600,
                marginBottom: 12,
                fontFamily: 'Montserrat, sans-serif',
              }}>
                Open to Collaboration
              </span>
              <h3 style={{
                color: '#1a2744', fontWeight: 700,
                fontSize: 'clamp(20px, 3vw, 28px)',
                lineHeight: 1.3, marginBottom: 16,
                fontFamily: 'Montserrat, sans-serif',
              }}>
                BenaWeb works with a trusted network
                of creatives on a project basis.
              </h3>
              <p style={{
                color: '#555', fontSize: 15,
                lineHeight: '28px', marginBottom: 12,
              }}>
                We collaborate with trusted designers,
                copywriters, and SEO specialists when
                a project calls for it — so every
                deliverable is done right.
              </p>
              <p style={{
                color: '#555', fontSize: 15,
                lineHeight: '28px', marginBottom: 28,
              }}>
                Are you a designer, writer, or digital
                marketer based in Kenya?
                We'd love to hear from you.
              </p>
              <a
                href="/contact"
                className="theme-btn btn-style-one"
              >
                <span className="btn-title">
                  Let's Collaborate
                </span>
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
