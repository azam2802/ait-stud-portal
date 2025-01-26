import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import usFlag from '../../assets/usa.png';
import ruFlag from '../../assets/ru.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language;

  const languages = [
    { code: 'en', name: 'English', flag: usFlag },
    { code: 'ru', name: 'Русский', flag: ruFlag }
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div className="fixed top-2 md:top-4 right-2 md:right-4 z-50">
      <div className="bg-blue-900/50 backdrop-blur-sm rounded-lg p-1 md:p-2">
        {/* Mobile View */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-lg bg-blue-600 flex items-center justify-center"
          >
            <img 
              src={currentLanguage.flag} 
              alt={currentLanguage.code}
              className="w-6 h-6 object-contain rounded"
            />
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 mt-1 bg-blue-900/90 backdrop-blur-sm rounded-lg p-1 min-w-[120px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-2 py-1 rounded-lg mb-1 last:mb-0 flex items-center gap-2
                    ${currentLang === lang.code ? 'bg-blue-600' : 'hover:bg-blue-800'}`}
                >
                  <img 
                    src={lang.flag} 
                    alt={lang.code}
                    className="w-4 h-4 object-contain rounded   "
                  />
                  <span className="text-sm">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Desktop View */}
        <div className="hidden md:flex gap-2">  
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                ${currentLang === lang.code 
                  ? 'bg-blue-600 shadow-lg scale-105' 
                  : 'bg-blue-900 hover:bg-blue-800 hover:scale-105'}`}
            >
              <img 
                src={lang.flag} 
                alt={lang.code}
                className="w-4 h-4 object-contain rounded"
              />
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { LanguageSwitcher };
