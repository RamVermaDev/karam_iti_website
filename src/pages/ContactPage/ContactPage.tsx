import React from 'react';
import { Container } from '../../components/ui/Container';
import { ContactInfo } from '../../features/contact/ContactInfo';
import { AdmissionInquiryForm } from '../../features/admissions/AdmissionInquiryForm';
import styles from './ContactPage.module.css';

export const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      {/* 1. Header Banner */}
      <section className={styles.pageHero}>
        <Container size="lg">
          <div className={styles.badge}>CAMPUS COMMUNICATION & VISITS</div>
          <h1 className={styles.heroTitle}>Contact Karam Private ITI, Gorakhpur</h1>
          <p className={styles.heroSubtitle}>
            Have questions about trade eligibility, seat availability, or campus tours? Reach out to our admissions and administrative office.
          </p>
        </Container>
      </section>

      {/* 2. Main Content Grid */}
      <section className={styles.contentSection}>
        <Container size="lg">
          <div className={styles.grid}>
            {/* Left: Contact Info */}
            <div className={styles.infoCol}>
              <ContactInfo />
            </div>

            {/* Right: Embedded Inquiry Form */}
            <div className={styles.formCol}>
              <AdmissionInquiryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Interactive Campus Map */}
      <section className={styles.mapSection}>
        <Container size="lg">
          <div className={styles.mapFrameWrapper}>
            <iframe
              title="Karam Private ITI Campus Location"
              src="https://maps.google.com/maps?q=26.7985,83.4150+(Karam+Private+ITI)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="440"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            />
          </div>
        </Container>
      </section>
    </div>
  );
};
