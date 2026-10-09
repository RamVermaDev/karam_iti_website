import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './FloatingCTA.module.css';

interface FloatingCTAProps {
  onOpenInquiry: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenInquiry }) => {
  const whatsappUrl = `https://wa.me/${collegeConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Karam Private ITC, I want to inquire about ITI Admission for session 2026-27.`
  )}`;

  return (
    <>
      {/* Sticky Right-Edge Admissions Tab */}
      <button
        type="button"
        className={styles.edgeTab}
        onClick={onOpenInquiry}
        aria-label="Admissions Open 2026-27 - Apply Online"
      >
        <span className={styles.edgeTabInner}>
          <Sparkles size={14} className={styles.sparkleIcon} />
          <span>ADMISSIONS OPEN 2026-27</span>
        </span>
      </button>

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.whatsappFloat}
        aria-label="Chat on WhatsApp with Admissions Desk"
      >
        <MessageSquare size={24} className={styles.whatsappIcon} />
        <span className={styles.tooltip}>WhatsApp Admission Help</span>
      </a>
    </>
  );
};
