const Products = () => {
  const products = [
    {
      name: 'S4S Southern Yellow Pine (KDHT)',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      specs: [
        '8/4 lumber: 2×4 through 2×12',
        'Grades: #1, #2, #3, and #4'
      ],
      badge: 'Kiln Dried · Heat Treated'
    },
    {
      name: 'Rough Southern Yellow Pine',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      specs: [
        '8/4 Prime & Better, Merch Grade',
        '4/4 SAP, Prime & Better, Prime Grade'
      ],
      badge: 'Rough Sawn'
    },
    {
      name: 'Eastern White Pine & Logs',
      icon: (
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="22" x2="12" y2="12"/>
          <polyline points="6,16 12,10 18,16"/>
          <polyline points="8,12 12,7 16,12"/>
          <polyline points="9.5,9 12,5 14.5,9"/>
        </svg>
      ),
      specs: [
        '4/4 (19 MM) S4S KDHT',
        '6/4 & 4/4 Rough KDHT',
        'Logs: Prime Grade'
      ],
      badge: 'KDHT Lumber'
    },
    {
      name: 'White Ash & Red Oak',
      icon: (
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="22" x2="12" y2="12"/>
          <polyline points="6,16 12,10 18,16"/>
          <polyline points="8,12 12,7 16,12"/>
          <polyline points="9.5,9 12,5 14.5,9"/>
        </svg>
      ),
      specs: [
        '',
        '4/4, 6/4, 7/4, 8/4'
      ],
      badge: 'FAS/F1F, #1C Grade'
    }
  ];

  return (
    <section className="section" id="products">
      <div className="section-inner">
        <div className="section-head">
          <span className="stag">PRODUCTS</span>
          <h2 className="stitle">What We Supply</h2>
          <p className="ssub">
            All lumber is kiln-dried, bundle-tallied, and containerized for export, offered in a full range of grades and dimensions          </p>
        </div>
        <div className="prod-grid">
          {products.map((product, index) => (
            <div key={index} className="prod-card">
              <div className="prod-icon">{product.icon}</div>
              <div className="prod-name">{product.name}</div>
              {product.specs.map((spec, i) => (
                <div key={i} className="prod-spec">{spec}</div>
              ))}
              <div className="prod-grade">{product.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
