import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ScheduleProps {
  currentLang: 'ru' | 'uk';
}

export function Schedule({ currentLang }: ScheduleProps) {
  const translations = {
    ru: {
      title: 'Расписание и адрес',
      subtitle: 'Я работаю для вашего удобства. Запись по телефону или онлайн',
      scheduleTitle: 'Расписание работы',
      addressTitle: 'Адрес клиники',
      days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      times: ['9:00 - 18:00', '9:00 - 18:00', '9:00 - 18:00', '9:00 - 18:00', '9:00 - 17:00', '10:00 - 14:00', 'Выходной'],
      address1: 'г. Одесса, ул. Дерибасовская, 10',
      address2: 'Медицинский центр "Здоровье", 3 этаж, кабинет 305',
      warning: '⚠️ Приём строго по предварительной записи',
      phone: 'Телефон',
      email: 'Email',
    },
    uk: {
      title: 'Розклад та адреса',
      subtitle: 'Я працюю для вашої зручності. Запис по телефону або онлайн',
      scheduleTitle: 'Розклад роботи',
      addressTitle: 'Адреса клініки',
      days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'],
      times: ['9:00 - 18:00', '9:00 - 18:00', '9:00 - 18:00', '9:00 - 18:00', '9:00 - 17:00', '10:00 - 14:00', 'Вихідний'],
      address1: 'м. Одеса, вул. Дерибасівська, 10',
      address2: 'Медичний центр "Здоров\'я", 3 поверх, кабінет 305',
      warning: '⚠️ Прийом строго за попереднім записом',
      phone: 'Телефон',
      email: 'Email',
    },
  };

  const t = translations[currentLang];

  const schedule = t.days.map((day, index) => ({
    day,
    time: t.times[index],
  }));

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pink-700 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-700">
                <Clock className="h-6 w-6" />
                {t.scheduleTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      index === 6
                        ? 'bg-gray-100 text-gray-500' 
                        : 'bg-gradient-to-r from-pink-50 to-orange-50'
                    }`}
                  >
                    <span className={index === 6 ? 'text-gray-500' : 'text-gray-700'}>
                      {item.day}
                    </span>
                    <span className={index === 6 ? 'text-gray-500' : 'text-pink-700'}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  {t.warning}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-700">
                <MapPin className="h-6 w-6" />
                {t.addressTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                {t.address1}
              </p>
              <p className="text-gray-600 text-sm">
                {t.address2}
              </p>
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.0234567890123!2d30.7403!3d46.4825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b0b0b0b%3A0x0!2zRGVyaWJhc292c2theWEgU3QsIDEwLCBPZGVzYSwgT2Rlc3NhIE9ibGFzdCwgNjUwMDA!5e0!3m2!1sen!2sua!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}