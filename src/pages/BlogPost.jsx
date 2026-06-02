import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../components/ui/PageBanner'
import posts from '../data/blog'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  const [comment, setComment] = useState({
    name: '', email: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  if (!post) return <NotFound />

  const currentIndex = posts.findIndex(p => p.slug === slug)
  const prev = posts[currentIndex - 1]
  const next = posts[currentIndex + 1]

  const handleComment = e => {
    e.preventDefault()
    setSubmitted(true)
    setComment({ name: '', email: '', message: '' })
  }

  const allTags = [...new Set(posts.flatMap(p => p.tags))]

  return (
    <>
      <Helmet>
        <title>{post.title} | BenaWeb Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://benaweb.co.ke/blog/${post.slug}`} />
      </Helmet>
      <PageBanner
        title="Blog Post"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.title },
        ]}
      />

      <section className="blog-details">
        <div className="container">
          <div className="row">

            {/* ── Main content ── */}
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">

                {/* Hero image + date badge */}
                <div className="blog-details__img">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="blog-details__date">
                    <span className="day">
                      {post.date.split(' ')[0]}
                    </span>
                    <span className="month">
                      {post.date.split(' ')[1]
                        .replace(',', '')}
                    </span>
                  </div>
                </div>

                <div className="blog-details__content">

                  {/* Meta */}
                  <ul className="list-unstyled
                    blog-details__meta">
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-user-circle" />
                        {' '}{post.author}
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <i className="fas fa-comments" />
                        {' '}{post.comments.length} Comments
                      </Link>
                    </li>
                  </ul>

                  {/* Title */}
                  <h3 className="blog-details__title">
                    {post.title}
                  </h3>

                  {/* Body paragraphs */}
                  {post.content.map((para, i) => (
                    <p
                      key={i}
                      className="blog-details__text-2"
                    >
                      {para}
                    </p>
                  ))}

                  {/* Tags + social */}
                  <div className="blog-details__bottom">
                    <p className="blog-details__tags">
                      <span>Tags</span>
                      {post.tags.map(tag => (
                        <Link
                          key={tag}
                          to="/blog"
                        >
                          {tag}
                        </Link>
                      ))}
                    </p>
                    <div className="blog-details__social-list">
                      <a
                        href="https://twitter.com/bensonn254"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>

                  {/* Prev / Next */}
                  <div className="nav-links">
                    {prev && (
                      <div className="prev">
                        <Link
                          to={`/blog/${prev.slug}`}
                          rel="prev"
                        >
                          {prev.title}
                        </Link>
                      </div>
                    )}
                    {next && (
                      <div className="next">
                        <Link
                          to={`/blog/${next.slug}`}
                          rel="next"
                        >
                          {next.title}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Comments */}
                  {post.comments.length > 0 && (
                    <div className="comment-one">
                      <h3 className="comment-one__title">
                        {post.comments.length} Comment
                        {post.comments.length > 1 ? 's' : ''}
                      </h3>
                      {post.comments.map((c, i) => (
                        <div
                          key={i}
                          className="comment-one__single"
                        >
                          <div className="comment-one__image">
                            <img
                              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(c.author)}&background=1a2744&color=b8952a&size=80&bold=true`}
                              alt={c.author}
                              loading="lazy"
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </div>
                          <div className="comment-one__content">
                            <h3>{c.author}</h3>
                            <p>{c.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Comment form */}
                  <div className="comment-form">
                    <h3 className="comment-form__title">
                      Leave a Comment
                    </h3>
                    {submitted ? (
                      <p style={{
                        color: '#2e7d32', fontWeight: 600,
                        padding: '14px 0',
                      }}>
                        ✓ Thanks for your comment!
                      </p>
                    ) : (
                      <form onSubmit={handleComment}>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Your Name"
                                required
                                value={comment.name}
                                onChange={e => setComment({
                                  ...comment,
                                  name: e.target.value,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="email"
                                placeholder="Your Email"
                                required
                                value={comment.email}
                                onChange={e => setComment({
                                  ...comment,
                                  email: e.target.value,
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Your Comment"
                            required
                            value={comment.message}
                            onChange={e => setComment({
                              ...comment,
                              message: e.target.value,
                            })}
                          />
                        </div>
                        <div className="mb-3">
                          <button
                            type="submit"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">
                              Submit Comment
                            </span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>

                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">

                {/* Search */}
                <div className="sidebar__single
                  sidebar__search">
                  <form
                    onSubmit={e => e.preventDefault()}
                    className="sidebar__search-form"
                  >
                    <input
                      type="search"
                      placeholder="Search here"
                    />
                    <button type="submit">
                      <i className="lnr-icon-search" />
                    </button>
                  </form>
                </div>

                {/* Latest posts */}
                <div className="sidebar__single
                  sidebar__post">
                  <h3 className="sidebar__title">
                    Latest Posts
                  </h3>
                  <ul className="sidebar__post-list
                    list-unstyled">
                    {posts.map(p => (
                      <li key={p.slug}>
                        <div className="sidebar__post-image">
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </div>
                        <div className="sidebar__post-content">
                          <h3>
                            <span className="sidebar__post-content-meta">
                              <i className="fas fa-user-circle" />
                              {' '}{p.author}
                            </span>
                            <Link to={`/blog/${p.slug}`}>
                              {p.title}
                            </Link>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="sidebar__single
                  sidebar__tags">
                  <h3 className="sidebar__title">Tags</h3>
                  <div className="sidebar__tags-list">
                    {allTags.map(tag => (
                      <Link key={tag} to="/blog">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
