import { Baby, Stethoscope, ClipboardCheck, HeartPulse, Microscope, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ServicesProps {
  currentLang: 'ru' | 'uk';
}

export function Services({ currentLang }: ServicesProps) {
  const translations = {
    ru: {
      title: 'Услуги',
      subtitle: 'Полный спектр гинекологических услуг с использованием современного оборудования',
      services: [
        {
          title: 'Консультация гинеколога',
          description: 'Первичный и повторный приём, комплексное обследование состояния здоровья',
        },
        {
          title: 'Ведение беременности',
          description: 'Полное медицинское сопровождение на всех этапах беременности',
        },
        {
          title: 'Диагностика',
          description: 'УЗИ, кольпоскопия, анализы и другие методы диагностики',
        },
        {
          title: 'Лечение заболеваний',
          description: 'Современные методы лечения гинекологических заболеваний',
        },
        {
          title: 'Лабораторные исследования',
          description: 'Широкий спектр анализов и тестов для точной диагностики',
        },
        {
          title: 'Профилактика',
          description: 'Консультации по профилактике заболеваний и планированию семьи',
        },
      ],
      footer: 'Не нашли нужную услугу? Свяжитесь со мной для уточнения информации',
      contact: 'Связаться со мной',
    },
    uk: {
      title: 'Послуги',
      subtitle: 'Повний спектр гінекологічних послуг з використанням сучасного обладнання',
      services: [
        {
          title: 'Консультація гінеколога',
          description: 'Первинний та повторний прийом, комплексне обстеження стану здоров\'я',
        },
        {
          title: 'Ведення вагітності',
          description: 'Повне медичне супроводження на всіх етапах вагітності',
        },
        {
          title: 'Діагностика',
          description: 'УЗД, кольпоскопія, аналізи та інші методи діагностики',
        },
        {
          title: 'Лікування захворювань',
          description: 'Сучасні методи лікування гінекологічних захворювань',
        },
        {
          title: 'Лабораторні дослідження',
          description: 'Широкий спектр аналізів та тестів для точної діагностики',
        },
        {
          title: 'Профілактика',
          description: 'Консультації з профілактики захворювань та планування сім\'ї',
        },
      ],
      footer: 'Не знайшли потрібну послугу? Зв\'яжіться зі мною для уточнення інформації',
      contact: 'Зв\'язатися зі мною',
    },
  };

  const t = translations[currentLang];

  const colors = [
    'from-pink-400 to-pink-500',
    'from-orange-400 to-orange-500',
    'from-yellow-400 to-yellow-500',
    'from-pink-500 to-pink-600',
    'from-orange-500 to-orange-600',
    'from-yellow-500 to-yellow-600',
  ];

  const icons = [Stethoscope, Baby, ClipboardCheck, HeartPulse, Microscope, Shield];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pink-700 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardHeader className="pb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {t.footer}
          </p>
          <a href="#contact" className="text-pink-600 hover:text-pink-700 underline">
            {t.contact}
          </a>
        </div>
      </div>
    </section>
  );
}