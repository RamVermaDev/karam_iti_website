import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import styles from './HomeGalleryPreview.module.css';

interface GalleryPreviewItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: string;
}

const previewPhotos: GalleryPreviewItem[] = [
  {
    id: 'p1',
    title: 'Electrician Lab & Practical Testing Panels',
    category: 'Workshop & Labs',
    image: '/images/gallery/electrician-practical-workshop.jpg',
  },
  {
    id: 'p2',
    title: 'Spacious Campus Lecture Hall & Theory Session',
    category: 'Classroom',
    image: '/images/gallery/classroom-lecture-hall.jpg',
  },
  {
    id: 'p3',
    title: 'Campus Greenery & Tree Plantation Activity',
    category: 'Campus Life',
    image: '/images/gallery/tree-plantation-students.jpg',
  },
  {
    id: 'p4',
    title: 'Academic Guidance & Dignitaries Symposium',
    category: 'Institutional Events',
    image: '/images/gallery/faculty-seminar-dignitaries.jpg',
  },
];

export const HomeGalleryPreview: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>CAMPUS LIFE & INFRASTRUCTURE</span>
            </div>
            <h2 className={styles.title}>Inside Karam Private ITI</h2>
            <p className={styles.subtitle}>
              Take a visual tour through our practical training workshops, high-tech labs, lecture halls, and vibrant student activities.
            </p>
          </div>
          <Link to="/gallery" className={styles.viewAllBtn}>
            <Camera size={16} />
            <span>View Full Gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {previewPhotos.map((photo) => (
            <Link to="/gallery" key={photo.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <span className={styles.tag}>{photo.category}</span>
                  <h3 className={styles.cardTitle}>{photo.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
