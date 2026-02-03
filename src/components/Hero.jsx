import React from 'react';

    function Hero() {
      return (
        <section id="hero" className="relative bg-background text-text py-20 md:py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580414079274-a9127291271a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(30%)'
          }}></div>
          <div className="container mx-auto text-center relative z-10 px-4">
            <h2 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6 animate-fade-in-up">
              Détection de Panne Automobile par le Son
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Identifiez les problèmes de votre véhicule avec une précision inégalée grâce à notre technologie d'analyse acoustique avancée.
            </p>
            <a href="#features" className="inline-block bg-primary text-secondary font-bold py-3 px-8 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
              Découvrir la Solution
            </a>
          </div>
          <style jsx>{`
            @keyframes fade-in-up {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.8s ease-out forwards;
              opacity: 0; /* Start hidden */
            }
            .delay-200 { animation-delay: 0.2s; }
            .delay-400 { animation-delay: 0.4s; }
          `}</style>
        </section>
      );
    }

    export default Hero;