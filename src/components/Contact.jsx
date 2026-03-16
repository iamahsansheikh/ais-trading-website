const Contact = () => {
  const offices = [
    {
      tag: 'MAIN OFFICE',
      name: 'AIS Trading Inc',
      details: [
        'Toronto, Ontario, Canada',
        'info@aistradinginc.com',
        'Response time: 24 hours'
      ],
      phone: {
        display: 'Contact Main Office',
        link: 'mailto:info@aistradinginc.com?subject=Inquiry%20from%20Website'
      }
    },
    {
      tag: 'PAKISTAN OFFICE',
      name: 'Sales Representative',
      details: [
        'Lahore, Pakistan',
        'libratc@gmail.com',
        'Local market expertise'
      ],
      phone: {
        display: 'Contact Pakistan Office',
        link: 'mailto:libratc@gmail.com?subject=Inquiry%20from%20Website'
      }
    }
  ];

  return (
    <section className="section alt" id="contact">
      <div className="section-inner">
        <div className="section-head">
          <span className="stag">CONTACT</span>
          <h2 className="stitle">Get in Touch</h2>
          <p className="ssub">
            Reach out directly to our offices. We respond within 24 hours.
          </p>
        </div>
        <div className="offices-grid">
          {offices.map((office, index) => (
            <div key={index} className="office">
              <div className="o-tag">{office.tag}</div>
              <div className="o-name">{office.name}</div>
              {office.details.map((detail, i) => (
                <div key={i} className="o-detail">{detail}</div>
              ))}
              <a href={office.phone.link} className="o-phone">
                {office.phone.display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
