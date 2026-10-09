import React from 'react';
import { CheckCircle2, FileText, Phone, Award, ShieldCheck, Download } from 'lucide-react';
import { AdmissionInquiryForm } from '../../features/admissions/AdmissionInquiryForm';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './AdmissionsPage.module.css';

export const AdmissionsPage: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Online Inquiry or Campus Visit",
      desc: "Fill the admission inquiry form online or visit our campus in Chatradhari, Lalganj, Gorakhpur."
    },
    {
      step: "02",
      title: "Free Career Counselling",
      desc: "Our senior instructors evaluate your 10th marks and interests to recommend either Fitter or Electrician trade."
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Submit photocopies of 10th mark sheet, Aadhaar card, transfer certificate (TC), and passport photographs."
    },
    {
      step: "04",
      title: "Seat Confirmation & Tool Kit",
      desc: "Deposit nominal semester fees, receive your NCVT enrollment registration, workshop uniform, and safety kit."
    }
  ];

  const documents = [
    "High School (10th) Marksheet & Certificate (Original & 3 Photocopies)",
    "Aadhaar Card of Candidate & Guardian (Photocopy)",
    "Transfer Certificate (TC) / School Leaving Certificate from last attended school",
    "6 Recent Passport-size Colour Photographs",
    "Caste Certificate (For SC / ST / OBC category scholarship eligibility)",
    "Domicile / Niwas Praman Patra (Uttar Pradesh State)",
    "Income Certificate (Aay Praman Patra) for UP Social Welfare Scholarship"
  ];

  return (
    <div className={styles.admissionsPage}>
      {/* Header */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.badge}>SESSION 2026-27 ADMISSION DESK</div>
          <h1 className={styles.heroTitle}>Admission Procedure & Fee Guidelines</h1>
          <p className={styles.heroSubtitle}>
            Direct enrollment open for NCVT approved trades: <strong>Fitter (120 Seats)</strong> and <strong>Electrician (80 Seats)</strong>. Transparent fee structure with full UP Government scholarship assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {/* Steps */}
          <div className={styles.stepsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>4 Simple Steps to Secure Your Seat</h2>
              <p className={styles.sectionDesc}>Clear, transparent, zero-hassle enrollment process.</p>
            </div>

            <div className={styles.stepsGrid}>
              {steps.map((s, idx) => (
                <div key={idx} className={styles.stepCard}>
                  <div className={styles.stepNum}>{s.step}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form and Document Checklist Grid */}
          <div className={styles.mainGrid}>
            {/* Left: Document Checklist & Scholarships */}
            <div className={styles.infoCol}>
              <div className={styles.docCard}>
                <h3 className={styles.docHeading}>
                  <FileText size={20} className={styles.iconGold} />
                  <span>Mandatory Documents Checklist</span>
                </h3>
                <ul className={styles.docList}>
                  {documents.map((doc, i) => (
                    <li key={i} className={styles.docItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scholarship Box */}
              <div className={styles.scholarshipCard}>
                <div className={styles.scholarshipHeader}>
                  <Award size={22} className={styles.iconAward} />
                  <div>
                    <h4 className={styles.scholarshipTitle}>UP Government Scholarship Facility</h4>
                    <span className={styles.scholarshipSub}>National Scholarship Portal & UP Social Welfare Dept.</span>
                  </div>
                </div>
                <p className={styles.scholarshipText}>
                  Eligible SC, ST, OBC, General (EWS), and Minority candidates can claim 100% reimbursement of tuition fees under the Uttar Pradesh Post-Matric Scholarship Scheme. Our administrative office provides complete end-to-end portal registration assistance.
                </p>
              </div>

              {/* Offline Admission Contact */}
              <div className={styles.directContactCard}>
                <Phone size={20} className={styles.iconPhone} />
                <div>
                  <strong>Need help with admission forms?</strong>
                  <p>Visit the college office or speak with the admission in-charge at <strong>{collegeConfig.phone}</strong>.</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className={styles.formCol}>
              <AdmissionInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
