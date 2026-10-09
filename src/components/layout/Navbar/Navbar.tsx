import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  FileText, 
  CheckCircle, 
  ExternalLink,
  Building,
  Camera,
  Wrench,
  Zap,
  Compass,
  Layers
} from 'lucide-react';
import { collegeConfig } from '../../../config/collegeConfig';
import styles from './Navbar.module.css';

interface NavbarProps {
  onOpenResultCheck: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResultCheck, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [tradesMenuOpen, setTradesMenuOpen] = useState(false);
  const [studentMenuOpen, setStudentMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function' && !target.closest(`.${styles.dropdownWrapper}`)) {
        setAboutMenuOpen(false);
        setTradesMenuOpen(false);
        setStudentMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setAboutMenuOpen(false);
    setTradesMenuOpen(false);
    setStudentMenuOpen(false);
  };

  const isAboutActive = ['/about', '/infrastructure', '/gallery'].includes(location.pathname);
  const isTradesActive = ['/trades'].includes(location.pathname);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand Crest */}
        <Link to="/" className={styles.brand} onClick={closeMenus}>
          <div className={styles.crest}>
            <GraduationCap size={28} className={styles.crestIcon} />
          </div>
          <div className={styles.brandInfo}>
            <span className={styles.brandName}>{collegeConfig.name}</span>
            <span className={styles.brandSub}>
              {collegeConfig.address.city}, U.P. • NCVT Code: {collegeConfig.misCode}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopNav}>
          {/* 1. Home */}
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}
          >
            Home
          </Link>

          {/* 2. About Us Dropdown */}
          <div 
            className={styles.dropdownWrapper}
            onMouseEnter={() => setAboutMenuOpen(true)}
            onMouseLeave={() => setAboutMenuOpen(false)}
          >
            <button 
              type="button" 
              className={`${styles.dropdownBtn} ${isAboutActive ? styles.activeLink : ''}`}
              onClick={() => {
                setAboutMenuOpen((prev) => !prev);
                setTradesMenuOpen(false);
                setStudentMenuOpen(false);
              }}
              aria-expanded={aboutMenuOpen}
            >
              <span>About Us</span>
              <ChevronDown size={14} className={`${styles.chevron} ${aboutMenuOpen ? styles.rotateChevron : ''}`} />
            </button>

            {aboutMenuOpen && (
              <div className={styles.dropdownMenuLeft}>
                <Link 
                  to="/about" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <Building size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Institutional Profile</div>
                    <div className={styles.itemSub}>History, leadership & DGT affiliation</div>
                  </div>
                </Link>

                <Link 
                  to="/infrastructure" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <Layers size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Workshops & Infrastructure</div>
                    <div className={styles.itemSub}>Machinery, test rigs & power setup</div>
                  </div>
                </Link>

                <Link 
                  to="/gallery" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <Camera size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Campus & Photo Gallery</div>
                    <div className={styles.itemSub}>Real workshop photos & student activities</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 3. Trades & Courses Dropdown */}
          <div 
            className={styles.dropdownWrapper}
            onMouseEnter={() => setTradesMenuOpen(true)}
            onMouseLeave={() => setTradesMenuOpen(false)}
          >
            <button 
              type="button" 
              className={`${styles.dropdownBtn} ${isTradesActive ? styles.activeLink : ''}`}
              onClick={() => {
                setTradesMenuOpen((prev) => !prev);
                setAboutMenuOpen(false);
                setStudentMenuOpen(false);
              }}
              aria-expanded={tradesMenuOpen}
            >
              <span>Trades & Courses</span>
              <ChevronDown size={14} className={`${styles.chevron} ${tradesMenuOpen ? styles.rotateChevron : ''}`} />
            </button>

            {tradesMenuOpen && (
              <div className={styles.dropdownMenuLeft}>
                <Link 
                  to="/trades" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <Layers size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>All Approved Trades</div>
                    <div className={styles.itemSub}>220+ NCVT seats comprehensive guide</div>
                  </div>
                </Link>

                <Link 
                  to="/trades" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <Wrench size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Fitter Trade (120 Seats)</div>
                    <div className={styles.itemSub}>Lathe machines, precision filing & assembly</div>
                  </div>
                </Link>

                <Link 
                  to="/trades" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <Zap size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Electrician Trade (80 Seats)</div>
                    <div className={styles.itemSub}>AC/DC machines, wiring & transformers</div>
                  </div>
                </Link>

                <Link 
                  to="/trades" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <Compass size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Draughtsman (Civil) (20 Seats)</div>
                    <div className={styles.itemSub}>Architectural CAD & field surveying</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Admissions & Fees */}
          <Link
            to="/admissions"
            className={`${styles.navLink} ${location.pathname === '/admissions' ? styles.activeLink : ''}`}
          >
            Admissions & Fees
          </Link>

          {/* 5. Placements */}
          <Link
            to="/placements"
            className={`${styles.navLink} ${location.pathname === '/placements' ? styles.activeLink : ''}`}
          >
            Placements
          </Link>

          {/* 6. Student Services Dropdown */}
          <div 
            className={styles.dropdownWrapper}
            onMouseEnter={() => setStudentMenuOpen(true)}
            onMouseLeave={() => setStudentMenuOpen(false)}
          >
            <button 
              type="button" 
              className={styles.dropdownBtn}
              onClick={() => {
                setStudentMenuOpen((prev) => !prev);
                setAboutMenuOpen(false);
                setTradesMenuOpen(false);
              }}
              aria-expanded={studentMenuOpen}
            >
              <span>Student Services</span>
              <ChevronDown size={14} className={`${styles.chevron} ${studentMenuOpen ? styles.rotateChevron : ''}`} />
            </button>

            {studentMenuOpen && (
              <div className={styles.dropdownMenuRight}>
                <button
                  type="button"
                  className={styles.dropdownItem}
                  onClick={() => {
                    setStudentMenuOpen(false);
                    onOpenResultCheck();
                  }}
                >
                  <CheckCircle size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Result & Roll No. Verify</div>
                    <div className={styles.itemSub}>Check trainee enrolment status</div>
                  </div>
                </button>

                <Link 
                  to="/trades" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <FileText size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>NCVT Curriculum & Syllabus</div>
                    <div className={styles.itemSub}>DGT approved course outlines</div>
                  </div>
                </Link>

                <a 
                  href="https://dgt.skillindiadigital.gov.in/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={styles.dropdownItem}
                  onClick={closeMenus}
                >
                  <ExternalLink size={16} className={styles.itemIcon} />
                  <div>
                    <div className={styles.itemTitle}>Official DGT Skill India Portal</div>
                    <div className={styles.itemSub}>Government portal verification & AITT</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* 7. Contact */}
          <Link
            to="/contact"
            className={`${styles.navLink} ${location.pathname === '/contact' ? styles.activeLink : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Primary Header Action */}
        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.applyBtn}
            onClick={onOpenInquiry}
          >
            Apply for Admission
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileLinks}>
            <Link
              to="/"
              className={`${styles.mobileLink} ${location.pathname === '/' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              Home
            </Link>

            {/* About Group */}
            <div className={styles.mobileGroupHeader}>About Institute</div>
            <Link
              to="/about"
              className={`${styles.mobileSubLink} ${location.pathname === '/about' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              Institutional Profile
            </Link>
            <Link
              to="/infrastructure"
              className={`${styles.mobileSubLink} ${location.pathname === '/infrastructure' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              Workshops & Infrastructure
            </Link>
            <Link
              to="/gallery"
              className={`${styles.mobileSubLink} ${location.pathname === '/gallery' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              📸 Campus Photo Gallery
            </Link>

            {/* Trades Group */}
            <div className={styles.mobileGroupHeader}>Approved Trades</div>
            <Link
              to="/trades"
              className={`${styles.mobileSubLink} ${location.pathname === '/trades' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              All Trades (220+ Seats)
            </Link>
            <Link
              to="/trades"
              className={styles.mobileSubLink}
              onClick={closeMenus}
            >
              Fitter (120 Seats)
            </Link>
            <Link
              to="/trades"
              className={styles.mobileSubLink}
              onClick={closeMenus}
            >
              Electrician (80 Seats)
            </Link>
            <Link
              to="/trades"
              className={styles.mobileSubLink}
              onClick={closeMenus}
            >
              Draughtsman Civil (20 Seats)
            </Link>

            {/* Direct Links */}
            <div className={styles.mobileGroupHeader}>Quick Links</div>
            <Link
              to="/admissions"
              className={`${styles.mobileLink} ${location.pathname === '/admissions' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              Admissions & Fees
            </Link>
            <Link
              to="/placements"
              className={`${styles.mobileLink} ${location.pathname === '/placements' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              Placements & Apprenticeships
            </Link>
            <Link
              to="/contact"
              className={`${styles.mobileLink} ${location.pathname === '/contact' ? styles.mobileActiveLink : ''}`}
              onClick={closeMenus}
            >
              Contact Us
            </Link>

            <div className={styles.mobileDivider} />
            <button
              type="button"
              className={styles.mobileSecondaryBtn}
              onClick={() => {
                closeMenus();
                onOpenResultCheck();
              }}
            >
              <CheckCircle size={16} /> Verify Roll No. / Admission
            </button>
            <button
              type="button"
              className={styles.mobilePrimaryBtn}
              onClick={() => {
                closeMenus();
                onOpenInquiry();
              }}
            >
              Apply Online Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
