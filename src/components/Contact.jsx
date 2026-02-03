import React, { useState } from 'react';

    function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend API.
        // For this static landing page, we'll just log it and show an alert.
        console.log('Form submitted:', formData);
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      };

      return (
        <section id="contact" className="bg-background text-text py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-primary">Contactez-Nous</h3>
            <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-xl border border-primary">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-accent mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-background border border-gray-600 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-text"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-accent mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-background border border-gray-600 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-text"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-accent mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-background border border-gray-600 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 text-text"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary font-bold py-3 px-6 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
                >
                  Envoyer le Message
                </button>
              </form>
              <div className="mt-8 text-center text-gray-400">
                <p>Ou contactez-nous directement :</p>
                <p className="mt-2">Email: <a href="mailto:contact@carfaultdetection.com" className="text-primary hover:underline">contact@carfaultdetection.com</a></p>
                <p>Téléphone: <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    export default Contact;