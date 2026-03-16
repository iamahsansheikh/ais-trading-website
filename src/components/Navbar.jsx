import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['gallery', 'products', 'services', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        {/* LOGO */}
        <a href="#" className="logo-wrap">
          <div className="logo-mark">
            <svg className="logo-tree" viewBox="0 0 24 24">
              <line x1="12" y1="22" x2="12" y2="12"/>
              <polyline points="6,16 12,10 18,16"/>
              <polyline points="8,12 12,7 16,12"/>
              <polyline points="9.5,9 12,5 14.5,9"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-ais">AIS Trading</span>
            <span className="logo-sub">Lumber Exporters</span>
          </div>
        </a>

        {/* NAV LINKS */}
        <div className="nav-links" id="navLinks">
          <a 
            href="#gallery" 
            className={activeSection === 'gallery' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'gallery')}
          >
            Gallery
          </a>
          <a 
            href="#products" 
            className={activeSection === 'products' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'products')}
          >
            Products
          </a>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'services')}
          >
            Services
          </a>
          <a 
            href="#team" 
            className={activeSection === 'team' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'team')}
          >
            Team
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact
          </a>
        </div>

        {/* RIGHT: social + CTA */}
        <div className="nav-right">
          <div className="social-icons">
            <a href="https://www.instagram.com/aistradinginc" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/ais-trading-inc" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4"/>
                <line x1="8" y1="11" x2="8" y2="17"/>
                <line x1="8" y1="8" x2="8" y2="8.5" strokeWidth="2.5"/>
                <path d="M12 11v6M12 14a3 3 0 016 0v3"/>
              </svg>
            </a>
          </div>
          <a href="mailto:info@aistradinginc.com?subject=Quote%20Request&body=Hello%20AIS%20Trading%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20the%20following%3A%0A%0AProduct%2FGrade%2FDimension%3A%20%0AQuantity%3A%20%0APort%20of%20discharge%3A%20%0A%0AThank%20you." className="btn-quote">
            <svg viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Request a Quote
          </a>
          <button className="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
