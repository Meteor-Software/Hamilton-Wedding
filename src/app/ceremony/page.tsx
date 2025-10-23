import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Ceremony() {
  return (
    <div>
      <Navigation />
      
      <main>
        <section className="section relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #f6f7ec 0%, #DAB1DA 50%, #80968B 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Elegant background pattern */}
          <div className="absolute inset-0" style={{
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="ceremony-shimmer" width="200" height="200" patternUnits="userSpaceOnUse"><ellipse cx="50" cy="50" rx="25" ry="12" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><circle cx="150" cy="80" r="15" fill="rgba(255,255,255,0.06)"/><ellipse cx="80" cy="120" rx="20" ry="8" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.8"/><circle cx="180" cy="30" r="8" fill="rgba(255,255,255,0.04)"/><ellipse cx="30" cy="150" rx="18" ry="6" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><circle cx="120" cy="40" r="6" fill="rgba(255,255,255,0.05)"/><ellipse cx="160" cy="160" rx="12" ry="5" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/></pattern></defs><rect width="200" height="200" fill="url(%23ceremony-shimmer)"/></svg>')`,
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
                Wedding Ceremony
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
                Celebrating the union of Luke & Shaneel
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto animate-stagger">
                <div className="card">
                  <h3 className="text-gold mb-4">When & Where</h3>
                  <p className="mb-2"><strong>Date:</strong> November 29, 2025</p>
                  <p className="mb-2"><strong>Time:</strong> 4:00 PM</p>
                  <p className="mb-2"><strong>Location:</strong> 99 Amanzi Road</p>
                  <p className="mb-4">Colleen Glen, Port Elizabeth</p>
                  <a 
                    href="https://maps.google.com/?q=99+Amanzi+Road,+Colleen+Glen,+Port+Elizabeth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold hover:text-lavender transition-colors duration-300 underline"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
                <div className="card">
                  <h3 className="text-gold mb-4">Reception</h3>
                  <p className="mb-2"><strong>Time:</strong> 6:00 PM</p>
                  <p className="mb-2"><strong>Location:</strong> 99 Amanzi Road</p>
                  <p className="mb-4">Colleen Glen, Port Elizabeth</p>
                  <p>Cocktails, dinner, and dancing to follow</p>
                </div>
                <div className="card">
                  <h3 className="text-gold mb-4">Attire</h3>
                  <p className="mb-2"><strong>Dress Code:</strong> Black Tie Preferred</p>
                  <p className="mb-4">Formal evening wear requested</p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      <strong>Note:</strong> Please wear comfortable shoes as the ceremony will be on grass. 
                      Heels may be difficult to walk in.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-gold mb-4">Guest Information</h3>
                  <p className="mb-4">This is an invite-only celebration</p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      <strong>Please note:</strong> We will be sending individual invitations to those with partners. 
                      We kindly ask that you do not bring additional guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

            <section className="section">
              <div className="container">
                <div className="text-center">
                  <h2 className="text-lavender mb-8 animate-fadeInUp">Ceremony Details</h2>
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto mb-8"></div>
                  <div className="max-w-2xl mx-auto">
                    <div className="card animate-fadeInUp">
                      <h3 className="text-gold mb-6 text-xl">Order of Events</h3>
                      <div className="text-left">
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>3:00-4:00 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Guest arrival</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>4:00 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Ceremony begins</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>4:30 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Cocktail hour</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>5:45 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Party entrance</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>6:00 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Dinner</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>6:45 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Toasts</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>7:15 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Cake cutting</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>7:30 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">First dance</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>7:45 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Parent dances</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0', marginBottom: '6px' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>8:15 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Bouquet toss</span>
                        </div>
                        <div className="flex items-center" style={{ padding: '6px 0' }}>
                          <span className="text-gold font-bold" style={{ width: '140px', minWidth: '140px' }}>8:30 PM</span>
                          <span className="text-gray-600 mx-2">—</span>
                          <span className="text-gray-800">Dance till late</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      </main>

      <Footer />
    </div>
  );
}
