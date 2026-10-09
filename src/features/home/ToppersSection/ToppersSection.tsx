import React from 'react';
import { Trophy, Star, CheckCircle } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './ToppersSection.module.css';

export const ToppersSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Trophy size={14} />
            <span>EXCELLENCE & OUTCOMES</span>
          </div>
          <h2 className={styles.title}>Hall of Fame: Our AITT Toppers</h2>
          <p className={styles.desc}>
            Meet outstanding graduates from Karam Private ITC who achieved top ranks in the All-India Trade Test (AITT) and secured careers in government and premier industries.
          </p>
        </div>

        <div className={styles.grid}>
          {collegeConfig.toppers.map((topper) => (
            <div key={topper.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatarBox}>
                  <Trophy size={28} className={styles.trophyIcon} />
                </div>
                <div className={styles.scoreBadge}>
                  <Star size={13} className={styles.starIcon} />
                  <span>{topper.percentage}</span>
                </div>
              </div>

              <div className={styles.body}>
                <h3 className={styles.name}>{topper.name}</h3>
                <div className={styles.trade}>
                  {topper.trade} • {topper.session}
                </div>
                <div className={styles.roleBox}>
                  <CheckCircle size={15} className={styles.checkIcon} />
                  <span>{topper.companyOrRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
