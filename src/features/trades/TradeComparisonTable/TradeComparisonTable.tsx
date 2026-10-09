import React from 'react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './TradeComparisonTable.module.css';

export const TradeComparisonTable: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thFeature}>Trade Comparison Criteria</th>
              {collegeConfig.trades.map((trade) => (
                <th key={trade.id} className={styles.thTrade}>
                  <div className={styles.tradeHeadTitle}>{trade.name}</div>
                  <div className={styles.tradeHeadCode}>DGT Code: {trade.code}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tdLabel}>Approved NCVT Seats</td>
              {collegeConfig.trades.map((trade) => (
                <td key={trade.id} className={styles.tdValue}>
                  <strong className={styles.seatHighlight}>{trade.seats} Seats</strong>
                </td>
              ))}
            </tr>

            <tr>
              <td className={styles.tdLabel}>Course Duration & Hours</td>
              {collegeConfig.trades.map((trade) => (
                <td key={trade.id} className={styles.tdValue}>
                  {trade.duration} <br />
                  <span className={styles.subText}>({trade.hours} Training Hours)</span>
                </td>
              ))}
            </tr>

            <tr>
              <td className={styles.tdLabel}>Minimum Entry Qualification</td>
              {collegeConfig.trades.map((trade) => (
                <td key={trade.id} className={styles.tdValue}>
                  {trade.eligibility}
                </td>
              ))}
            </tr>

            <tr>
              <td className={styles.tdLabel}>Primary Industrial Equipment</td>
              {collegeConfig.trades.map((trade) => (
                <td key={trade.id} className={styles.tdValue}>
                  <ul className={styles.bulletList}>
                    {trade.toolsEquipment.slice(0, 3).map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            <tr>
              <td className={styles.tdLabel}>Prime Employment Sectors</td>
              {collegeConfig.trades.map((trade) => (
                <td key={trade.id} className={styles.tdValue}>
                  <ul className={styles.bulletList}>
                    {trade.careerOpportunities.slice(0, 3).map((job, i) => (
                      <li key={i}>{job}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            <tr>
              <td className={styles.tdLabel}>Certification Conferred</td>
              {collegeConfig.trades.map((trade) => (
                <td key={trade.id} className={styles.tdValue}>
                  <span className={styles.certBadge}>National Trade Certificate (NTC)</span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
