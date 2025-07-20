import React from 'react';
import blogPosts from './Blogdata';
import { useParams, useLocation, Link } from 'react-router-dom';

const Blogdetail = () => {
  const { id } = useParams();
  const post = blogPosts[id];
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  if (!post) return <p className="text-center mt-5">Blog post not found.</p>;

  return (
    <>
      {/* Inner Banner */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4 text-center">
              {post.title}
            </h4>
            <ul className="breadcrumbs-custom-path justify-content-center d-flex">
              <li><Link to="/">Home</Link></li>
              <li className="active">
                <i className="fas fa-angle-right mx-2"></i>Blog Detail
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="w3l-blogpost-content py-5">
        <div className="container py-md-5 py-4">
          <div className="row">
            <div className="text-11 col-lg-8 mx-auto">
              <div className="text11-content">
                <div className="text-center mb-4">
                  <img
                    src={post.img}
                    className="img-fluid radius-image"
                    alt={post.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                {/* Centered Title */}
                <h4 className="mt-4 text-center">{post.title}</h4>

                {/* Left-aligned Author/Date */}
               <p className="text-muted mt-2 text-center">
  <strong>By:</strong> {post.author} | <strong>Date:</strong> {post.date}
</p>

                {/* Blog Body */}
                <div className="mt-4 blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Quote */}
                <h5 className="quote mt-5">
                  “Together we can Envision your Business”
                  <footer className="blockquote-footer mt-3">Gurbax Singh</footer>
                </h5>

                {/* Back to Blogs Button */}
                <div className="mt-5 text-start">
                  <Link to="/blog" className="btn btn-style btn-primary">
                    ← Back to All Blogs
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogdetail;
