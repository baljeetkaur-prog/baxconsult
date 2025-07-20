import React, { useEffect, useState } from 'react';

const slidesData = [
  {
    subtitle: 'Launch with Confidence',
    title: 'From Idea to Execution – We’ve Got You!',
    link: '/about',
  },
  {
    subtitle: 'Smart Finance, Smarter Growth',
    title: 'Accelerate Business with Trusted Guidance',
    link: '/about',
  },
  {
    subtitle: 'Turn Vision Into Value',
    title: 'We Build. We Grow. You Lead.',
    link: '/about',
  },
  {
    subtitle: 'Future-Ready Consulting',
    title: 'Empowering Growth, Fueling Innovation',
    link: '/about',
  },
];

const Heroslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {slidesData.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'current' : ''}`}
            key={index}
          >
            <div className="bg-layer">
              <div className="content">
                <h6>{slide.subtitle}</h6>
                <h3 dangerouslySetInnerHTML={{ __html: slide.title.replace('<br>', '<br />') }} />
                <a href={slide.link} className="btn btn-style mt-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button id="prev" onClick={prevSlide}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button id="next" onClick={nextSlide}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Heroslider;
