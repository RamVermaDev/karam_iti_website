import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, CheckCircle, Wrench, Zap } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className={styles.hero}>
      {/* Background radial gradient & subtle grid */}
      <div className={styles.bgGlow} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Value Proposition & Copy */}
          <div className={styles.copy}>
            {/* Government Accreditation Pill */}
            <div className={styles.pillBadge}>
              <ShieldCheck size={14} className={styles.pillIcon} />
              <span>DGT / NCVT GOVT. OF INDIA APPROVED • CODE: {collegeConfig.misCode}</span>
            </div>

            {/* Hero Headline */}
            <h1 className={styles.headline}>
              Master Industry-Ready Technical Skills at{' '}
              <span className={styles.accentText}>{collegeConfig.name}</span>
            </h1>

            {/* Supporting Copy */}
            <p className={styles.subheadline}>
              Empowering Gorakhpur's youth since <strong>{collegeConfig.established}</strong>. Approved capacity of{' '}
              <strong>120 Fitter Seats</strong>, <strong>80 Electrician Seats</strong>, and{' '}
              <strong>Draughtsman (Civil)</strong> with 70% practical workshop training on real industrial machinery.
            </p>

            {/* CTAs */}
            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.primaryCta}
                onClick={onOpenInquiry}
              >
                <span>Apply for Admission 2026-27</span>
                <ArrowRight size={16} />
              </button>
              <Link to="/trades" className={styles.secondaryCta}>
                <span>View Approved Trades</span>
              </Link>
            </div>

            {/* Key Trust Checkpoints */}
            <div className={styles.trustList}>
              <div className={styles.trustItem}>
                <CheckCircle size={15} className={styles.checkIcon} />
                <span>National Trade Certificate (NTC)</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle size={15} className={styles.checkIcon} />
                <span>Railway & GIDA Placement Feeder</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle size={15} className={styles.checkIcon} />
                <span>UP Govt. Scholarship Eligible</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Visual Composition */}
          <div className={styles.visualColumn}>
            <div className={styles.visualCardMain}>
              <div className={styles.cardHeaderStrip}>
                <div className={styles.badgePulse}>
                  <span className={styles.pulsingDot} />
                  <span>PRACTICAL TRAINING BENCH</span>
                </div>
                <span className={styles.labTag}>NCVT Lab Standards</span>
              </div>

              <div className={styles.tradeHighlightBox}>
                <div className={styles.tradePill}>
                  <Wrench size={16} className={styles.tradePillIcon} />
                  <div>
                    <div className={styles.tradePillTitle}>Fitter Workshop</div>
                    <div className={styles.tradePillSub}>120 Approved Seats • Heavy Lathe Shop</div>
                  </div>
                </div>

                <div className={styles.tradePill}>
                  <Zap size={16} className={styles.tradePillIconAmber} />
                  <div>
                    <div className={styles.tradePillTitle}>Electrician Power Lab</div>
                    <div className={styles.tradePillSub}>80 Approved Seats • AC/DC MG Sets</div>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.campusLocation}>
                  <span>📍 Chatradhari (Lalganj), Gorakhpur, UP – 273013</span>
                </div>
                <div className={styles.hotlineNote}>
                  <span>Admission Cell: <strong>{collegeConfig.phone}</strong></span>
                </div>
              </div>
            </div>

            {/* Floating Established Badge */}
            <div className={styles.establishedFloat}>
              <Award size={20} className={styles.establishedIcon} />
              <div>
                <div className={styles.establishedYears}>14+ Years</div>
                <div className={styles.establishedText}>Serving Since 2012</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Ribbon */}
        <div className={styles.metricsRibbon}>
          <div className={styles.metricItem}>
            <div className={styles.metricNumber}>{collegeConfig.metrics.yearsOfExcellence}</div>
            <div className={styles.metricLabel}>Years of Academic Standing</div>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metricItem}>
            <div className={styles.metricNumber}>220+</div>
            <div className={styles.metricLabel}>Total Approved NCVT Seats</div>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metricItem}>
            <div className={styles.metricNumber}>{collegeConfig.metrics.practicalRatio}</div>
            <div className={styles.metricLabel}>Hands-On Practical Training</div>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metricItem}>
            <div className={styles.metricNumber}>100%</div>
            <div className={styles.metricLabel}>Placement & Apprentice Guidance</div>
          </div>
        </div>
      </div>
    </section>
  );
};
