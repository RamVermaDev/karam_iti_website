import React from 'react';
import { Wrench, Zap, Monitor, ShieldCheck, Flame, Compass } from 'lucide-react';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './InfrastructurePage.module.css';

export const InfrastructurePage: React.FC = () => {
  const labs = [
    {
      title: "Heavy-Duty Machine Shop & Fitter Workshop",
      capacity: "Supports 120 Fitter Trainees",
      icon: <Wrench size={24} className={styles.icon} />,
      desc: "Spacious mechanical machine shop designed according to strict DGT square-footage standards. Outfitted with precision lathe machines, power hacksaws, pedestal grinders, bench vices, and surface marking tables.",
      features: [
        "Heavy-Duty Centre Lathe Machines for turning, threading & knurling",
        "Pillar & Radial Drilling units with variable speed controls",
        "Cast Iron Bench Vices for hand fitting, filing & scraping",
        "Granite Surface Plates & Vernier Height Gauges for micrometric checking",
        "Dedicated Power Hacksaw for billet and bar cutting"
      ]
    },
    {
      title: "Electrical Machine Lab & Power Benches",
      capacity: "Supports 80 Electrician Trainees",
      icon: <Zap size={24} className={styles.iconAmber} />,
      desc: "Fully equipped with high-voltage AC/DC testing panels, Motor-Generator sets, industrial star-delta starters, and transformer winding test rigs adhering to National Electrical Code standards.",
      features: [
        "AC to DC Motor-Generator (MG) Set with digital panel meters",
        "3-Phase Squirrel Cage & Slip Ring Induction Motors with starters",
        "Single-Phase & 3-Phase Step-down Transformers test bench",
        "Domestic & Industrial Conduit Wiring demonstration booths",
        "Digital Insulation Resistance Testers (Megger) & Earth Testers"
      ]
    },
    {
      title: "Civil Drafting Studio & Computer Lab",
      capacity: "Supports Draughtsman (Civil) & Technical Trainees",
      icon: <Compass size={24} className={styles.icon} />,
      desc: "Equipped with professional drafting boards and modern computer workstations with CAD software for architectural layout drafting, building estimates, and RCC structural drawings.",
      features: [
        "Ergonomic Drafting Tables with adjustable parallel motion arms",
        "Modern PC Terminals equipped with 2D/3D CAD software",
        "Surveying Equipment: Dumpy Level, Theodolite & Prismatic Compass",
        "Engineering Drawing storage, blueprint archives & plotting unit"
      ]
    },
    {
      title: "Campus Safety, Power Backup & Allied Amenities",
      capacity: "Campus-Wide Compliance",
      icon: <ShieldCheck size={24} className={styles.iconGreen} />,
      desc: "A secure, disciplined technical environment prioritizing occupational health, industrial safety compliance, and continuous power reliability.",
      features: [
        "Dedicated High-Capacity Generator Backup for uninterrupted workshop training",
        "Industrial Fire Extinguishers & Sand Buckets at all lab stations",
        "Mandatory Workshop Safety Boots, Goggles, and Apron compliance",
        "RO Purified Clean Drinking Water & First-Aid Medical Center",
        "CCTV Surveillance across all workshop machine bays"
      ]
    }
  ];

  return (
    <div className={styles.infraPage}>
      {/* Header */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.badge}>WORKSHOP INFRASTRUCTURE</div>
          <h1 className={styles.heroTitle}>Workshops, Labs & Campus Facilities</h1>
          <p className={styles.heroSubtitle}>
            Take a virtual tour of our certified workshop facilities at <strong>{collegeConfig.name}</strong>, Chatradhari (Lalganj), Gorakhpur.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.labsGrid}>
            {labs.map((lab, index) => (
              <div key={index} className={styles.labCard}>
                <div className={styles.labHeader}>
                  <div className={styles.iconWrapper}>{lab.icon}</div>
                  <div>
                    <span className={styles.capacityTag}>{lab.capacity}</span>
                    <h3 className={styles.labTitle}>{lab.title}</h3>
                  </div>
                </div>

                <p className={styles.labDesc}>{lab.desc}</p>

                <div className={styles.featuresList}>
                  <div className={styles.featureTitle}>Machinery & Standard Equipment:</div>
                  <ul>
                    {lab.features.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
