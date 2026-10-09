import React from 'react';
import { Building2, Train, CheckCircle } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './RecruitersMarquee.module.css';

export const RecruitersMarquee: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Train size={14} />
            <span>CAMPUS PLACEMENT & APPRENTICESHIP NETWORK</span>
          </div>
          <h2 className={styles.title}>Where Karam ITI Trainees Get Hired</h2>
          <p className={styles.desc}>
            Our trainees regularly qualify for Indian Railways Apprenticeships, North Eastern Railway (NER) Workshops, UPPCL, and manufacturing units across the Gorakhpur Industrial Development Authority (GIDA) corridor.
          </p>
        </div>

        {/* Marquee Track */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {/* Duplicated for seamless infinite loop */}
            {[...collegeConfig.recruiters, ...collegeConfig.recruiters].map((company, index) => (
              <div key={index} className={styles.companyCard}>
                <Building2 size={18} className={styles.companyIcon} />
                <span className={styles.companyName}>{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <CheckCircle size={16} className={styles.checkIcon} />
            <span>Annual On-Campus Rojgar Mela (Job Fairs)</span>
          </div>
          <div className={styles.statItem}>
            <CheckCircle size={16} className={styles.checkIcon} />
            <span>NAPS (National Apprenticeship) Portal Onboarding</span>
          </div>
          <div className={styles.statItem}>
            <CheckCircle size={16} className={styles.checkIcon} />
            <span>Railway ALP & Technician Trade Guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
};
