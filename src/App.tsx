import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/layout/FloatingCTA';
import { ResultCheckModal } from './features/verification/ResultCheckModal';
import { Modal } from './components/ui/Modal';
import { AdmissionInquiryForm } from './features/admissions/AdmissionInquiryForm';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TradesPage } from './pages/TradesPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [resultCheckOpen, setResultCheckOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        {/* Global Layout TopBar */}
        <TopBar />

        {/* Global Navigation Header */}
        <Navbar
          onOpenResultCheck={() => setResultCheckOpen(true)}
          onOpenInquiry={() => setInquiryModalOpen(true)}
        />

        {/* Page Content Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenResultCheck={() => setResultCheckOpen(true)}
                  onOpenInquiry={() => setInquiryModalOpen(true)}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/trades"
              element={<TradesPage onOpenInquiry={() => setInquiryModalOpen(true)} />}
            />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <HomePage
                  onOpenResultCheck={() => setResultCheckOpen(true)}
                  onOpenInquiry={() => setInquiryModalOpen(true)}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp and Sticky Admissions Tab */}
        <FloatingCTA onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* Verification Modal (Result & Roll No.) */}
        <ResultCheckModal
          isOpen={resultCheckOpen}
          onClose={() => setResultCheckOpen(false)}
        />

        {/* Quick Online Admission Inquiry Modal */}
        <Modal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
          title="Direct Admission Desk (Session 2026-27)"
          size="lg"
        >
          <AdmissionInquiryForm
            compact
            onSuccess={() => setInquiryModalOpen(false)}
          />
        </Modal>
      </div>
    </BrowserRouter>
  );
}

export default App;
