import React from 'react';

    function Footer() {
      return (
        <footer className="bg-secondary text-text py-8">
          <div className="container mx-auto text-center px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="mb-4 md:mb-0">
                <img src="/logo-primary.svg" alt="Car Fault Detection Logo" className="h-10 w-10 mx-auto mb-2" />
                <p className="text-lg font-bold font-heading text-primary">Car Fault Detection</p>
              </div>
              <nav className="mb-4 md:mb-0">
                <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
                  <li><a href="#" className="hover:text-primary transition-colors duration-300">Politique de Confidentialité</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors duration-300">Conditions d'Utilisation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors duration-300">FAQ</a></li>
                </ul>
              </nav>
              <div className="flex space-x-4">
                <a href="#" className="text-text hover:text-primary transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-text hover:text-primary transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.797.048.85.04 1.48.174 2.04.393a4.32 4.32 0 012.66 2.66c.22.56.353 1.19.393 2.04.046 1.013.048 1.367.048 3.797s-.002 2.784-.048 3.797c-.04.85-.174 1.48-.393 2.04a4.32 4.32 0 01-2.66 2.66c-.56.22-1.19.353-2.04.393-1.013.046-1.367.048-3.797.048s-2.784-.002-3.797-.048c-.85-.04-1.48-.174-2.04-.393a4.32 4.32 0 01-2.66-2.66c-.22-.56-.353-1.19-.393-2.04-.046-1.013-.048-1.367-.048-3.797s.002-2.784.048-3.797c.04-.85.174-1.48.393-2.04a4.32 4.32 0 012.66-2.66c.56-.22 1.19-.353 2.04-.393C9.531 2.002 9.885 2 12.315 2zm0 2.16c-2.354 0-2.714.002-3.652.046-.75.035-1.24.157-1.55.27a2.17 2.17 0 00-1.24 1.24c-.113.31-.235.8-.27 1.55-.044.938-.046 1.292-.046 3.652s.002 2.714.046 3.652c.035.75.157 1.24.27 1.55a2.17 2.17 0 001.24 1.24c.31.113.8.235 1.55.27.938.044 1.292.046 3.652.046s2.714-.002 3.652-.046c.75-.035 1.24-.157 1.55-.27a2.17 2.17 0 001.24-1.24c.113-.31.235-.8.27-1.55.044-.938.046-1.292.046-3.652s-.002-2.714-.046-3.652c-.035-.75-.157-1.24-.27-1.55a2.17 2.17 0 00-1.24-1.24c-.31-.113-.8-.235-1.55-.27-.938-.044-1.292-.046-3.652-.046zm0 4.327a4.81 4.81 0 100 9.62 4.81 4.81 0 000-9.62zm0 2.16a2.65 2.65 0 110 5.3 2.65 2.65 0 010-5.3zm6.538-4.057a1.44 1.44 0 01-1.44 1.44c-.79 0-1.44-.65-1.44-1.44s.65-1.44 1.44-1.44c.79 0 1.44.65 1.44 1.44z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-text hover:text-primary transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 10.792v.05c0 4.477 3.185 8.197 7.462 9.093a4.109 4.109 0 01-1.844.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} Car Fault Detection. Tous droits réservés.</p>
          </div>
        </footer>
      );
    }

    export default Footer;