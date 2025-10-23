"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import WeddingLoader from './WeddingLoader';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RSVPFormData {
  name: string;
  surname: string;
  attendance: 'yes' | 'no' | '';
  website?: string; // Honeypot field
}

const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    surname: '',
    attendance: '',
    website: '' // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  // Debug logging
  console.log('RSVPModal render - isOpen:', isOpen);

  useEffect(() => {
    setMounted(true);
    // Reset form when modal opens
    if (isOpen) {
      setFormData({
        name: '',
        surname: '',
        attendance: '',
        website: '' // Reset honeypot field
      });
      setSubmitStatus('idle');
    }
    return () => setMounted(false);
  }, [isOpen]);

  const handleInputChange = (field: keyof RSVPFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if website field is filled, it's likely a bot
    if (formData.website && formData.website.trim() !== '') {
      console.log('Bot detected via honeypot');
      return; // Silently reject the submission
    }
    
    // Check for duplicate RSVP
    const fullName = `${formData.name.trim()} ${formData.surname.trim()}`.toLowerCase();
    const rsvpKey = `rsvp_${fullName.replace(/\s+/g, '_')}`;
    const existingRSVP = localStorage.getItem(rsvpKey);
    
    if (existingRSVP) {
      const rsvpData = JSON.parse(existingRSVP);
      const daysSinceRSVP = Math.floor((Date.now() - rsvpData.timestamp) / (1000 * 60 * 60 * 24));
      
      setSubmitStatus('error');
      alert(`You have already submitted an RSVP for ${rsvpData.name} ${rsvpData.surname} ${daysSinceRSVP} days ago. If you need to make changes, please contact us directly.`);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Save RSVP to localStorage to prevent duplicates
        const rsvpData = {
          name: formData.name,
          surname: formData.surname,
          attendance: formData.attendance,
          timestamp: Date.now()
        };
        localStorage.setItem(rsvpKey, JSON.stringify(rsvpData));
        
        setFormData({
          name: '',
          surname: '',
          attendance: '',
          website: '' // Reset honeypot field
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
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
          onClick={onClose}
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
          }}>RSVP</h2>
          <div style={{
            width: '64px',
            height: '1px',
            margin: '0 auto 16px',
            background: 'linear-gradient(to right, transparent, #DAB1DA, transparent)'
          }}></div>
          <p style={{ color: '#6b7280', fontSize: '18px' }}>Please let us know if you&apos;ll be joining us</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Name */}
          <div>
            <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#DAB1DA' }}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="transition-all duration-300"
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                fontSize: '16px',
                fontWeight: '500',
                color: '#374151',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid #DAB1DA';
                e.target.style.boxShadow = '0 0 0 3px rgba(218, 177, 218, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
              onBlur={(e) => {
                e.target.style.border = '2px solid #e5e7eb';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
              placeholder="Enter your name"
            />
          </div>

          {/* Surname */}
          <div>
            <label htmlFor="surname" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#DAB1DA' }}>
              Surname *
            </label>
            <input
              type="text"
              id="surname"
              value={formData.surname}
              onChange={(e) => handleInputChange('surname', e.target.value)}
              required
              className="transition-all duration-300"
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                fontSize: '16px',
                fontWeight: '500',
                color: '#374151',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid #DAB1DA';
                e.target.style.boxShadow = '0 0 0 3px rgba(218, 177, 218, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
              onBlur={(e) => {
                e.target.style.border = '2px solid #e5e7eb';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
              placeholder="Enter your surname"
            />
          </div>

          {/* Honeypot field - hidden from users but visible to bots */}
          <div style={{ display: 'none' }}>
            <label htmlFor="website">Website (leave blank)</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Attendance */}
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#DAB1DA' }}>
              Will you be attending? *
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '12px',
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                minHeight: '56px',
                height: '56px'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid #DAB1DA';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(218, 177, 218, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid #e5e7eb';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                }}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={(e) => handleInputChange('attendance', e.target.value)}
                  style={{ marginRight: '12px', accentColor: '#DAB1DA' }}
                />
                <span style={{ color: '#374151', fontWeight: '500' }}>Yes, I&apos;ll be there!</span>
              </label>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '12px',
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                minHeight: '56px',
                height: '56px'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid #DAB1DA';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(218, 177, 218, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid #e5e7eb';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                }}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={(e) => handleInputChange('attendance', e.target.value)}
                  style={{ marginRight: '12px', accentColor: '#DAB1DA' }}
                />
                <span style={{ color: '#374151', fontWeight: '500' }}>Sorry, I can&apos;t make it</span>
              </label>
            </div>
          </div>


          {/* Submit button */}
          <div style={{ paddingTop: '48px', display: 'flex', justifyContent: 'center' }}>
            {isSubmitting ? (
              <WeddingLoader message="Sending your RSVP..." />
            ) : (
              <button
                type="submit"
                disabled={!formData.name || !formData.surname || !formData.attendance}
                className="btn btn-primary"
                style={{ minWidth: '200px' }}
              >
                Submit RSVP
              </button>
            )}
          </div>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <div className="text-center text-green-600 text-sm">
              ✓ RSVP submitted successfully! Thank you!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-center text-red-600 text-sm">
              ✗ There was an error submitting your RSVP. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default RSVPModal;
