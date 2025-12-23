import { Instagram, Send, Phone } from 'lucide-react';
import { Music4, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ContactProps {
  currentLang: 'ru' | 'uk';
}

export function Contact({ currentLang }: ContactProps) {
  const translations = {
    ru: {
      title: 'Контакты и социальные сети',
      subtitle: 'Следите за полезной информацией о женском здоровье в моих социальных сетях',
      subscribe: 'Подписаться',
      ctaTitle: 'Готовы записаться на приём?',
      ctaText: 'Позвоните мне или напишите в любой удобный мессенджер. Я отвечу на все ваши вопросы.',
      callNow: 'Позвонить сейчас',
      writeTelegram: 'Написать в Telegram',
      footer1: '© 2024 Кабинет гинеколога Катерины Крутько',
      footer2: 'г. Одесса, ж/м Радужний, д. 24 • +380664006828',
      phone: 'Телефон',
      email: 'Email',
    },
    uk: {
      title: 'Контакти та соціальні мережі',
      subtitle: 'Слідкуйте за корисною інформацією про жіноче здоров\'я в моїх соціальних мережах',
      subscribe: 'Підписатися',
      ctaTitle: 'Готові записатися на прийом?',
      ctaText: 'Подзвоніть мені або напишіть у будь-який зручний месенджер. Я відповім на всі ваші питання.',
      callNow: 'Подзвонити зараз',
      writeTelegram: 'Написати в Telegram',
      footer1: '© 2024 Кабінет гінеколога Катерини Крутько',
      footer2: 'м. Одеса, ж/м Радужний, буд. 24 • +380664006828',
      phone: 'Телефон',
      email: 'Email',
    },
  };

  const t = translations[currentLang];

  const socialMedia = [
    {
      name: 'Instagram',
      icon: Instagram,
      link: 'https://www.instagram.com/womensecrets2023',
      username: '@womensecrets2023',
      color: 'from-pink-500 to-purple-500',
    },
    {
      name: 'Telegram',
      icon: Send,
      link: 'https://t.me/Dr_Katerina_Odesa',
      username: '@Dr_Katerina_Odesa',
      color: 'from-sky-400 to-sky-500',
    },
    {
      name: 'TikTok',
      icon: Music4,
      link: 'https://www.tiktok.com/@usery3r28yjmze',
      username: '@usery3r28yjmze',
      color: 'from-gray-800 to-gray-900',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pink-700 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-gray-800 mb-2">{social.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{social.username}</p>
                    {social.link ? (
                      <a href={social.link} target="_blank" rel="noopener noreferrer" className="block">
                        <Button variant="outline" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
                          {t.subscribe}
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
                        {t.subscribe}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-none shadow-lg bg-gradient-to-br from-pink-500 to-orange-500 text-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="text-sm opacity-90">{t.phone}</p>
                  <p>+380664006828</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <div>
                  <p className="text-sm opacity-90">{t.email}</p>
                  <p>doctor@doctor.odesa.ua</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p className="mb-2">{t.footer1}</p>
            <p className="text-sm">{t.footer2}</p>
          </div>
        </div>
      </footer>
    </section>
  );
}