import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import SocialProof from './components/SocialProof';
    import About from './components/About';
    import Contact from './components/Contact';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="min-h-screen bg-background text-text font-body">
          <Header />
          <main>
            <Hero />
            <Features />
            <SocialProof />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      );
    }

    export default App;