import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, Award, ArrowRight } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Upper Main Footer Grid */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Institute Identity & Credentials */}
          <div className={styles.colIdentity}>
            <div className={styles.brandTitle}>{collegeConfig.name}</div>
            <p className={styles.tagline}>{collegeConfig.tagline}</p>
            <div className={styles.accreditationBox}>
              <div className={styles.accreditationItem}>
                <ShieldCheck size={16} className={styles.iconGold} />
                <span>NCVT MIS CODE: <strong>{collegeConfig.misCode}</strong></span>
              </div>
              <div className={styles.accreditationItem}>
                <Award size={16} className={styles.iconGold} />
                <span>Established: <strong>{collegeConfig.established}</strong></span>
              </div>
            </div>
            <p className={styles.desc}>
              Affiliated to the National Council for Vocational Training (NCVT), Directorate General of Training (DGT), Ministry of Skill Development & Entrepreneurship, Govt. of India.
            </p>
          </div>

          {/* Column 2: Approved Trades */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Approved Trades</h4>
            <ul className={styles.linkList}>
              {collegeConfig.trades.map((trade) => (
                <li key={trade.id}>
                  <Link to="/trades" className={styles.footerLink}>
                    <ArrowRight size={13} className={styles.linkArrow} />
                    <span>{trade.name} ({trade.seats} Seats)</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/infrastructure" className={styles.footerLink}>
                  <ArrowRight size={13} className={styles.linkArrow} />
                  <span>Heavy Machine Workshop</span>
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className={styles.footerLink}>
                  <ArrowRight size={13} className={styles.linkArrow} />
                  <span>Electrical Power Lab</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link to="/about" className={styles.footerLink}>About Institute</Link></li>
              <li><Link to="/admissions" className={styles.footerLink}>Admission Procedure</Link></li>
              <li><Link to="/admissions" className={styles.footerLink}>Fee Structure & Scholarships</Link></li>
              <li><Link to="/placements" className={styles.footerLink}>Placements & Apprenticeships</Link></li>
              <li><Link to="/infrastructure" className={styles.footerLink}>Workshops & Tooling</Link></li>
              <li><Link to="/gallery" className={styles.footerLink}>Campus Photo Gallery</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Campus Location & Map</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Gorakhpur Campus</h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.iconAccent} />
                <span>{collegeConfig.address.fullAddress}</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} className={styles.iconAccent} />
                <a href={`tel:${collegeConfig.phone}`} className={styles.contactLink}>
                  {collegeConfig.phone}
                </a>
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} className={styles.iconAccent} />
                <a href={`mailto:${collegeConfig.email}`} className={styles.contactLink}>
                  {collegeConfig.email}
                </a>
              </div>
            </div>
            <div className={styles.mapAction}>
              <a 
                href={collegeConfig.address.googleMapsSearchUrl} 
                target="_blank" 
                rel="noreferrer" 
                className={styles.mapBtn}
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {collegeConfig.name}, Gorakhpur. All rights reserved.
          </p>
          <div className={styles.legalInfo}>
            <span>DGT Institutional Code: {collegeConfig.misCode}</span>
            <span>•</span>
            <span>Management: {collegeConfig.managementName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
