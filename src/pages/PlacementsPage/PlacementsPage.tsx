import React from 'react';
import { Building2, Train, Award, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { RecruitersMarquee } from '../../features/home/RecruitersMarquee';
import { ToppersSection } from '../../features/home/ToppersSection';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './PlacementsPage.module.css';

export const PlacementsPage: React.FC = () => {
  return (
    <div className={styles.placementsPage}>
      {/* Header */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.badge}>TRAINING & PLACEMENT CELL</div>
          <h1 className={styles.heroTitle}>Placements, Apprenticeships & Industry Tie-ups</h1>
          <p className={styles.heroSubtitle}>
            Bridging technical education with sustainable careers across Indian Railways, public sector undertakings, and leading private manufacturers in Gorakhpur and pan-India.
          </p>
        </div>
      </section>

      {/* Main Stats & Placement Philosophy */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIconBox}>
                <TrendingUp size={24} className={styles.statIcon} />
              </div>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statLabel}>Placement & Apprentice Guidance</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconBox}>
                <Train size={24} className={styles.statIconAmber} />
              </div>
              <div className={styles.statNum}>NER Gorakhpur</div>
              <div className={styles.statLabel}>Railway Workshop Feeder Institute</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconBox}>
                <Building2 size={24} className={styles.statIconGreen} />
              </div>
              <div className={styles.statNum}>GIDA Corridor</div>
              <div className={styles.statLabel}>Manufacturing Industry Tie-Ups</div>
            </div>
          </div>

          {/* Placement Cell Workflow */}
          <div className={styles.modelSection}>
            <h2 className={styles.sectionTitle}>The 3-Tier Career Support System</h2>
            <div className={styles.modelGrid}>
              <div className={styles.modelCard}>
                <div className={styles.modelHeader}>
                  <span className={styles.modelNum}>01</span>
                  <h3>NAPS Apprenticeship Portal</h3>
                </div>
                <p>
                  Every final-year trainee is onboarded onto the official <strong>National Apprenticeship Promotion Scheme (NAPS)</strong> portal, ensuring eligibility for government stipends (₹8,000 – ₹14,000/month) across CPWD, Railways, and PSUs.
                </p>
              </div>

              <div className={styles.modelCard}>
                <div className={styles.modelHeader}>
                  <span className={styles.modelNum}>02</span>
                  <h3>Competitive Exam Preparation</h3>
                </div>
                <p>
                  Special coaching for <strong>Railway Assistant Loco Pilot (ALP)</strong>, Railway Technician Grade-3, and UPPCL Technical Exams with previous year AITT and trade question banks.
                </p>
              </div>

              <div className={styles.modelCard}>
                <div className={styles.modelHeader}>
                  <span className={styles.modelNum}>03</span>
                  <h3>On-Campus Rojgar Mela</h3>
                </div>
                <p>
                  Regular job fairs hosting automotive, electrical, and fabrication recruiters directly on our Gorakhpur campus for immediate spot selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Marquee */}
      <RecruitersMarquee />

      {/* Hall of Fame */}
      <ToppersSection />
    </div>
  );
};
