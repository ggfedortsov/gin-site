import { Phone, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
  currentLang: 'ru' | 'uk';
  setCurrentLang: (lang: 'ru' | 'uk') => void;
}

export function Header({ currentLang, setCurrentLang }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const translations = {
    ru: {
      about: 'О враче',
      services: 'Услуги',
      reviews: 'Отзывы',
      schedule: 'Расписание',
      contact: 'Контакты',
    },
    uk: {
      about: 'Про лікаря',
      services: 'Послуги',
      reviews: 'Відгуки',
      schedule: 'Розклад',
      contact: 'Контакти',
    },
  };

  const t = translations[currentLang];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-pink-700">Катерина Кушнаренко</h3>
            <p className="text-sm text-gray-600">{currentLang === 'ru' ? 'Врач-гинеколог' : 'Лікар-гінеколог'}</p>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600">
              {t.about}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-600">
              {t.services}
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-pink-600">
              {t.reviews}
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-pink-600">
              {t.schedule}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600">
              {t.contact}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentLang(currentLang === 'ru' ? 'uk' : 'ru')}
              className="border-pink-300"
            >
              <Globe className="h-4 w-4 mr-2" />
              {currentLang === 'ru' ? 'УКР' : 'РУС'}
            </Button>
            <a href="tel:+380664006828" className="flex items-center gap-2 text-pink-600">
              <Phone className="h-5 w-5" />
              <span className="hidden lg:inline">+380664006828</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}