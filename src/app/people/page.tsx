import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function People() {
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
            background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="people-shimmer" width="200" height="200" patternUnits="userSpaceOnUse"><ellipse cx="50" cy="50" rx="25" ry="12" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><circle cx="150" cy="80" r="15" fill="rgba(255,255,255,0.06)"/><ellipse cx="80" cy="120" rx="20" ry="8" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.8"/><circle cx="180" cy="30" r="8" fill="rgba(255,255,255,0.04)"/><ellipse cx="30" cy="150" rx="18" ry="6" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.6"/><circle cx="120" cy="40" r="6" fill="rgba(255,255,255,0.05)"/><ellipse cx="160" cy="160" rx="12" ry="5" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/></pattern></defs><rect width="200" height="200" fill="url(%23people-shimmer)"/></svg>')`,
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
                People That Matter
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
                The special people who make our day complete
              </p>
            </div>
          </div>
        </section>

        {/* Wedding Party Section */}
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-lavender mb-8 animate-fadeInUp">Wedding Party</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Bridesmaids */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Bridesmaids</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Maid of Honor</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Tamaryn Arnolds</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Bridesmaid</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Kejana Jappie</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Bridesmaid</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Cayleigh Johnston</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Bridesmaid</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Chante Potgieter</span>
                  </div>
                </div>
              </div>

              {/* Groomsmen */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Groomsmen</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Best Man</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Matthew Hamilton</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Best Man</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Daniel Hamilton</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Groomsman</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Dylan Venter</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Groomsman</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Matthew Muller</span>
                  </div>
                </div>
              </div>

              {/* Flower Girl & Ring Bearer */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Little Ones</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Flower Girl</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Shayla Kotze</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Ring Bearer</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Shiloh Kotze</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parents Section */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-lavender mb-8 animate-fadeInUp">Parents</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Bride's Parents */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Bride's Parents</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Mother</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Nerisha Kotze</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Father</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Franklyn Pearce</span>
                  </div>
                </div>
              </div>

              {/* Groom's Parents */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Groom's Parents</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Mother</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Louise Hamilton</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Father</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Cliffard Hamilton</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MVPs Section */}
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-lavender mb-8 animate-fadeInUp">MVPs</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The amazing people who helped make this day possible
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Officiant */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Officiant</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Officiant</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Warren Muller</span>
                  </div>
                </div>
              </div>

              {/* Photographer */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Photographer</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Photographer</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Annelie Jonker</span>
                  </div>
                </div>
              </div>

              {/* Venue Coordinator */}
              <div className="card animate-fadeInUp">
                <h3 className="text-gold mb-4 text-xl">Venue</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Venue</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Hamilton Family</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Coordinators</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">James Anderson</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage font-semibold w-24">Coordinators</span>
                    <span className="text-gray-600 mx-2">—</span>
                    <span className="text-gray-800">Marizaan Anderson</span>
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
