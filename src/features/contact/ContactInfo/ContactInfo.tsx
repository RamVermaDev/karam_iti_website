import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './ContactInfo.module.css';

export const ContactInfo: React.FC = () => {
  const whatsappUrl = `https://wa.me/${collegeConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Karam Private ITI, I would like to visit the campus or get information regarding admissions.`
  )}`;

  return (
    <div className={styles.infoSection}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <p className={styles.lead}>
        We welcome prospective students and parents to visit our workshops, meet the trade instructors, and inspect our heavy machinery training setups.
      </p>

      <div className={styles.cardsList}>
        {/* Phone Call Card */}
        <div className={styles.contactCard}>
          <div className={styles.iconBox}>
            <Phone size={20} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Admission Helpline & Office</h3>
            <p className={styles.cardSub}>Direct line to the principal & admission desk</p>
            <a href={`tel:${collegeConfig.phone}`} className={styles.callLink}>
              {collegeConfig.phone}
            </a>
          </div>
        </div>

        {/* WhatsApp Chat Card */}
        <div className={styles.contactCard}>
          <div className={styles.iconBoxGreen}>
            <MessageSquare size={20} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>WhatsApp Instant Chat</h3>
            <p className={styles.cardSub}>Quick replies for prospectus and fee queries</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={styles.waLink}>
              Chat on WhatsApp ({collegeConfig.phone}) →
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className={styles.contactCard}>
          <div className={styles.iconBoxAmber}>
            <Mail size={20} />
          </div>
          <div className={styles.cardBody}>
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
            <MapPin size={20} />
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Campus Location</h3>
            <p className={styles.cardSub}>{collegeConfig.address.fullAddress}</p>
            <div className={styles.timing}>
              <Clock size={13} />
              <span>Mon – Sat: 8:30 AM – 5:00 PM</span>
            </div>
            <a
              href={collegeConfig.address.googleMapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.mapLink}
            >
              Open in Google Maps <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
