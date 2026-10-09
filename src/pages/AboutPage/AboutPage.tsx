import React from 'react';
import { ShieldCheck, Award, Users, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './AboutPage.module.css';

export const AboutPage: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Page Header */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.badge}>INSTITUTIONAL PROFILE</div>
          <h1 className={styles.heroTitle}>About Karam Private ITI, Gorakhpur</h1>
          <p className={styles.heroSubtitle}>
            Dedicated to empowering youth with certified, industry-standard technical training since <strong>{collegeConfig.established}</strong>.
          </p>
        </div>
      </section>

      {/* Main Narrative & Governance */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Column: Institute Background */}
            <div className={styles.storyCol}>
              <h2 className={styles.sectionHeading}>Our Legacy & Foundation</h2>
              <p className={styles.leadText}>
                Founded on <strong>25 September 2012</strong> in <strong>Chatradhari (Lalganj), Gorakhpur</strong>, 
                <strong> {collegeConfig.name}</strong> was established under the leadership of <strong>{collegeConfig.managementName}</strong> with a singular mission: to provide high-quality vocational education and technical craftsmanship to the aspiring youth of Eastern Uttar Pradesh.
              </p>
              <p className={styles.bodyText}>
                Recognized officially by the <strong>Directorate General of Training (DGT)</strong> and affiliated with the <strong>National Council for Vocational Training (NCVT)</strong> under institutional code <strong>{collegeConfig.misCode}</strong>, Karam Private ITI has grown into one of Gorakhpur's prime technical training hubs with over 220 approved seats across core engineering trades.
              </p>

              <div className={styles.statsBox}>
                <div className={styles.stat}>
                  <div className={styles.statNum}>{collegeConfig.metrics.yearsOfExcellence}</div>
                  <div className={styles.statLbl}>Years of Educational Service</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>{collegeConfig.trades.reduce((acc, t) => acc + t.seats, 0)}</div>
                  <div className={styles.statLbl}>Approved NCVT Seats</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>70 : 30</div>
                  <div className={styles.statLbl}>Practical to Theory Ratio</div>
                </div>
              </div>
            </div>

            {/* Right Column: Accreditation Card */}
            <div className={styles.cardCol}>
              <div className={styles.accreditationCard}>
                <div className={styles.cardHeader}>
                  <ShieldCheck size={28} className={styles.shieldIcon} />
                  <div>
                    <h3 className={styles.cardTitle}>Official NCVT Verification</h3>
                    <span className={styles.cardCode}>DGT MIS CODE: {collegeConfig.misCode}</span>
                  </div>
                </div>

                <div className={styles.credentialList}>
                  <div className={styles.credItem}>
                    <strong>Affiliating Body:</strong>
                    <span>{collegeConfig.affiliation.board}</span>
                  </div>
                  <div className={styles.credItem}>
                    <strong>Controlling Authority:</strong>
                    <span>{collegeConfig.affiliation.council}</span>
                  </div>
                  <div className={styles.credItem}>
                    <strong>Ministry:</strong>
                    <span>{collegeConfig.affiliation.ministry}</span>
                  </div>
                  <div className={styles.credItem}>
                    <strong>Establishment Date:</strong>
                    <span>{collegeConfig.established}</span>
                  </div>
                  <div className={styles.credItem}>
                    <strong>Campus Address:</strong>
                    <span>{collegeConfig.address.fullAddress}</span>
                  </div>
                </div>

                <div className={styles.govNotice}>
                  <span>National Trade Certificates (NTC) issued to our trainees are recognized for all Central, State Govt., and Railway technical recruitments across India.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <div className={styles.vmIconBox}>
                <Target size={24} className={styles.vmIcon} />
              </div>
              <h3 className={styles.vmTitle}>Our Vision</h3>
              <p className={styles.vmText}>
                To emerge as Eastern Uttar Pradesh's benchmark vocational training institute by transforming every enrolled student into an expert, self-reliant technical professional ready for national and global industrial challenges.
              </p>
            </div>

            <div className={styles.vmCard}>
              <div className={styles.vmIconBox}>
                <BookOpen size={24} className={styles.vmIcon} />
              </div>
              <h3 className={styles.vmTitle}>Our Mission</h3>
              <p className={styles.vmText}>
                To maintain state-of-the-art machinery workshops, uphold rigorous safety standards, cultivate workplace discipline, and build strong placement bridges with Indian Railways and local manufacturing industries in GIDA Gorakhpur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
