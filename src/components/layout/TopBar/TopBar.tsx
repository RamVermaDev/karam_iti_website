import React from 'react';
import { Phone, ShieldCheck, Download, Bell } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './TopBar.module.css';

export const TopBar: React.FC = () => {
  return (
    <header className={styles.topbar}>
      <div className={styles.container}>
        {/* Left: Accreditation & MIS Code */}
        <div className={styles.left}>
          <span className={styles.misBadge}>
            <ShieldCheck size={14} className={styles.shieldIcon} />
            NCVT MIS CODE: <strong>{collegeConfig.misCode}</strong>
          </span>
          <span className={styles.divider}>|</span>
          <span className={styles.affiliation}>Govt. of India (DGT) Approved</span>
        </div>

        {/* Center: Live Ticker */}
        <div className={styles.center}>
          <div className={styles.tickerWrapper}>
            <span className={styles.tickerLabel}>
              <Bell size={12} className={styles.bellIcon} /> LATEST:
            </span>
            <div className={styles.tickerScroll}>
              <span className={styles.tickerText}>
                ⚡ Admissions Open 2026-27 for Electrician (80 Seats) & Fitter (120 Seats) | Campus Placement Drive Announced | Contact: {collegeConfig.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Helpline & Actions */}
        <div className={styles.right}>
          <a href={`tel:${collegeConfig.phone}`} className={styles.helplineLink}>
            <Phone size={13} className={styles.phoneIcon} />
            <span className={styles.helplineLabel}>Helpline:</span>
            <strong>{collegeConfig.phone}</strong>
          </a>
          <a href="#inquiry" className={styles.brochureBtn}>
            <Download size={13} />
            <span>Prospectus</span>
          </a>
        </div>
      </div>
    </header>
  );
};
