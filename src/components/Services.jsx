const Services = () => {
  const services = [
    {
      number: '01',
      title: 'International Export',
      description: 'Yellow Pine, White Pine, hardwoods, and logs shipped globally. We select stock to match your exact specifications.'
    },
    {
      number: '02',
      title: 'Document Preparation',
      description: 'Full preparation of shipping documents, certificates, and customs paperwork included with every order.'
    },
    {
      number: '03',
      title: 'CIF/CFR Port Rates',
      description: 'Competitive CIF and CFR rates to any port worldwide. We work with your budget and timeline.'
    },
    {
      number: '04',
      title: 'Custom Packaging',
      description: 'Paper wrapping and specialized packaging available on request. Suitable for demanding manufacturing buyers.'
    }
  ];

  return (
    <section className="section alt" id="services">
      <div className="section-inner">
        <div className="section-head">
          <span className="stag">SERVICES</span>
          <h2 className="stitle">Export Services</h2>
          <p className="ssub">
            We handle everything from sourcing to delivery at your port of choice.
          </p>
        </div>
        <div className="svc-grid">
          {services.map((service, index) => (
            <div key={index} className="svc-card">
              <div className="svc-num">{service.number}</div>
              <div className="svc-title">{service.title}</div>
              <div className="svc-desc">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
