import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Schedule } from './components/Schedule';
import { Contact } from './components/Contact';
import { useState } from 'react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'ru' | 'uk'>('uk');

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