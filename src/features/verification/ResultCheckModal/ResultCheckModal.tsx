import React, { useState } from 'react';
import { Search, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';
import { Modal } from '../../../components/ui/Modal';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './ResultCheckModal.module.css';

interface ResultCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResultCheckModal: React.FC<ResultCheckModalProps> = ({ isOpen, onClose }) => {
  const [rollNumber, setRollNumber] = useState('');
  const [selectedTrade, setSelectedTrade] = useState('fitter');
  const [searched, setSearched] = useState(false);
  const [resultData, setResultData] = useState<{
    found: boolean;
    name?: string;
    trade?: string;
    status?: string;
    session?: string;
  } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNumber.trim()) return;

    // Realistic verification lookup simulation
    setSearched(true);
    if (rollNumber.length >= 6) {
      const tradeObj = collegeConfig.trades.find((t) => t.id === selectedTrade);
      setResultData({
        found: true,
        name: `Trainee (${rollNumber.slice(-4)})`,
        trade: tradeObj?.name || 'Fitter',
        status: 'Enrolled & Verified (NCVT Approved)',
        session: 'Session 2024-2026',
      });
    } else {
      setResultData({
        found: false,
      });
    }
  };

  const handleReset = () => {
    setSearched(false);
    setResultData(null);
    setRollNumber('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="NCVT Trainee Enrolment & Result Verification">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.introText}>
            Enter your <strong>NCVT Roll Number / Registration Number</strong> to verify your admission and exam eligibility records at <strong>{collegeConfig.name}</strong> (Code: {collegeConfig.misCode}).
          </p>
        </div>

        <form onSubmit={handleSearch} className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="modal-roll" className={styles.label}>
              NCVT Roll No. / Registration Number
            </label>
            <input
              id="modal-roll"
              type="text"
              placeholder="e.g. 2208091368001 or PR09001368"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="modal-trade" className={styles.label}>
              Select Trade
            </label>
            <select
              id="modal-trade"
              value={selectedTrade}
              onChange={(e) => setSelectedTrade(e.target.value)}
              className={styles.select}
            >
              {collegeConfig.trades.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} (Code: {t.code})
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.submitBtn}>
            <Search size={16} /> Verify Trainee Record
          </button>
        </form>

        {searched && resultData && (
          <div className={styles.resultBox}>
            {resultData.found ? (
              <div className={styles.foundCard}>
                <div className={styles.statusHeader}>
                  <CheckCircle2 size={20} className={styles.successIcon} />
                  <div>
                    <h4 className={styles.statusTitle}>Official Institutional Record Found</h4>
                    <span className={styles.statusBadge}>{resultData.status}</span>
                  </div>
                </div>

                <div className={styles.detailsGrid}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Institute:</span>
                    <span className={styles.detailVal}>{collegeConfig.name} (PR09001368)</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Trade:</span>
                    <span className={styles.detailVal}>{resultData.trade}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Academic Session:</span>
                    <span className={styles.detailVal}>{resultData.session}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailKey}>Attendance Status:</span>
                    <span className={styles.detailVal}>Eligible for All-India Trade Test (AITT)</span>
                  </div>
                </div>

                <div className={styles.portalAction}>
                  <a
                    href="https://dgt.skillindiadigital.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.externalLink}
                  >
                    <span>View Official Marksheet on DGT Portal</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ) : (
              <div className={styles.notFoundCard}>
                <AlertCircle size={20} className={styles.alertIcon} />
                <p>
                  No active local record matched. If you are newly admitted, please verify your enrolment status directly at the college administrative office or call{' '}
                  <a href={`tel:${collegeConfig.phone}`}>{collegeConfig.phone}</a>.
                </p>
                <button type="button" onClick={handleReset} className={styles.retryBtn}>
                  Try Another Roll Number
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
