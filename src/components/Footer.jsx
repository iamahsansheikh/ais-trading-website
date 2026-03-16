const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        {/* Logo */}
        <a href="#" className="footer-logo">
          <div className="footer-logo-mark">
            <svg viewBox="0 0 24 24">
              <line x1="12" y1="22" x2="12" y2="12"/>
              <polyline points="6,16 12,10 18,16"/>
              <polyline points="8,12 12,7 16,12"/>
              <polyline points="9.5,9 12,5 14.5,9"/>
            </svg>
          </div>
          <div className="footer-logo-text">
            <div className="ais">AIS Trading</div>
            <div className="sub">Lumber Exporters</div>
          </div>
        </a>

        {/* Copyright */}
        <div className="footer-center">
          © {new Date().getFullYear()} AIS Trading Inc · Toronto, Canada · All rights reserved
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/aistradinginc" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/company/ais-trading-inc" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="4"/>
              <line x1="8" y1="11" x2="8" y2="17"/>
              <line x1="8" y1="8" x2="8" y2="8.5" strokeWidth="2.5"/>
              <path d="M12 11v6M12 14a3 3 0 016 0v3"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
