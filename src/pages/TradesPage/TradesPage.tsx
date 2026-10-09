import React from 'react';
import { TradeCard } from '../../features/trades/TradeCard';
import { TradeComparisonTable } from '../../features/trades/TradeComparisonTable';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './TradesPage.module.css';

interface TradesPageProps {
  onOpenInquiry: () => void;
}

export const TradesPage: React.FC<TradesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className={styles.tradesPage}>
      {/* Header */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.badge}>DGT / NCVT APPROVED VOCATIONAL TRADES</div>
          <h1 className={styles.heroTitle}>Approved ITI Trades & Capacities</h1>
          <p className={styles.heroSubtitle}>
            Explore our government-recognized 2-year engineering trades. Comprehensive hands-on training tailored for Indian Railways, UPPCL, and manufacturing industries.
          </p>
        </div>
      </section>

      {/* Main Trade Cards */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {collegeConfig.trades.map((trade) => (
              <TradeCard
                key={trade.id}
                trade={trade}
                onApply={() => onOpenInquiry()}
              />
            ))}
          </div>

          {/* Trade Comparison Section */}
          <div className={styles.comparisonSection}>
            <div className={styles.comparisonHeader}>
              <h2 className={styles.sectionTitle}>Side-by-Side Trade Comparison</h2>
              <p className={styles.sectionSubtitle}>
                Compare duration, approved seats, machinery handled, and career scope to choose the right engineering branch for your aptitude.
              </p>
            </div>
            <TradeComparisonTable />
          </div>
        </div>
      </section>
    </div>
  );
};
