import React, { useState } from 'react';
import { Send, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './AdmissionInquiryForm.module.css';

interface AdmissionInquiryFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export const AdmissionInquiryForm: React.FC<AdmissionInquiryFormProps> = ({ 
  onSuccess,
  compact = false 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guardianName: '',
    trade: 'fitter',
    qualification: '10th',
    city: 'Gorakhpur',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save lead to local storage (and Firebase Firestore ready)
    setTimeout(() => {
      try {
        const existingLeads = JSON.parse(localStorage.getItem('karam_iti_leads') || '[]');
        const newLead = {
          ...formData,
          id: 'LEAD-' + Date.now(),
          timestamp: new Date().toISOString(),
          status: 'New Inquiry',
        };
        localStorage.setItem('karam_iti_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (err) {
        console.error('Local lead storage error', err);
      }

      setLoading(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIconBox}>
          <CheckCircle2 size={36} className={styles.successIcon} />
        </div>
        <h4 className={styles.successTitle}>Admission Inquiry Received!</h4>
        <p className={styles.successText}>
          Thank you, <strong>{formData.name}</strong>. Our admissions counselor will call you on{' '}
          <strong>{formData.phone}</strong> shortly to guide you regarding seat allotment in{' '}
          <strong>
            {collegeConfig.trades.find((t) => t.id === formData.trade)?.name || 'selected trade'}
          </strong>.
        </p>
        <div className={styles.callHelplineBox}>
          <span>Need immediate assistance? Call direct:</span>
          <a href={`tel:${collegeConfig.phone}`} className={styles.callHelplineLink}>
            <PhoneCall size={14} /> {collegeConfig.phone}
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={styles.resetBtn}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${compact ? styles.compactForm : ''}`}>
      {!compact && (
        <div className={styles.formHeader}>
          <div className={styles.taglineBadge}>
            <Sparkles size={13} className={styles.sparkleIcon} />
            <span>DIRECT ADMISSIONS DESK 2026-27</span>
          </div>
          <h3 className={styles.formTitle}>Book Your ITI Seat Online</h3>
          <p className={styles.formSubtitle}>
            Limited seats in <strong>Fitter (120 Seats)</strong> & <strong>Electrician (80 Seats)</strong>. Fill the quick form to receive free trade counselling.
          </p>
        </div>
      )}

      <div className={styles.grid}>
        {/* Full Name */}
        <div className={styles.field}>
          <label htmlFor="inquiry-name" className={styles.label}>
            Student Full Name *
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Rahul Kumar"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* 10-Digit Mobile */}
        <div className={styles.field}>
          <label htmlFor="inquiry-phone" className={styles.label}>
            Mobile Number (10 Digits) *
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            required
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Father's / Guardian Name */}
        <div className={styles.field}>
          <label htmlFor="inquiry-guardian" className={styles.label}>
            Father's / Guardian Name *
          </label>
          <input
            id="inquiry-guardian"
            name="guardianName"
            type="text"
            required
            placeholder="e.g. Shri Suresh Singh"
            value={formData.guardianName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Desired Trade */}
        <div className={styles.field}>
          <label htmlFor="inquiry-trade" className={styles.label}>
            Select Trade *
          </label>
          <select
            id="inquiry-trade"
            name="trade"
            value={formData.trade}
            onChange={handleChange}
            className={styles.select}
          >
            {collegeConfig.trades.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.seats} Seats — {t.duration})
              </option>
            ))}
          </select>
        </div>

        {/* Highest Qualification */}
        <div className={styles.field}>
          <label htmlFor="inquiry-qual" className={styles.label}>
            Highest Qualification *
          </label>
          <select
            id="inquiry-qual"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="10th">10th Class (High School Passed)</option>
            <option value="12th">12th Class (Intermediate)</option>
            <option value="8th">8th Class Passed</option>
            <option value="Graduation">Graduate / Diploma</option>
          </select>
        </div>

        {/* City / District */}
        <div className={styles.field}>
          <label htmlFor="inquiry-city" className={styles.label}>
            City / Village / District *
          </label>
          <input
            id="inquiry-city"
            name="city"
            type="text"
            required
            placeholder="e.g. Gorakhpur / Lalganj / Deoria"
            value={formData.city}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={styles.submitBtn}
      >
        <Send size={16} />
        {loading ? 'Submitting Application...' : 'Submit Admission Inquiry'}
      </button>

      <p className={styles.disclaimer}>
        🔒 Your details are secure. Official admission records will be processed under NCVT MIS Code: <strong>{collegeConfig.misCode}</strong>.
      </p>
    </form>
  );
};
