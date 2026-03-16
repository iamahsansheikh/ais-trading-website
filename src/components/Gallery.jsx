const Gallery = () => {
  const galleryItems = [
    {
      title: 'AIS Trading Branded Lumber',
      image: '/gallery/ais-branded-lumber.jpg'
    },
    {
      title: 'Bundled Lumber Stock',
      image: '/gallery/bundled-lumber-warehouse.jpg'
    },
    {
      title: 'Log Harvesting',
      image: '/gallery/logs-forest-harvest.jpg'
    },
    {
      title: 'Container Loading',
      image: '/gallery/logs-truck-loading.jpg'
    },
    {
      title: 'Warehouse Stock',
      image: '/gallery/lumber-bundles-stacked.jpg'
    },
    {
      title: 'Log Yard',
      image: '/gallery/log-pile-outdoor.jpg'
    }
  ];

  return (
    <section className="section alt" id="gallery">
      <div className="section-inner">
        <div className="section-head">
          <span className="stag">GALLERY</span>
          <h2 className="stitle">Our Lumber &amp; Logs</h2>
          <p className="ssub">
            Real stock from our supply chain — straight from the source to your port.
          </p>
        </div>
        <div className="gal-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gal-img">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gal-cap">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
