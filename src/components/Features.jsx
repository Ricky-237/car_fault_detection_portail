import React from 'react';

    function Features() {
      const features = [
        {
          icon: '👂',
          title: 'Analyse Acoustique Avancée',
          description: 'Détecte les anomalies sonores spécifiques aux pannes mécaniques avec une grande précision.',
        },
        {
          icon: '⚡',
          title: 'Diagnostic Précis et Rapide',
          description: 'Obtenez des résultats instantanés et fiables, réduisant le temps de diagnostic et les coûts.',
        },
        {
          icon: '📱',
          title: 'Interface Intuitive',
          description: 'Facile à utiliser pour tous, des professionnels de l\'automobile aux particuliers soucieux de leur véhicule.',
        },
        {
          icon: '🚗',
          title: 'Compatibilité Universelle',
          description: 'Fonctionne avec une large gamme de véhicules, des voitures de tourisme aux utilitaires légers.',
        },
      ];

      return (
        <section id="features" className="bg-secondary text-text py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-primary">Nos Fonctionnalités Clés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-secondary p-8 rounded-lg shadow-xl border border-primary transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold font-heading mb-3 text-accent">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default Features;