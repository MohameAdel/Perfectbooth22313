import React from 'react';

export default function WhyChooseUsSection() {
  const stats = [
    {
      id: 1,
      number: '20',
      label: 'Years of experience',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      id: 2,
      number: '680',
      label: 'Partners Of success',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"/>
          <path d="M8 15h.01M12 15h.01M16 15h.01"/>
          <polygon points="12 15 13 17 15 17 13.5 18 14 20 12 18.5 10 20 10.5 18 9 17 11 17 12 15" fill="none" />
        </svg>
      )
    },
    {
      id: 3,
      number: '7+',
      label: 'Award Wins',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
          <path d="M12 8l1-2h-2z"/>
        </svg>
      )
    },
    {
      id: 4,
      number: '155+',
      label: 'Team Members',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  return (
    <section className="why-choose-us-section" dir="ltr">
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <p className="why-choose-us-eyebrow">Trusted by Leading Organizations</p>
          <h2 className="why-choose-us-title">Why Choose Us</h2>
          <div className="why-choose-us-wavy">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C3.96 6 6.04 1 10 1C13.96 1 16.04 11 20 11C23.96 11 26.04 1 30 1C33.96 1 36.04 11 40 11C43.96 11 46.04 1 50 1C53.96 1 56.04 6 60 6" stroke="#C4972D" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="why-choose-us-timeline-wrapper">
          {/* Central dashed line */}
          <div className="timeline-dashed-line"></div>
          
          <div className="timeline-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="timeline-item">
                <div className="timeline-pin-wrapper">
                  <div className="timeline-pin">
                    {stat.icon}
                  </div>
                  {/* The small triangle pointing down to the line */}
                  <div className="timeline-pin-triangle"></div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-number">{stat.number}</h3>
                  <p className="timeline-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
