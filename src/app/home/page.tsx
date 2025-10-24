import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header 
        title="Hamilton Wedding"
        subtitle="Celebrating the union of Luke & Shaneel"
      />
      
      <main>
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center animate-stagger">
              <h2 className="text-lavender mb-8">Our Story</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  Their story began at her matric farewell evening, where a simple greeting sparked something magical. 
                  Though not much was said between them that night, she found herself thinking about him for years to come. 
                  He was a little older than the crowd and felt out of place—until he saw her. Though he&apos;d never admit it, 
                  he felt she was someone he could talk to for hours. She, however, thought he looked rather rude!
                </p>
                <p className="text-lg mb-6">
                  Years passed, and life took them on separate journeys. They followed each other on Instagram, 
                  always just narrowly missing each other as life unfolded around them. They were friends, 
                  but never quite close—until fate intervened.
                </p>
                <p className="text-lg mb-6">
                  One evening, while scrolling through Instagram at a braai with friends (who would later become his groomsmen), 
                  he came across a video of a 4&apos;9&quot; girl dancing in a cow suit at a family day, having the time of her life. 
                  He couldn&apos;t help but laugh, and that laugh changed everything. They talked for hours late into the night, 
                  about everything and nothing at all.
                </p>
                <p className="text-lg mb-6">
                  After a few weeks of conversation, he asked if she would join him for a date at the fanciest restaurant in town—McDonald&apos;s, 
                  during lunch hour. She stalled for a while, too nervous to commit to when they should go, but eventually agreed. 
                  He drove across Port Elizabeth to pick her up, both of them so nervous that it was a little awkward at first. 
                  But he was a talker, and so was she. Within minutes, they were chatting away about everything and nothing again—so much so 
                  that he missed the turn to McDonald&apos;s and had to drive around the block, looking rather embarrassed!
                </p>
                <p className="text-lg mb-6">
                  That lunch date went so perfectly that they were both late returning to work and had to make up the time the next day. 
                  It was love from that moment on. In fact, they enjoyed each other&apos;s company so much that he began driving 
                  across Port Elizabeth every day just to have lunch with her. He took her on countless dates and drove every weekend 
                  from Port Elizabeth to Uitenhage to see her.
                </p>
                <p className="text-lg mb-6">
                  Their love story is beautifully balanced—while she binge-watches Bridgerton, Gossip Girl, and The Kardashians, 
                  she gets to learn about Warhammer, random facts, World of Warcraft, and computers.  They&apos;ve discovered that 
                  the best relationships are built on sharing each other&apos;s worlds, even when those worlds seem completely different. 
                  She&apos;s shown him the world of period dramas and reality TV, and he&apos;s become her patient teacher of all things gaming and tech.
                </p>
                <p className="text-lg mb-6">
                  The proposal came during a weekend trip to Kleinrivier for his dad&apos;s 60th birthday celebration. 
                  They went on a hike together, and his brother tried in vain to give him the perfect opportunity to propose. 
                  After two hours of walking with no chance presenting itself, he decided to propose at a chalet in the middle of nowhere. 
                  She said yes, and spent the next four hours in complete shock—though she&apos;d been hoping for this moment, 
                  the reality of it was overwhelming in the most beautiful way.
                </p>
                <p className="text-lg mb-6">
                  Their love story is a testament to how sometimes the most beautiful things begin with the simplest moments—a greeting, 
                  a laugh, a missed turn, and countless conversations about everything and nothing. They were planning their future together 
                  long before there was a ring, because they knew from that first McDonald&apos;s date that they had found something truly special.
                </p>
                <div className="text-center mt-8 mb-6">
                  <p className="text-sm text-gray-600 italic font-light">
                    *We are simply celebrating our love and commitment to each other—no little ones on the way just yet!
                  </p>
                </div>
                <div className="flex justify-center gap-8 mt-16 mb-8">
                  <a href="/ceremony" className="btn btn-primary animate-bounce" style={{ minWidth: '200px', padding: '12px 24px', fontSize: '1rem', margin: '20px' }}>Ceremony Details</a>
                  <a href="/rsvp" className="btn btn-outline animate-bounce" style={{ minWidth: '200px', padding: '12px 24px', fontSize: '1rem', margin: '20px' }}>RSVP Now</a>
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
