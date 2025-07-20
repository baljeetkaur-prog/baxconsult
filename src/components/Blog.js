import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './Blogdata';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Inner Banner */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Our Blogs</h4>
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home</Link></li>
              <li className="active">
                <i className="fas fa-angle-right mx-2"></i>Blog Posts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="w3l-blogpost-content py-5">
        <div className="container py-md-5 py-4">
          <div className="w3l-blog-block-5">
            <div className="row">
              {currentPosts.map((post, idx) => {
                const actualIndex = (currentPage - 1) * postsPerPage + idx;

                return (
                  <div className="col-lg-4 col-md-6 mt-4" key={actualIndex}>
                    <div className="blog-card-single">
                      <div className="grids5-info">
                        <Link to={`/blogdetail/${actualIndex}`}>
                          <img src={post.img} alt={post.title} className="img-fluid" />
                        </Link>
                        <div className="blog-info">
                          <h4>
                            <Link to={`/blogdetail/${actualIndex}`}>{post.title}</Link>
                          </h4>
                          <p>{post.excerpt}</p>
                          <div className="d-flex align-items-center justify-content-between mt-4">
                            <div className="d-flex align-items-center">
                              <img
                                src={post.authorImg}
                                alt={post.author}
                                className="img-fluid"
                                style={{ maxWidth: "40px" }}
                              />
                              <span className="small ms-2">{post.author}</span>
                            </div>
                            <p className="date-text mb-0">
                              <i className="far fa-calendar-alt me-1"></i>
                              {post.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="pagination-style text-center mt-5">
              <ul>
                <li>
                  <a
                    href="#none"
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "not-allowed" : ""}
                  >
                    <span className="fa fa-angle-double-left" aria-hidden="true"></span>
                  </a>
                </li>

                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <a
                      href="#page"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(index + 1);
                      }}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href="#none"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "not-allowed" : ""}
                  >
                    <span className="fa fa-angle-double-right" aria-hidden="true"></span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
