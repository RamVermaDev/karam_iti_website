import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { AdmissionInquiryForm } from '../../features/admissions/AdmissionInquiryForm';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './ContactPage.module.css';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${collegeConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Karam Private ITI, I would like to visit the campus or get information regarding admissions.`
  )}`;

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.badge}>CAMPUS COMMUNICATION & VISITS</div>
          <h1 className={styles.heroTitle}>Contact Karam Private ITI, Gorakhpur</h1>
          <p className={styles.heroSubtitle}>
            Have questions about trade eligibility, seat availability, or campus tours? Reach out to our admissions and administrative office.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left: Contact Info & Map Details */}
            <div className={styles.infoCol}>
              <h2 className={styles.sectionHeading}>Get in Touch</h2>
              <p className={styles.leadText}>
                We welcome prospective students and parents to visit our workshops, meet the trade instructors, and inspect our heavy machinery training setups.
              </p>

              <div className={styles.cardsList}>
                {/* Phone Call Card */}
                <div className={styles.contactCard}>
                  <div className={styles.iconBox}>
                    <Phone size={22} className={styles.icon} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>Admission Helpline & Office Phone</h3>
                    <p className={styles.cardSub}>Direct line to the principal & admission desk</p>
                    <a href={`tel:${collegeConfig.phone}`} className={styles.callLink}>
                      {collegeConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat Card */}
                <div className={styles.contactCard}>
                  <div className={styles.iconBoxGreen}>
                    <MessageSquare size={22} className={styles.iconGreen} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>WhatsApp Instant Chat</h3>
                    <p className={styles.cardSub}>Quick replies for prospectus and fee queries</p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.waLink}>
                      Chat on WhatsApp (+91 76076 09955) →
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className={styles.contactCard}>
                  <div className={styles.iconBoxAmber}>
                    <Mail size={22} className={styles.iconAmber} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>Official Email</h3>
                    <p className={styles.cardSub}>For institutional, verification, and government queries</p>
                    <a href={`mailto:${collegeConfig.email}`} className={styles.mailLink}>
                      {collegeConfig.email}
                    </a>
                  </div>
                </div>

                {/* Physical Location Card */}
                <div className={styles.contactCard}>
                  <div className={styles.iconBoxRed}>
                    <MapPin size={22} className={styles.iconRed} />
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>Campus Location</h3>
                    <p className={styles.cardSub}>{collegeConfig.address.fullAddress}</p>
                    <div className={styles.timing}>
                      <Clock size={14} /> Visiting Hours: Monday – Saturday (8:30 AM – 5:00 PM)
                    </div>
                    <a
                      href={collegeConfig.address.googleMapsSearchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.mapLink}
                    >
                      Open in Google Maps <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Embedded Inquiry Form */}
            <div className={styles.formCol}>
              <AdmissionInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Campus Map */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapFrameWrapper}>
            <iframe
              title="Karam Private ITI Campus Location"
              src="https://maps.google.com/maps?q=26.7985,83.4150+(Karam+Private+ITI)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
