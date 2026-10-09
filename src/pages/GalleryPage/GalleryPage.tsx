import React, { useState, useEffect } from 'react';
import { ZoomIn, X, MapPin, Tag, Calendar } from 'lucide-react';
import { collegeConfig } from '../../config/collegeConfig';
import styles from './GalleryPage.module.css';

interface GalleryItem {
  id: string;
  title: string;
  category: 'fitter' | 'electrician' | 'civil' | 'campus' | 'events';
  categoryLabel: string;
  image: string;
  description: string;
  date: string;
}

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Classroom Theory & Technical Lecture',
      category: 'campus',
      categoryLabel: 'Campus & Labs',
      image: '/images/gallery/classroom-lecture-hall.jpg',
      description: 'Faculty instructor conducting engineering theory lecture for trainees in the spacious campus lecture hall.',
      date: 'Academic Session'
    },
    {
      id: 'g2',
      title: 'Electrician Practical Lab & Testing Panels',
      category: 'electrician',
      categoryLabel: 'Electrician Lab',
      image: '/images/gallery/electrician-practical-workshop.jpg',
      description: 'Trainees working in the electrical practical lab surrounded by wall-mounted circuit testing panels, wiring boards, and equipment benches.',
      date: 'Practical Lab Session'
    },
    {
      id: 'g3',
      title: 'Faculty & Administrative Dignitaries Panel',
      category: 'events',
      categoryLabel: 'Events & Placements',
      image: '/images/gallery/faculty-seminar-dignitaries.jpg',
      description: 'Official academic symposium and faculty guidance session held under the Karam Industrial Training Institute banner.',
      date: 'Institutional Event'
    },
    {
      id: 'g4',
      title: 'Annual Ceremony & Student Felicitation',
      category: 'events',
      categoryLabel: 'Events & Placements',
      image: '/images/gallery/annual-ceremony-stage.jpg',
      description: 'College leadership, instructors, and student representatives on stage during the institutional seminar.',
      date: 'Campus Event'
    },
    {
      id: 'g5',
      title: 'Campus Greenery & Tree Plantation Drive',
      category: 'campus',
      categoryLabel: 'Campus & Labs',
      image: '/images/gallery/tree-plantation-students.jpg',
      description: 'Trainees in college uniform and staff members planting saplings across the green campus grounds.',
      date: 'Eco & Campus Drive'
    },
    {
      id: 'g6',
      title: 'Environmental Plantation Activity',
      category: 'campus',
      categoryLabel: 'Campus & Labs',
      image: '/images/gallery/tree-plantation-drive-1.jpg',
      description: 'Faculty and students nurturing campus flora during the annual college plantation campaign.',
      date: 'Campus Activity'
    },
    {
      id: 'g7',
      title: 'Heavy Centre Lathe Workshop',
      category: 'fitter',
      categoryLabel: 'Fitter Workshop',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      description: 'Trainees conducting precision lathe turning, facing, and knurling operations under master instructor supervision in our 120-seat Fitter workshop.',
      date: 'Session 2025-26'
    },
    {
      id: 'g8',
      title: 'Computer-Aided Drafting (CAD) Studio',
      category: 'civil',
      categoryLabel: 'Civil Drafting Studio',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      description: 'Draughtsman (Civil) trainees working on architectural floor plans, municipal bylaws, and RCC structural drawings using professional 2D/3D CAD tools.',
      date: 'Academic Year 2025'
    },
    {
      id: 'g9',
      title: 'Precision Bench Fitting & Filing Bay',
      category: 'fitter',
      categoryLabel: 'Fitter Workshop',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      description: 'Cast iron bench vices where students practice precision filing, hacksaw cutting, Vernier height gauging, and standard engineering tolerance fitting.',
      date: 'Session 2025-26'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'fitter', label: 'Fitter Workshop' },
    { key: 'electrician', label: 'Electrician Lab' },
    { key: 'civil', label: 'Civil Drafting & CAD' },
    { key: 'campus', label: 'Campus & Labs' },
    { key: 'events', label: 'Events & Placement' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhoto(null);
    };
    if (activePhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhoto]);

  return (
    <div className={styles.galleryPage}>
      {/* Hero Banner */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <div className={styles.badge}>PHOTO ARCHIVES & WORKSHOPS</div>
          <h1 className={styles.heroTitle}>Campus & Workshop Gallery</h1>
          <p className={styles.heroSubtitle}>
            Explore our DGT-compliant heavy machine shops, electrical power benches, civil studios, and vibrant student campus life at <strong>{collegeConfig.name}</strong>, Gorakhpur.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {/* Category Filter Pills */}
          <div className={styles.filterRow}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`${styles.filterBtn} ${selectedCategory === cat.key ? styles.activeFilter : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Cards Grid */}
          <div className={styles.galleryGrid}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={styles.photoCard}
                onClick={() => setActivePhoto(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setActivePhoto(item);
                }}
              >
                <div className={styles.imageBox}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.overlayZoom}>
                    <ZoomIn size={28} />
                  </div>
                  <span className={styles.categoryTag}>{item.categoryLabel}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.photoTitle}>{item.title}</h3>
                  <p className={styles.photoDesc}>{item.description}</p>
                  <div className={styles.cardFooter}>
                    <span><Calendar size={12} /> {item.date}</span>
                    <span>📍 Lalganj, Gorakhpur</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      {activePhoto && (
        <div className={styles.lightboxOverlay} onClick={() => setActivePhoto(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeLightbox}
              onClick={() => setActivePhoto(null)}
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            <div className={styles.lightboxImageWrapper}>
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className={styles.lightboxImage}
              />
            </div>

            <div className={styles.lightboxBody}>
              <div className={styles.lightboxMeta}>
                <span><Tag size={14} /> {activePhoto.categoryLabel}</span>
                <span>•</span>
                <span><MapPin size={14} /> Chatradhari (Lalganj), Gorakhpur</span>
                <span>•</span>
                <span>{activePhoto.date}</span>
              </div>
              <h3 className={styles.lightboxTitle}>{activePhoto.title}</h3>
              <p className={styles.lightboxDesc}>{activePhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
