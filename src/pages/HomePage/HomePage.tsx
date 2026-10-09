import React from 'react';
import { HeroSection } from '../../features/home/HeroSection';
import { QuickActionStrip } from '../../features/home/QuickActionStrip';
import { NoticeBoard } from '../../features/notices/NoticeBoard';
import { TradeCard } from '../../features/trades/TradeCard';
import { TrainingMethodology } from '../../features/home/TrainingMethodology';
import { RecruitersMarquee } from '../../features/home/RecruitersMarquee';
import { ToppersSection } from '../../features/home/ToppersSection';
import { HomeGalleryPreview } from '../../features/home/HomeGalleryPreview';
import { AdmissionInquiryForm } from '../../features/admissions/AdmissionInquiryForm';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './HomePage.module.css';

interface HomePageProps {
  onOpenResultCheck: () => void;
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onOpenResultCheck, 
  onOpenInquiry 
}) => {
  return (
    <div className={styles.home}>
      {/* 1. Hero Section */}
      <HeroSection onOpenInquiry={onOpenInquiry} />

      {/* 2. Quick Action Strip */}
      <QuickActionStrip 
        onOpenResultCheck={onOpenResultCheck} 
        onOpenInquiry={onOpenInquiry} 
      />

      {/* 3. Live Notice Board */}
      <NoticeBoard onOpenInquiry={onOpenInquiry} />

      {/* 4. Approved Trades Showcase */}
      <section className={styles.tradesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badge}>NCVT APPROVED CURRICULUM</div>
            <h2 className={styles.sectionTitle}>Approved Trades & Annual Capacities</h2>
            <p className={styles.sectionDesc}>
              Approved by the Directorate General of Training (DGT), Ministry of Skill Development, Govt. of India. Total capacity of 220+ technical seats.
            </p>
          </div>

          <div className={styles.tradesGrid}>
            {collegeConfig.trades.map((trade) => (
              <TradeCard
                key={trade.id}
                trade={trade}
                onApply={() => onOpenInquiry()}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 70/30 Practical Training Methodology */}
      <TrainingMethodology />

      {/* 6. Corporate & Railway Recruiters Wall */}
      <RecruitersMarquee />

      {/* 7. Hall of Fame / Toppers */}
      <ToppersSection />

      {/* 8. Campus Life & Workshop Photo Showcase */}
      <HomeGalleryPreview />

      {/* 9. Online Admission Lead Magnet Form */}
      <section id="inquiry" className={styles.inquirySection}>
        <div className={styles.container}>
          <div className={styles.inquiryWrapper}>
            <AdmissionInquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
