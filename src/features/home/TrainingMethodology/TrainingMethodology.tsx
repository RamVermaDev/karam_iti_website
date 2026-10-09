import React from 'react';
import { BookOpen, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './TrainingMethodology.module.css';

export const TrainingMethodology: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.pillBadge}>THE KARAM TRAINING METHOD</div>
          <h2 className={styles.title}>The 70% Practical / 30% Theory Standard</h2>
          <p className={styles.desc}>
            Traditional classrooms don't produce factory-ready technicians. At Karam Private ITC, our curriculum is engineered around repetitive machine practice, electrical testing panels, and rigorous workshop discipline.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.iconBox}>
              <BookOpen size={24} className={styles.icon} />
            </div>
            <h3 className={styles.stepTitle}>Blueprint & Theory (30%)</h3>
            <p className={styles.stepText}>
              Engineering drawings, circuit schematics, workshop calculations, and metallurgical fundamentals taught in digital smart classrooms.
            </p>
            <div className={styles.stepBadge}>Classroom & Drawing Hall</div>
          </div>

          {/* Step 2 */}
          <div className={styles.stepCardActive}>
            <div className={styles.stepNumberActive}>02</div>
            <div className={styles.iconBoxActive}>
              <Cpu size={24} className={styles.iconActive} />
            </div>
            <h3 className={styles.stepTitle}>Machinery Repetition (70%)</h3>
            <p className={styles.stepText}>
              Direct hands-on hours operating heavy-duty lathes, drilling, wiring panels, transformer windings, and precision measuring tools.
            </p>
            <div className={styles.stepBadgeActive}>Machine Shop & Electric Lab</div>
          </div>

          {/* Step 3 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.iconBox}>
              <ShieldCheck size={24} className={styles.icon} />
            </div>
            <h3 className={styles.stepTitle}>Safety & Industry Ready</h3>
            <p className={styles.stepText}>
              Mandatory industrial PPE compliance, preventive maintenance, mock technical interviews, and apprenticeship onboarding for GIDA and Railways.
            </p>
            <div className={styles.stepBadge}>T&P Cell & Apprenticeship</div>
          </div>
        </div>
      </div>
    </section>
  );
};
