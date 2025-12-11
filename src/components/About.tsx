import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface AboutProps {
  currentLang: 'ru' | 'uk';
}

export function About({ currentLang }: AboutProps) {
  const translations = {
    ru: {
      title: 'О враче',
      subtitle: 'Профессионал с многолетним опытом работы, который заботится о здоровье каждой пациентки',
      p1: 'Катерина Крутько — опытный врач-гинеколог с более чем 15-летним стажем работы. Специализируется на диагностике и лечении широкого спектра гинекологических заболеваний, ведении беременности и профилактике женских заболеваний.',
      p2: 'Окончила Одесский национальный медицинский университет с отличием. Регулярно прохожу курсы повышения квалификации в Украине и за рубежом, слежу за последними достижениями в области гинекологии.',
      philosophy: 'Философия работы:',
      philosophyText: 'Индивидуальный подход к каждой пациентке, основанный на доверии, внимании и профессионализме. Я верю, что комфортная атмосфера и открытый диалог — залог успешного лечения.',
      stats: {
        patients: { value: '5000+', label: 'Довольных пациенток' },
        experience: { value: '15+', label: 'Лет опыта' },
        reviews: { value: '98%', label: 'Положительных отзывов' },
        certificates: { value: '20+', label: 'Сертификатов' },
      },
    },
    uk: {
      title: 'Про лікаря',
      subtitle: 'Професіонал з багаторічним досвідом роботи, який дбає про здоров\'я кожної пацієнтки',
      p1: 'Катерина Крутько — досвідчений лікар-гінеколог з понад 15-річним стажем роботи. Спеціалізується на діагностиці та лікуванні широкого спектру гінекологічних захворювань, веденні вагітності та профілактиці жіночих захворювань.',
      p2: 'Закінчила Одеський національний медичний університет з відзнакою. Регулярно проходжу курси підвищення кваліфікації в Україні та за кордоном, стежу за останніми досягненнями в галузі гінекології.',
      philosophy: 'Філософія роботи:',
      philosophyText: 'Індивідуальний підхід до кожної пацієнтки, заснований на довірі, увазі та професіоналізмі. Я вірю, що комфортна атмосфера та відкритий діалог — запорука успішного лікування.',
      stats: {
        patients: { value: '5000+', label: 'Задоволених пацієнток' },
        experience: { value: '15+', label: 'Років досвіду' },
        reviews: { value: '98%', label: 'Позитивних відгуків' },
        certificates: { value: '20+', label: 'Сертифікатів' },
      },
    },
  };

  const t = translations[currentLang];

  const stats = [
    { icon: Users, ...t.stats.patients },
    { icon: Award, ...t.stats.experience },
    { icon: Heart, ...t.stats.reviews },
    { icon: GraduationCap, ...t.stats.certificates },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pink-700 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-gray-700">
              {t.p1}
            </p>
            <p className="text-gray-700">
              {t.p2}
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-6 rounded-2xl">
              <p className="text-pink-800">
                <strong>{t.philosophy}</strong> {t.philosophyText}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="border-none shadow-lg bg-gradient-to-br from-pink-50 to-orange-50">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-10 w-10 mx-auto mb-4 text-pink-500" />
                    <div className="text-pink-700 mb-2">{stat.value}</div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}