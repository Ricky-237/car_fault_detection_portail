import React from 'react';

    function Header() {
      return (
        <header className="bg-secondary text-text p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo-primary.svg" alt="Car Fault Detection Logo" className="h-10 w-10 mr-3" />
              <h1 className="text-2xl font-bold font-heading text-primary">Car Fault Detection</h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#hero" className="hover:text-primary transition-colors duration-300">Accueil</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors duration-300">Fonctionnalités</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors duration-300">À Propos</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              </ul>
            </nav>
            <button className="md:hidden text-text focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </header>
      );
    }

    export default Header;