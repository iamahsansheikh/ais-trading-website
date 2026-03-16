const Team = () => {
  const teamMembers = [
    {
      initials: 'AI',
      name: 'Ahsan Ijaz',
      role: 'Founder & Owner',
      email: 'ahsan.ijaz@aistradinginc.com',
      location: 'Toronto, Canada'
    },
    {
      initials: 'AJ',
      name: 'Amina Jatoi',
      role: 'Sales & Shipping International',
      email: 'info@aistradinginc.com',
      location: 'Toronto, Canada'
    },
    {
      initials: 'AS',
      name: 'Atif Sheikh',
      role: 'Sales Representative',
      email: 'libratc@gmail.com',
      location: 'Lahore, Pakistan'
    }
  ];

  return (
    <section className="section" id="team">
      <div className="section-inner">
        <div className="section-head">
          <span className="stag">TEAM</span>
          <h2 className="stitle">Who You'll Work With</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="avatar">{member.initials}</div>
              <div className="t-name">{member.name}</div>
              <div className="t-role">{member.role}</div>
              <a href={`mailto:${member.email}`} className="t-email">
                {member.email}
              </a>
              <div className="t-loc">{member.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
