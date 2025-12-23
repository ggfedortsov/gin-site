import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from 'figma:asset/ad93a07065332d8063870e1f4fcadcf6e10d326a.png';

interface HeroProps {
  currentLang: 'ru' | 'uk';
}

export function Hero({ currentLang }: HeroProps) {
  const translations = {
    ru: {
      badge: 'Женское здоровье — мой приоритет',
      title: 'Катерина Крутько',
      subtitle: 'Врач-гинеколог',
      description: 'Профессиональная медицинская помощь с заботой и вниманием к каждой пациентке. Современные методы диагностики и лечения в комфортной атмосфере.',
      phone: '+380664006828',
    },
    uk: {
      badge: 'Жіноче здоров\'я — мій пріоритет',
      title: 'Катерина Крутько',
      subtitle: 'Лікар-гінеколог',
      description: 'Професійна медична допомога з турботою та увагою до кожної пацієнтки. Сучасні методи діагностики та лікування в комфортній атмосфері.',
      phone: '+380664006828',
    },
  };

  const t = translations[currentLang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-orange-50 to-yellow-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-pink-200 rounded-full">
              <p className="text-pink-800">{t.badge}</p>
            </div>
            <h1 className="text-pink-800">
              {t.title}
            </h1>
            <h2 className="text-orange-700">
              {t.subtitle}
            </h2>
            <p className="text-gray-700 text-lg">
              {t.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" className="border-orange-400 text-orange-700 hover:bg-orange-50">
                <Phone className="mr-2 h-5 w-5" />
                {t.phone}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-3xl transform rotate-6 opacity-20"></div>
            <img 
              src={heroImage}
              alt="Доктор Катерина Крутько"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-200 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
}