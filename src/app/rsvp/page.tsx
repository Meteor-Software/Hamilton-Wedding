"use client";

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RSVPModal from '@/components/RSVPModal';

export default function RSVP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);

  const openModal = () => {
    console.log('RSVP page - Opening modal...');
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log('RSVP page - Closing modal...');
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="section relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #80968B 0%, #DAB1DA 50%, #f6f7ec 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Elegant background pattern */}
          <div className="absolute inset-0" style={{
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="rsvp-shimmer" width="200" height="200" patternUnits="userSpaceOnUse"><ellipse cx="50" cy="50" rx="25" ry="12" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><circle cx="150" cy="80" r="15" fill="rgba(255,255,255,0.06)"/><ellipse cx="80" cy="120" rx="20" ry="8" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.8"/><circle cx="180" cy="30" r="8" fill="rgba(255,255,255,0.04)"/><ellipse cx="30" cy="150" rx="18" ry="6" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><circle cx="120" cy="40" r="6" fill="rgba(255,255,255,0.05)"/><ellipse cx="160" cy="160" rx="12" ry="5" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/></pattern></defs><rect width="200" height="200" fill="url(%23rsvp-shimmer)"/></svg>')`,
            opacity: 0.4,
            animation: 'shimmer-bg 8s ease-in-out infinite',
            animationName: 'shimmer-bg',
            animationDuration: '8s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }}></div>

          {/* Radial gradient overlays */}
          <div className="absolute inset-0" style={{
            background: `radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 60%), radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }}></div>

          <div className="container relative z-10">
            <div className="text-center">
              <h1 className="text-white mb-4 text-6xl animate-fadeInUp" style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
                fontFamily: 'var(--font-great-vibes), "Great Vibes", "Brush Script MT", "Lucida Handwriting", cursive',
                fontWeight: '100'
              }}>
                RSVP
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
              <p className="text-white text-xl animate-fadeInUp mb-8" style={{
                fontFamily: 'var(--font-playfair), "Playfair Display", serif',
                textShadow: '0 3px 15px rgba(0, 0, 0, 0.7)',
                fontWeight: '300',
                letterSpacing: '0.15em',
                fontStyle: 'italic',
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                color: 'white !important'
              }}>
                Please let us know if you&apos;ll be joining us
              </p>
              <button
                onClick={openModal}
                className="btn btn-primary animate-bounce text-lg px-8 py-4"
              >
                RSVP Now
              </button>
            </div>
          </div>
        </section>

        {/* RSVP Form Section */}
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-lavender mb-8 animate-fadeInUp">RSVP Information</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We&apos;re so excited to celebrate with you! Please use the button above to submit your RSVP.
                We need to know if you&apos;ll be attending.
              </p>
              <div className="max-w-md mx-auto">
                <div className="card card-glass animate-fadeInUp">
                  <h3 className="text-gold mb-4">What we need to know:</h3>
                  <div className="text-left text-gray-700 space-y-4">
                    <div className="flex items-center py-2">
                      <div className="w-2 h-2 bg-gold rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-800">Your full name</span>
                    </div>
                    <div className="flex items-center py-2">
                      <div className="w-2 h-2 bg-gold rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-800">Whether you&apos;ll be attending</span>
                    </div>
                    <div className="flex items-center py-2">
                      <div className="w-2 h-2 bg-gold rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-800">Note: All food will be halal friendly</span>
                    </div>
                  </div>
                  <button
                    onClick={openModal}
                    className="btn btn-primary mt-6 w-full"
                  >
                    Submit Your RSVP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Registry Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-lavender mb-8 animate-fadeInUp" style={{ fontFamily: 'var(--font-great-vibes), "Great Vibes", "Brush Script MT", "Lucida Handwriting", cursive', fontWeight: '100' }}>
                Gift Registry
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto mb-8"></div>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-600 mb-6">
                  We are incredibly fortunate to have everything we need to start our new life together. 
                  Your presence at our wedding is the greatest gift we could ask for.
                </p>
                <p className="text-gray-600 mb-8">
                  However, if you would like to contribute to our future adventures, we would be deeply grateful. 
                  Any contribution is 100% optional and will help us create beautiful memories together.
                </p>
                <button 
                  onClick={() => setShowGiftModal(true)}
                  className="btn btn-primary animate-bounce" 
                  style={{ minWidth: '200px', padding: '12px 24px', fontSize: '1rem' }}
                >
                  Gift Details
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* RSVP Modal */}
      <RSVPModal isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Gift Registry Modal */}
      {showGiftModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 hide-scrollbar"
          style={{ 
            zIndex: 9999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            overflowY: 'auto',
            padding: '16px',
            paddingTop: '32px',
            paddingBottom: '32px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-2xl hide-scrollbar"
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '20px',
              maxWidth: '36rem',
              width: '100%',
              maxHeight: '90vh',
              padding: '2.5rem',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(176, 159, 196, 0.15)',
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="modal-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(176,159,196,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23modal-pattern)"/></svg>')`,
              overflowY: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowGiftModal(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                color: '#6b7280',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = '#374151';
                target.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = '#6b7280';
                target.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2 style={{
                fontSize: '36px',
                marginBottom: '12px',
                fontFamily: 'var(--font-great-vibes), "Great Vibes", "Brush Script MT", "Lucida Handwriting", cursive',
                fontWeight: '100',
                color: '#DAB1DA',
                textShadow: '0 2px 4px rgba(218, 177, 218, 0.3)'
              }}>Gift Details</h2>
              <div style={{
                width: '64px',
                height: '1px',
                margin: '0 auto 16px',
                background: 'linear-gradient(to right, transparent, #DAB1DA, transparent)'
              }}></div>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>Banking details for your convenience</p>
            </div>

            {/* Banking Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{
                padding: '20px',
                borderRadius: '12px',
                background: '#f8f9fa',
                border: '2px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#DAB1DA', fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                  Bank Account Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '500', color: '#374151' }}>Bank:</span>
                    <span style={{ color: '#6b7280' }}>ABSA</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '500', color: '#374151' }}>Account Holder:</span>
                    <span style={{ color: '#6b7280' }}>SR Kotze</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '500', color: '#374151' }}>Account Number:</span>
                    <span style={{ color: '#6b7280', fontFamily: 'monospace' }}>9266308677</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '500', color: '#374151' }}>Branch Code:</span>
                    <span style={{ color: '#6b7280' }}>632005</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '500', color: '#374151' }}>Reference:</span>
                    <span style={{ color: '#6b7280' }}>Hamilton Wedding</span>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '16px' }}>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
