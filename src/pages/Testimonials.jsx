import PageBanner from '../components/ui/PageBanner'
import testimonials from '../data/testimonials'

export default function Testimonials() {
  return (
    <>
      <PageBanner
        title="What Clients Say"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Testimonials' },
        ]}
      />

      <section className="bg-silver-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row">
            {testimonials.map(t => (
              <div
                key={t.id}
                className="testimonial-column col-xl-6 col-lg-6 col-md-12"
                style={{ marginBottom: 30 }}
              >
                <div className="testimonial-block">
                  <div className="inner-box">
                    {/* image-box: image (absolute) + info-box + rating as siblings */}
                    <div className="image-box">
                      <figure className="image">
                        <img src={t.image} alt={t.name} loading="lazy" style={{ width: '100%', height: 'auto' }} />
                      </figure>
                      {/* info-box — name & designation LEFT */}
                      <div className="info-box">
                        <h4 className="name">{t.name}</h4>
                        <span className="designation">{t.designation}</span>
                      </div>
                      {/* rating — RIGHT (sibling of info-box, not child) */}
                      <div className="rating">
                        {Array(t.rating).fill(0).map((_, i) => (
                          <i key={i} className="fa fa-star" />
                        ))}
                      </div>
                    </div>
                    <div className="text">{t.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
