import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import services from '../data/services'
import projects from '../data/projects'
import pricing from '../data/pricing'
import testimonials from '../data/testimonials'
import posts from '../data/blog'

export default function Home() {
  return (
    <>

      {/* 1. HERO SLIDER */}
      <section className="main-slider">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 8000 }}
          pagination={{ clickable: true }}
          loop
          className="rev_slider"
        >
          <SwiperSlide>
            <div
              className="slide-item"
              style={{
                backgroundImage: 'url(/images/main-slider/1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(15,25,41,0.65)',
              }} />
              <div className="auto-container" style={{
                position: 'relative', zIndex: 1,
                height: '100%', display: 'flex',
                alignItems: 'center',
              }}>
                <div style={{ maxWidth: 800, paddingTop: '130px' }}>
                  <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    style={{
                      color: '#fff',
                      fontSize: 'clamp(32px, 5vw, 68px)',
                      fontWeight: 800, lineHeight: 1.1,
                      textShadow: '0 2px 15px rgba(0,0,0,0.5)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Take Your Website <br />
                    To The Next Level
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{
                      marginTop: 10,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <div className="hero-accent-line" />
                    <span className="hero-subheading">
                      Elevate Your Online Presence
                    </span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8,
                      ease: 'easeOut' }}
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: 'clamp(15px, 2vw, 19px)',
                      lineHeight: 1.65,
                      marginTop: 20,
                      maxWidth: 600,
                    }}
                  >
                    With our expert web design and React development services,
                    we help Kenyan brands stand out. Get your project
                    handled by the best designers in Nairobi.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.0,
                      ease: 'easeOut' }}
                    style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16 }}
                  >
                    <Link
                      to="/about"
                      className="theme-btn btn-style-one bg-theme-color2 hero-cta-btn"
                    >
                      <span className="btn-title">
                        About Us
                      </span>
                    </Link>
                    <Link
                      to="/contact"
                      className="hero-cta-btn-outline"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slide-item"
              style={{
                backgroundImage: 'url(/images/main-slider/2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(15,25,41,0.65)',
              }} />
              <div className="auto-container" style={{
                position: 'relative', zIndex: 1,
                height: '100%', display: 'flex',
                alignItems: 'center',
              }}>
                <div style={{ maxWidth: 850, paddingTop: '130px' }}>
                  <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    style={{
                      color: '#fff',
                      fontSize: 'clamp(32px, 5vw, 68px)',
                      fontWeight: 800, lineHeight: 1.1,
                      textShadow: '0 2px 15px rgba(0,0,0,0.5)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    The Best Web Design &amp; <br />
                    Development Agency in Kenya
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{
                      marginTop: 10,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <div className="hero-accent-line" />
                    <span className="hero-subheading">
                      Built to Scale. Designed to Convert.
                    </span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8,
                      ease: 'easeOut' }}
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: 'clamp(15px, 2vw, 19px)',
                      lineHeight: 1.65,
                      marginTop: 20,
                      maxWidth: 600,
                    }}
                  >
                    From high-performance landing pages to complex React web apps,
                    we deliver clean code and stunning interfaces that work
                    seamlessly on any network.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.0,
                      ease: 'easeOut' }}
                    style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16 }}
                  >
                    <Link
                      to="/contact"
                      className="theme-btn btn-style-one bg-theme-color2 hero-cta-btn"
                    >
                      <span className="btn-title">
                        Get a Free Quote
                      </span>
                    </Link>
                    <Link
                      to="/services"
                      className="hero-cta-btn-outline"
                    >
                      Our Services
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="services-section-three">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">What We Offer</span>
            <h2>Six ways we help <br />Kenyan businesses grow online.</h2>
          </div>
          <div className="row">
            {services.map(s => (
              <div key={s.slug} className="service-block-three col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="content">
                    <div className="icon-box"><i className={`icon ${s.icon}`} /></div>
                    <h5 className="title">
                      <Link to={`/services/${s.slug}`}>{s.title}</Link>
                    </h5>
                    <div className="text">{s.short}</div>
                  </div>
                  <Link to={`/services/${s.slug}`} className="read-more">
                    <i className="fa fa-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="about-section-four pt-0">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Who We Are</span>
                  <h2>Your Trusted Web Design and Development Agency in Kenya</h2>
                  <div className="text">
                    We are BenaWeb — a Nairobi-based web design studio specializing in
                    React, Firebase, and Tailwind CSS. We build custom web solutions
                    for Kenyan businesses that are fast, mobile-first, and built to
                    thrive and increase their online presence.
                  </div>
                </div>
                <h5 className="title">
                  4+ live production projects across e-commerce, legal, automotive
                  and job platforms — delivered with full ownership.
                </h5>
                <a href="tel:+254743052401" className="info-btn">
                  <i className="icon fa fa-phone" />
                  <small>Call or WhatsApp</small>+254 743 052 401
                </a>
                <Link to="/about" className="theme-btn btn-style-one">
                  <span className="btn-title">Explore now</span>
                </Link>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-box">
                  <span className="bg-shape" />
                  <figure className="image-1 overlay-anim">
                    <img src="/images/resource/about-6.jpg" alt="About BenaWeb" loading="lazy" style={{ width: '100%', height: 'auto' }} />
                  </figure>
                  <figure className="image-2 overlay-anim">
                    <img src="/images/resource/about-7.jpg" alt="BenaWeb Team" loading="lazy" style={{ width: '100%', height: 'auto' }} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="why-choose-us-two pt-0">
        <div className="auto-container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-6">
                <span className="sub-title">Company Benefits</span>
                <h2>See why you should<br /> choose BenaWeb</h2>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                <div className="text">
                  Every project we deliver gets full personal attention —
                  no outsourcing, no junior handoffs. You get direct
                  communication, clean code, and a site that performs
                  on Kenyan mobile networks.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                {[
                  { icon: 'flaticon-user-interface', title: 'Built for Real Users', text: 'Clean, intuitive layouts that guide visitors to take action — designed for real Kenyan users on mobile.' },
                  { icon: 'flaticon-front-end', title: 'Modern Tech Stack', text: 'React, Firebase, and Tailwind — a modern stack that means fast load times, easy updates, and zero server headaches.' },
                  { icon: 'flaticon-design', title: 'Personally Delivered', text: 'You work directly with our founder, not an account manager. Direct communication, faster turnaround.' },
                ].map(f => (
                  <div key={f.title} className="feature-block-six">
                    <div className="inner-box">
                      <span className="icon"><i className={f.icon} /></span>
                      <h5 className="title">{f.title}</h5>
                      <div className="text">{f.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-5 col-md-12">
              <div className="inner-column">
                <div className="image-box" style={{ position: 'relative' }}>
                  <img src="/images/resource/why-us-1.jpg" alt="Why BenaWeb" loading="lazy" style={{ width: '100%', height: 'auto' }} />
                  <div className="signature-stamp">
                    <img 
                      src="/images/resource/my_sign-removebg-preview.png" 
                      alt="Benard Signature" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section className="pricing-section">
        <div className="bg" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Transparent Pricing</span>
            <h2>Project pricing that fits <br />your budget and goals</h2>
          </div>
          <div className="row">
            {pricing.map(plan => (
              <div key={plan.id} className={`pricing-block${plan.featured ? ' tagged' : ''} col-lg-4 col-md-6 col-sm-12`}>
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
                      <li key={f.text} className={f.included ? '' : 'false'}>
                        {f.text}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="theme-btn btn-style-one">
                    <span className="btn-title">{plan.cta}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ padding: '40px 0 10px' }}>
            <p style={{ fontSize: 15, color: '#666' }}>
              Need ongoing support? Ask about our{' '}
              <strong>monthly retainer packages</strong> starting from{' '}
              <strong>KES 8,000/month</strong>.
            </p>
            <Link to="/contact" className="theme-btn btn-style-one" style={{ marginTop: 16, display: 'inline-block' }}>
              <span className="btn-title">Ask About Retainers</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="testimonial-section-three">
        <div className="container-fluid p-0">
          <div className="outer-box">
            <div className="carousel-outer">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
              >
                {testimonials.map(t => (
                  <SwiperSlide key={t.id}>
                    <div className="testimonial-block-three">
                      <div className="inner-box">
                        <div className="thumb">
                          <img src={t.image} alt={t.name} loading="lazy" style={{ width: '100%', height: 'auto' }} />
                          <span className="icon fa fa-quote-right" />
                        </div>
                        <div className="text">{t.text}</div>
                        <h6 className="name">
                          {t.name}
                          <span className="designation"> &nbsp;— &nbsp;{t.designation}</span>
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROJECTS CAROUSEL */}
      <section className="projects-section style-two pull-up">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">Recent Work</span>
            <h2>Work showcase</h2>
          </div>
          <div className="carousel-outer">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3500 }}
              navigation
              loop
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {projects.map(p => (
                <SwiperSlide key={p.slug}>
                  <div className="project-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <Link to={`/projects/${p.slug}`}>
                            <img src={p.image} alt={p.title} loading="lazy" style={{ width: '100%', height: 'auto' }} />
                          </Link>
                        </figure>
                        <div className="info-box">
                          <Link to={`/projects/${p.slug}`} className="read-more">
                            <i className="fa fa-long-arrow-alt-right" />
                          </Link>
                          <span className="cat">{p.cat}</span>
                          <h6 className="title">
                            <Link to={`/projects/${p.slug}`}>{p.title}</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 8. BLOG SECTION (dark background) */}
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center light">
            <span className="sub-title">News &amp; Articles</span>
            <h2>Latest from the blog</h2>
          </div>
          <div className="row">
            {posts.map(post => (
              <div key={post.slug} className="news-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to={`/blog/${post.slug}`}>
                        <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: 'auto' }} />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <span className="date">{post.date}</span>
                    <span className="post-info">
                      <i className="fa fa-user-circle" /> by {post.author}
                    </span>
                    <h5 className="title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <div className="text">{post.excerpt}</div>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      <i className="fa fa-long-arrow-alt-right" /> Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA STRIP */}
      <section className="contact-info-section pt-0">
        <div className="auto-container">
          <div className="row">
            <div className="contact-info-block-two col-lg-6 col-md-12">
              <div className="inner-box">
                <div className="bg" />
                <h3 className="title">Ready to build <br />your website?</h3>
                <Link to="/contact" className="theme-btn btn-style-one light">
                  <span className="btn-title">Book a Free Call</span>
                </Link>
              </div>
            </div>
            <div className="contact-info-block-three col-lg-6 col-md-12">
              <div className="inner-box">
                <div
                  className="bg"
                  style={{ backgroundImage: 'url(/images/resource/info-bg.jpg)' }}
                />
                <h3 className="title">Got a quick question? <br />Call or WhatsApp</h3>
                <h3 className="num">
                  <a href="tel:+254743052401" style={{ color: '#fff' }}>+254 743 052 401</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
