import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Schedule } from './components/Schedule';
import { Contact } from './components/Contact';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'uk'>('ru');

  useEffect(() => {
    const seoContent = {
      ru: {
        title: 'Гинеколог Катерина Крутько в Одессе | Консультации и лечение',
        description: 'Опытный гинеколог Катерина Крутько в Одессе. Профессиональные консультации, диагностика и лечение женских заболеваний. Запись по телефону +380664006828',
        keywords: 'гинеколог Одесса, врач гинеколог, женское здоровье, консультация гинеколога, Катерина Крутько, гинеколог Радужный',
      },
      uk: {
        title: 'Гінеколог Катерина Крутько в Одесі | Консультації та лікування',
        description: 'Досвідчений гінеколог Катерина Крутько в Одесі. Професійні консультації, діагностика та лікування жіночих захворювань. Запис по телефону +380664006828',
        keywords: 'гінеколог Одеса, лікар гінеколог, жіноче здоров\'я, консультація гінеколога, Катерина Крутько, гінеколог Райдужний',
      },
    };

    const content = seoContent[currentLang];
    
    // Update title
    document.title = content.title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', content.description);
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', content.keywords);
    
    // Update or create Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: content.title },
      { property: 'og:description', content: content.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: currentLang === 'ru' ? 'ru_RU' : 'uk_UA' },
    ];
    
    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    });
    
    // Update language attribute
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <Hero currentLang={currentLang} />
      <About currentLang={currentLang} />
      <Services currentLang={currentLang} />
      <Reviews currentLang={currentLang} />
      <Schedule currentLang={currentLang} />
      <Contact currentLang={currentLang} />
    </div>
  );
}