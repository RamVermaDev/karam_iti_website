import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calculator, FileDown, ArrowRight } from 'lucide-react';
import styles from './QuickActionStrip.module.css';

interface QuickActionStripProps {
  onOpenResultCheck: () => void;
  onOpenInquiry: () => void;
}

export const QuickActionStrip: React.FC<QuickActionStripProps> = ({ 
  onOpenResultCheck, 
  onOpenInquiry 
}) => {
  return (
    <section className={styles.strip}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Action 1: Trainee Verification */}
          <div className={styles.card} onClick={onOpenResultCheck}>
            <div className={styles.iconBox}>
              <Search size={22} className={styles.icon} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Verify Roll No. / Admission</h3>
              <p className={styles.cardDesc}>
                Check trainee enrolment, attendance status & marksheet eligibility.
              </p>
              <span className={styles.actionLink}>
                Verify Record <ArrowRight size={14} />
              </span>
            </div>
          </div>

          {/* Action 2: Fee Structure & Scholarship */}
          <Link to="/admissions" className={styles.card}>
            <div className={styles.iconBoxAmber}>
              <Calculator size={22} className={styles.iconAmber} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Fee Schedule & UP Scholarships</h3>
              <p className={styles.cardDesc}>
                Transparent semester fees, tool kits, and UP Social Welfare financial aid.
              </p>
              <span className={styles.actionLink}>
                View Fee Details <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          {/* Action 3: Download Prospectus */}
          <div className={styles.card} onClick={onOpenInquiry}>
            <div className={styles.iconBoxGreen}>
              <FileDown size={22} className={styles.iconGreen} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>2026-27 Prospectus & Syllabus</h3>
              <p className={styles.cardDesc}>
                Download official course syllabus for Fitter, Electrician, and Draftsman.
              </p>
              <span className={styles.actionLink}>
                Get Brochure <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
