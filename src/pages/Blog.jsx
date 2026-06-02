import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'
import posts from '../data/blog'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog & Web Tips | BenaWeb — Nairobi</title>
        <meta name="description" content="Practical web design, SEO, and digital tips for Kenyan businesses from the BenaWeb team." />
        <link rel="canonical" href="https://benaweb.co.ke/blog" />
      </Helmet>
      <PageBanner
        title="Blog & Insights"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog' },
        ]}
      />

      <section className="bg-silver-light"
        style={{ padding: '40px 0' }}>
        <div className="container pb-90">

          <div className="sec-title text-center"
            style={{ marginBottom: 50 }}>
            <span className="sub-title">
              Tips &amp; Insights
            </span>
            <h2>Digital Growth Strategies for
              <br />Modern Brands</h2>
          </div>

          <div className="row">
            {posts.map(post => (
              <div
                key={post.slug}
                className="news-block col-xl-4
                  col-lg-6 col-md-6"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link to={`/blog/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <span className="date">
                      {post.date}
                    </span>
                    <span className="post-info">
                      <i className="fa fa-user-circle" />
                      {' '}by {post.author}
                    </span>
                    <h5 className="title">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h5>
                    <div className="text">
                      {post.excerpt}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="read-more"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                      {' '}Read More
                    </Link>
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
