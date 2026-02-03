import React from 'react';

    function About() {
      return (
        <section id="about" className="bg-secondary text-text py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-primary">À Propos de Car Fault Detection</h3>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200">
              Car Fault Detection est une plateforme innovante dédiée à la maintenance prédictive automobile. Nous exploitons la puissance de l'intelligence artificielle pour transformer la manière dont les pannes sont identifiées, offrant une solution non-invasive et hautement efficace. Notre mission est de rendre le diagnostic automobile accessible, rapide et précis pour tous, contribuant ainsi à une meilleure sécurité routière et à une durée de vie prolongée des véhicules.
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mt-6 text-gray-200">
              Fondée sur une expertise solide en ingénierie acoustique et en apprentissage automatique, notre équipe s'engage à fournir des outils de pointe pour les professionnels et les particuliers.
            </p>
          </div>
        </section>
      );
    }

    export default About;