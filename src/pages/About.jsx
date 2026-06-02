import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'
import services from '../data/services'
import projects from '../data/projects'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About BenaWeb | Nairobi Web Design Studio</title>
        <meta name="description" content="Learn about BenaWeb — a Nairobi-based web studio specializing in React, Firebase, and mobile-first web design for Kenyan businesses." />
        <link rel="canonical" href="https://benaweb.co.ke/about" />
      </Helmet>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
      />

      {/* ── About Intro Section ── */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row">

            {/* Content — order-2 so it appears right on desktop */}
            <div className="content-column col-xl-6 col-lg-7
              col-md-12 col-sm-12 order-2 wow fadeInRight"
              data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Get to Know</span>
                  <h2>Your Trusted Web Design and Development Company in Kenya</h2>
                  <div className="text">
                    BenaWeb is a professional web design company in Nairobi founded
                    with a sole purpose of helping businesses to thrive and increase
                    their online presence. What started as a focused development platform
                    has grown into a reliable agency serving clients locally and
                    internationally — from startups to enterprise businesses.
                  </div>
                </div>

                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle" />
                    Mobile-first design built for Kenyan
                    users and networks.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    React + Firebase stack — fast, scalable,
                    zero server headaches.
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    4+ live production projects across
                    e-commerce, legal &amp; job platforms.
                  </li>
                </ul>

                <div className="btn-box">
                  <a
                    href="tel:+254743052401"
                    className="info-btn"
                  >
                    <i className="icon fa fa-phone" />
                    <small>Have a project? Let's talk</small>
                    +254 743 052 401
                  </a>
                  <Link
                    to="/contact"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">Get a Free Quote</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="image-column col-xl-6 col-lg-5
              col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img
                    src="/images/resource/about-1.jpg"
                    alt="About BenaWeb"
                    loading="lazy"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </figure>
                <figure className="image-2 overlay-anim
                  wow fadeInRight">
                  <img
                    src="/images/resource/about-2.jpg"
                    alt="BenaWeb at work"
                    loading="lazy"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </figure>
                <div className="experience bounce-y">
                  <div className="inner">
                    <i className="icon flaticon-discuss" />
                    <div className="text">
                      <strong>4+</strong> Live production
                      <br />projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission & Values Section ── */}
      <section className="mission-section" style={{ background: '#f8f4ed', padding: '100px 0' }}>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Our Mission</span>
                <h2>Helping our clients succeed online.</h2>
              </div>
              <div className="text" style={{ fontSize: '17px', color: '#666', lineHeight: '1.8' }}>
                Our goal as an agency is to give our customers the best digital marketing services
                and enable them to succeed online. We keep our clients ahead using the latest
                trends and technologies for them to be successful in a competitive digital landscape.
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Our Core Values</span>
                <h2>The principles we live by.</h2>
              </div>
              <div className="row">
                {[
                  { title: 'Innovation', icon: 'fa fa-lightbulb', text: 'Striving for creative solutions using modern tech.' },
                  { title: 'Transparency', icon: 'fa fa-shield-alt', text: 'Clear communication throughout the project.' },
                  { title: 'Customer-centric', icon: 'fa fa-user-check', text: 'Your goals and needs always come first.' },
                ].map((v, idx) => (
                  <div key={idx} className="col-sm-6 mb-4">
                    <div className="value-box" style={{ background: '#fff', padding: '25px', borderRadius: '12px' }}>
                      <i className={v.icon} style={{ color: 'var(--theme-color2)', fontSize: '24px', marginBottom: '15px', display: 'block' }} />
                      <h5 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{v.title}</h5>
                      <p style={{ fontSize: '14px', margin: 0 }}>{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="services-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">What We're Offering</span>
            <h2>Services we're offering to<br />our customers.</h2>
          </div>
          <div className="row">
            {services.slice(0, 3).map(s => (
              <div
                key={s.slug}
                className="service-block col-lg-4
                  col-md-6 col-sm-12 wow fadeInUp"
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <i className={`icon ${s.icon}`} />
                  </div>
                  <h5 className="title">
                    <Link to={`/services/${s.slug}`}>
                      {s.title}
                    </Link>
                  </h5>
                  <div className="text">{s.short}</div>
                  <Link
                    to={`/services/${s.slug}`}
                    className="read-more"
                  >
                    <i className="fa fa-long-arrow-alt-right" />
                    {' '}Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom-box">
            <div className="text">
              Need <strong>SEO, revamps, or
              ongoing maintenance</strong>?
              We cover that too.
            </div>
            <Link to="/services"
              className="theme-btn btn-style-one">
              <span className="btn-title">See All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features / Why BenaWeb ── */}
      <section className="features-section">
        <div className="bg bg-pattern-1" />
        <div className="auto-container">
          <div className="row">

            {/* Features list */}
            <div className="content-column col-xl-5
              col-lg-6 col-md-12">
              <div className="inner-column wow fadeInRight">
                <div className="sec-title">
                  <span className="sub-title">Why BenaWeb</span>
                  <h2>What makes working<br />with us different</h2>
                </div>
                {[
                  {
                    title: 'Built for Real Users',
                    text: 'Clean layouts designed for Kenyan mobile users who browse on Android on a 3G connection.',
                  },
                  {
                    title: 'Modern Tech Stack',
                    text: 'React, Firebase, Tailwind — fast load times, easy updates, and no expensive server bills.',
                  },
                  {
                    title: 'Personally Delivered',
                    text: 'You work directly with our founder, not an account manager. Direct communication, faster turnaround.',
                  },
                ].map(f => (
                  <div key={f.title} className="feature-block">
                    <div className="inner-box">
                      <div className="content">
                        <span className="icon">
                          <i className="fa fa-check" />
                        </span>
                        <h5 className="title">{f.title}</h5>
                        <div className="text">{f.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side image */}
            <div className="image-column col-xl-7
              col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <figure className="image">
                    <img
                      src="/images/resource/image-2.jpg"
                      alt="Why BenaWeb"
                      loading="lazy"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </figure>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Work counter ── */}
      <section className="projects-section-two pt-0" style={{ paddingBottom: 100 }}>
        <div
          className="bg-image"
          style={{
            backgroundImage:
              'url(/images/background/2.jpg)',
          }}
        />
        <div className="auto-container">
          <div className="upper-box">
            <div className="counter-column">
              <div className="count-box">
                <span className="title">
                  Live Production Projects
                </span>
                <div className="numbers">4+</div>
              </div>
            </div>
            <div className="text-column">
              <div className="text">
                Every project in our portfolio is built
                with full ownership — from design
                to deployment.
              </div>
            </div>
          </div>

          <div className="sec-title text-center light">
            <span className="sub-title">Recent Work</span>
            <h2>A few projects we're proud of</h2>
          </div>

          <div className="row">
            {projects.slice(0, 3).map(p => (
              <div key={p.slug} className="project-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
                  <div className="image-box">
                    <figure className="image" style={{ margin: 0 }}>
                      <Link to={`/projects/${p.slug}`}>
                        <img src={p.image} alt={p.title} loading="lazy" style={{ width: '100%', height: 'auto' }} />
                      </Link>
                    </figure>
                    <div className="info-box" style={{ padding: '20px' }}>
                      <span className="cat" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--theme-color2)' }}>{p.cat}</span>
                      <h5 className="title" style={{ margin: '5px 0' }}>
                        <Link to={`/projects/${p.slug}`}>{p.title}</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 50 }}>
            <Link to="/projects" className="theme-btn btn-style-one">
              <span className="btn-title">View All Projects</span>
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
