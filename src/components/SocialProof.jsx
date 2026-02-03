import React from 'react';

    function SocialProof() {
      const testimonials = [
        {
          quote: "Cette plateforme a révolutionné la façon dont nous diagnostiquons les véhicules. Un gain de temps et de précision incroyable !",
          author: "Jean Dupont",
          title: "Mécanicien Chef, Garage AutoPro",
        },
        {
          quote: "J'ai pu identifier un problème moteur avant qu'il ne devienne grave, grâce à l'analyse sonore. Un outil indispensable !",
          author: "Sophie Martin",
          title: "Propriétaire de Véhicule",
        },
        {
          quote: "L'interface est tellement simple à utiliser, même pour quelqu'un qui n'est pas expert en mécanique. Très impressionnant.",
          author: "Marc Dubois",
          title: "Consultant Automobile",
        },
      ];

      const clientLogos = [
        'https://via.placeholder.com/150x50/0C2D48/E0FFFF?text=Client+A',
        'https://via.placeholder.com/150x50/0C2D48/E0FFFF?text=Client+B',
        'https://via.placeholder.com/150x50/0C2D48/E0FFFF?text=Client+C',
        'https://via.placeholder.com/150x50/0C2D48/E0FFFF?text=Client+D',
      ];

      return (
        <section id="social-proof" className="bg-background text-text py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-primary">Ce Que Nos Utilisateurs Disent</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg border border-accent">
                  <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              ))}
            </div>

            <h4 className="text-2xl font-bold font-heading mb-8 text-accent">Ils Nous Font Confiance</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {clientLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Client Logo ${index + 1}`} className="h-12 opacity-75 hover:opacity-100 transition-opacity duration-300" />
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default SocialProof;