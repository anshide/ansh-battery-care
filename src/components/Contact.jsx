import React from 'react';

const Contact = () => {
  const contactItems = [
    {
      icon: '📍',
      title: 'Visit Us',
      text: 'Ansh Battery Care, Sangaria, Distt. Hanumangarh, Rajasthan – 335063',
    },
    {
      icon: '📞',
      title: 'Call Us',
      text: '+91 96672 22000',
      href: 'tel:+919667222000',
    },
    {
      icon: '✉️',
      title: 'Email Us',
      text: 'anshbatterycare@gmail.com',
      href: 'mailto:anshbatterycare@gmail.com',
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      text: 'Mon – Sat: 9:00 AM – 8:00 PM',
    },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or need help choosing the right battery? We're here to help.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info cards */}
          <div className="contact-info-cards">
            {contactItems.map((item, index) => (
              <div className="contact-card" key={index}>
                <div className="contact-card-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  {item.href ? (
                    <p><a href={item.href}>{item.text}</a></p>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.6565158655!2d74.4573145!3d29.9880155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39169622d0000001%3A0x6b6c0e86973900!2sSangaria%2C%20Rajasthan%20335063!5e0!3m2!1sen!2sin!4v1714656000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ansh Battery Care Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
