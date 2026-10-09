import React, { useState } from 'react';
import { Bell, ArrowRight, ExternalLink } from 'lucide-react';
import { collegeConfig, Notice } from '../../../config/collegeConfig';
import styles from './NoticeBoard.module.css';

interface NoticeBoardProps {
  onOpenInquiry: () => void;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Admissions', 'Job Fair', 'Exams', 'General'];

  const filteredNotices = activeCategory === 'All'
    ? collegeConfig.notices
    : collegeConfig.notices.filter((n) => n.category === activeCategory);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.liveIndicator}>
              <span className={styles.pulsingDot} />
              <span>OFFICIAL CIRCULARS & NOTICES</span>
            </div>
            <h2 className={styles.heading}>Institutional Notice Board</h2>
            <p className={styles.subheading}>
              Live administrative circulars, AITT exam dates, and apprenticeship drives for trainees at {collegeConfig.name}.
            </p>
          </div>

          {/* Filter Categories */}
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Grid / List */}
        <div className={styles.noticeList}>
          {filteredNotices.map((notice: Notice) => (
            <div key={notice.id} className={styles.noticeCard}>
              <div className={styles.dateBadge}>
                <span className={styles.dateDay}>{notice.date.split(' ')[0]}</span>
                <span className={styles.dateMonth}>{notice.date.split(' ')[1]}</span>
                <span className={styles.dateYear}>{notice.date.split(' ')[2]}</span>
              </div>

              <div className={styles.noticeBody}>
                <div className={styles.categoryMeta}>
                  <span className={`${styles.catTag} ${styles[notice.category.toLowerCase().replace(' ', '')]}`}>
                    {notice.category}
                  </span>
                  {notice.isNew && <span className={styles.newBadge}>NEW</span>}
                </div>
                <h4 className={styles.noticeTitle}>{notice.title}</h4>
              </div>

              <div className={styles.noticeAction}>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className={styles.viewLink}
                >
                  <span>Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info strip */}
        <div className={styles.boardFooter}>
          <span>
            Looking for All-India Trade Test results? Visit the official{' '}
            <a 
              href="https://dgt.skillindiadigital.gov.in/" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.dgtLink}
            >
              DGT Skill India Digital Portal <ExternalLink size={12} />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
