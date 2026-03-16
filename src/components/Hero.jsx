const Hero = () => {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-dot"></span>
          Est. 2018 &middot; Toronto, Canada
        </div>
        <h1>
          Global exporters of <em>premium</em><br />
          North American lumber
        </h1>
        <p className="hero-sub">
            Global exporter of SYP, Eastern White Pine, hardwood lumber, and White Pine & Yellow Pine logs (Prime Grade) — kiln-dried, tallied, and delivered to ports worldwide.
        </p>
        <div className="hero-btns">
          <a 
            href="mailto:info@aistradinginc.com?subject=Quote%20Request&body=Hello%20AIS%20Trading%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20the%20following%3A%0A%0AProduct%2FGrade%2FDimension%3A%20%0AQuantity%3A%20%0APort%20of%20discharge%3A%20%0A%0AThank%20you." 
            className="btn-primary"
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Request a Quote
          </a>
          <button onClick={scrollToProducts} className="btn-secondary">
            View Products
          </button>
        </div>
        <div className="trust-bar">
          <div className="trust-item">
            <span className="trust-num">6+</span>
            <span className="trust-lbl">Years exporting</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">4</span>
            <span className="trust-lbl">Product categories</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">24h</span>
            <span className="trust-lbl">Response time</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">CIF/CFR</span>
            <span className="trust-lbl">Any port worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
