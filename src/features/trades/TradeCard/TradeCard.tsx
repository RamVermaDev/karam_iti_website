import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, GraduationCap, CheckCircle, ArrowRight, Wrench, ShieldCheck } from 'lucide-react';
import { Trade } from '../../../config/collegeConfig';
import styles from './TradeCard.module.css';

interface TradeCardProps {
  trade: Trade;
  onApply: (tradeId: string) => void;
}

export const TradeCard: React.FC<TradeCardProps> = ({ trade, onApply }) => {
  return (
    <div className={styles.card}>
      {/* Top Banner */}
      <div className={styles.cardHeader}>
        <div className={styles.categoryBadge}>
          <ShieldCheck size={13} />
          <span>NCVT APPROVED • CODE: {trade.code}</span>
        </div>
        <div className={styles.seatsBadge}>
          <Users size={13} />
          <span>{trade.seats} Approved Seats</span>
        </div>
      </div>

      {/* Title & Short Description */}
      <div className={styles.titleArea}>
        <h3 className={styles.tradeName}>{trade.name}</h3>
        <p className={styles.tradeDesc}>{trade.shortDesc}</p>
      </div>

      {/* Technical Specs Grid */}
      <div className={styles.specsGrid}>
        <div className={styles.specItem}>
          <Clock size={15} className={styles.specIcon} />
          <div>
            <div className={styles.specLabel}>Duration & Training</div>
            <div className={styles.specValue}>{trade.duration} • {trade.hours} Hours</div>
          </div>
        </div>

        <div className={styles.specItem}>
          <GraduationCap size={15} className={styles.specIcon} />
          <div>
            <div className={styles.specLabel}>Minimum Eligibility</div>
            <div className={styles.specValue}>{trade.eligibility}</div>
          </div>
        </div>
      </div>

      {/* Practical Highlights */}
      <div className={styles.syllabusBlock}>
        <div className={styles.syllabusTitle}>
          <Wrench size={14} className={styles.wrenchIcon} />
          <span>Key Practical Skills Taught:</span>
        </div>
        <ul className={styles.syllabusList}>
          {trade.syllabusHighlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className={styles.syllabusItem}>
              <CheckCircle size={13} className={styles.checkIcon} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Actions */}
      <div className={styles.cardFooter}>
        <button
          type="button"
          onClick={() => onApply(trade.id)}
          className={styles.applyBtn}
        >
          <span>Apply for this Trade</span>
          <ArrowRight size={15} />
        </button>

        <Link to="/trades" className={styles.detailsBtn}>
          Full Syllabus & Equipment
        </Link>
      </div>
    </div>
  );
};
