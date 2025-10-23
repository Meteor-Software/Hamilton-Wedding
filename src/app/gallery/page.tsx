import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Gallery() {
  return (
    <div>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="section relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #DAB1DA 0%, #80968B 50%, #f6f7ec 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* Elegant background pattern */}
          <div className="absolute inset-0" style={{
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="gallery-shimmer" width="200" height="200" patternUnits="userSpaceOnUse"><ellipse cx="50" cy="50" rx="25" ry="12" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><circle cx="150" cy="80" r="15" fill="rgba(255,255,255,0.06)"/><ellipse cx="80" cy="120" rx="20" ry="8" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.8"/><circle cx="180" cy="30" r="8" fill="rgba(255,255,255,0.04)"/><ellipse cx="30" cy="150" rx="18" ry="6" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><circle cx="120" cy="40" r="6" fill="rgba(255,255,255,0.05)"/><ellipse cx="160" cy="160" rx="12" ry="5" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/></pattern></defs><rect width="200" height="200" fill="url(%23gallery-shimmer)"/></svg>')`,
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
                color: 'white !important',
                fontFamily: 'var(--font-great-vibes), "Great Vibes", "Brush Script MT", "Lucida Handwriting", cursive',
                fontWeight: '100'
              }}>
                Our Gallery
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-sage to-transparent mx-auto mb-6"></div>
              <p className="text-white text-xl animate-fadeInUp mb-8" style={{
                fontFamily: 'var(--font-playfair), "Playfair Display", serif',
                textShadow: '0 3px 15px rgba(0, 0, 0, 0.7)',
                color: 'white !important',
                fontWeight: '300',
                letterSpacing: '0.15em',
                fontStyle: 'italic',
                fontSize: 'clamp(1.25rem, 3vw, 2rem)'
              }}>
                Precious moments from our journey together
              </p>
            </div>
          </div>
        </section>

        {/* Main Gallery Section */}
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-lavender mb-8 animate-fadeInUp">Our Story in Photos</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  '20250524_235013.jpg', 
                  '20250802_154633.jpg',
                  '20250628_135632.jpg',
                  '20250628_135635.jpg',
                  '20250914_145808.jpg',
                  '20251018_153513.jpg',
                  '20251018_131545.jpg',
                  '20251018_131735.jpg',
                  '20251018_131738.jpg',
                  '20251018_131749.jpg',
                  'IMG-20250929-WA0001.jpg',
                  'IMG-20250928-WA0009(1).jpg',
                  '20251018_152848.jpg',
                  
                ].map((image, index) => (
                  <div key={image} className="card animate-fadeInUp group cursor-pointer" style={{
                    animationDelay: `${index * 0.1}s`
                  }}>
                    <div className="rounded-lg overflow-hidden group-hover:shadow-lg transition-all duration-300 bg-gray-100">
                      <img 
                        src={`/assets/${image}`}
                        alt={`Our story photo ${index + 1}`}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
