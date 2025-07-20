import React, { useContext } from 'react';
import { Themecontext } from './Themecontext'; // adjust path as per your structure

const linkedinPosts = [
  {
    title: '12 Rules for Life – Mindmap',
    url: 'https://www.linkedin.com/pulse/12-rules-life-mindmap-gurbax-singh-gurbax-singh',
    date: 'Jan 14, 2023',
    author: 'Gurbax Singh',
    authorImg: '/images/gurbaxsmallimg.jpg',
    bg: 'linear-gradient(135deg, #fff7cc, #fff0a3)', // yellow
  },
  {
    title: 'Are You Compromising Resources & Cultural Stability?',
    url: 'https://www.linkedin.com/pulse/you-compromising-resources-cultural-stability-business-gurbax-singh-2f9te',
    date: 'Mar 19, 2025',
    author: 'Gurbax Singh',
    authorImg: '/images/gurbaxsmallimg.jpg',
    bg: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', // blue
  },
  {
    title: 'Agentic AI & FOMO in Business Decisions',
    url: 'https://www.linkedin.com/pulse/agentic-ai-fomo-business-decisions-gurbax-singh-53c1e',
    date: 'Mar 20, 2025',
    author: 'Gurbax Singh',
    authorImg: '/images/gurbaxsmallimg.jpg',
    bg: 'linear-gradient(135deg, #ffcdd2, #ef9a9a)', // red
  },
  {
    title: 'Anthropomorphism – Exciting or Dangerous?',
    url: 'https://www.linkedin.com/pulse/anthropomorphismexciting-gurbax-singh-28h1e',
    date: 'Mar 26, 2025',
    author: 'Gurbax Singh',
    authorImg: '/images/gurbaxsmallimg.jpg',
    bg: 'linear-gradient(135deg, #d1c4e9, #b39ddb)', // purple
  },
  {
    title: 'Adopting AI: Consider Open vs Care Frameworks',
    url: 'https://www.linkedin.com/pulse/adopting-ai-consider-open-vs-care-frameworks-gurbax-singh-9hmoe',
    date: 'Mar 24, 2025',
    author: 'Gurbax Singh',
    authorImg: '/images/gurbaxsmallimg.jpg',
    bg: 'linear-gradient(135deg, #c8e6c9, #a5d6a7)', // green
  },
  {
    title: 'Re-Imagining Brand Strategy: Rise of Super-Brands',
    url: 'https://www.linkedin.com/pulse/re-imagining-brand-strategy-why-future-belongs-super-brands-singh-tr2re',
    date: 'May 23, 2025',
    author: 'Gurbax Singh',
    authorImg: '/images/gurbaxsmallimg.jpg',
    bg: 'linear-gradient(135deg, #ffe0b2, #ffcc80)', // orange
  },
];

const Blogsection = () => {
  const { theme } = useContext(Themecontext);
  const isDark = theme === 'dark';

  return (
    <div
      className="w3l-blog-block-5 py-5"
      id="blog"
      style={{
        backgroundColor: isDark ? '#0e0e0e' : '#f5f7fa',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div className="container py-md-5 py-4">
        <div
          className="title-main text-center mx-auto mb-md-5 mb-4"
          style={{ maxWidth: '700px' }}
          data-aos="fade-up"
        >
          <h5
            className="small-title mb-2"
            style={{ color: isDark ? '#aaa' : '#555', fontWeight: 500, letterSpacing: '1px' }}
          >
            LinkedIn Insights
          </h5>
          <h2
            className="title-style"
            style={{
              fontWeight: 700,
              fontSize: '2.5rem',
              color: isDark ? '#fff' : '#222',
              lineHeight: 1.3,
            }}
          >
            Latest Thought Leadership
          </h2>
        </div>

        <div className="row justify-content-center">
          {linkedinPosts.map((post, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4 d-flex"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <div
                  className="rounded-4 shadow-sm d-flex flex-column justify-content-between h-100 p-4"
                  style={{
                    background: post.bg,
                    backdropFilter: 'blur(5px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                    color: isDark ? '#1a1a1a' : '#333',
                    transition: 'all 0.4s ease-in-out',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
                  }}
                >
                  <h5
                    style={{
                      fontWeight: 600,
                      marginBottom: '1.2rem',
                      textDecoration: 'underline',
                      textUnderlineOffset: '6px',
                      fontSize: '1.2rem',
                      lineHeight: '1.5',
                      color: isDark ? '#1a1a1a' : '#222',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <i className="fab fa-linkedin" style={{ fontSize: '1.3rem' }}></i>
                    {post.title}
                  </h5>

                  <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <div className="d-flex align-items-center">
                      <img
                        src={post.authorImg}
                        alt="Author"
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #fff',
                        }}
                      />
                      <span className="ms-3" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                        {post.author}
                      </span>
                    </div>
                    <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                      <i className="far fa-calendar-alt me-1"></i> {post.date}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Blogsection;
