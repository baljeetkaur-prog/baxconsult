import React from 'react';

const features = [
  {
    icon: 'fas fa-network-wired',
    title: 'Strategic Business Architecture',
    text: 'We design scalable systems to help founder-led enterprises transition into professionally managed organizations primed for growth.',
  },
  {
    icon: 'fas fa-coins',
    title: 'Financial Engineering & Capital Strategy',
    text: 'Our advanced finance strategies—from invoice to asset funding—unlock liquidity and align investment with measurable outcomes.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Risk-Aligned Insurance Advisory',
    text: 'Ensure optimal coverage with insurance frameworks tailored to your operational risks, sector standards, and compliance goals.',
  },
  {
    icon: 'fas fa-sync-alt',
    title: 'Digital & AI-Led Transformation',
    text: 'We integrate cutting-edge AI and process automation to boost efficiency and deliver ROI-focused digital transformation.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Operational Excellence Frameworks',
    text: 'Our methodologies embed ESG priorities, ISO/SIA standards, and lean systems into every layer of your business operations.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Integrated Growth Support',
    text: 'From strategic advice to implementation, we provide a full-spectrum support system aligned with your enterprise goals.',
  },
];

const Features = () => {
  return (
    <section className="w3l-grids-block py-5" id="features">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '600px' }}>
          <h5 className="small-title mb-2">Our Core Expertise</h5>
          <h3 className="title-style">Powering Ambitious Businesses with Strategy & Scale</h3>
        </div>

        <div className="row justify-content-center">
          {features.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-10 mt-4" key={index}>
              <div className="bottom-block h-100">
                <a href="#features" className="d-block">
                  <i className={item.icon}></i>
                  <h3 className="mt-3 mb-2">{item.title}</h3>
                  <p>{item.text}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
