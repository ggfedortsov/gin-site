import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

interface ReviewsProps {
  currentLang: 'ru' | 'uk';
}

export function Reviews({ currentLang }: ReviewsProps) {
  const translations = {
    ru: {
      title: 'Отзывы пациенток',
      subtitle: 'Я горжусь доверием моих пациенток и их положительными отзывами',
      reviews: [
        {
          name: 'Марина С.',
          initials: 'МС',
          text: 'Очень благодарна Катерине за профессионализм и чуткое отношение! Она помогла мне решить проблемы, с которыми я столкнулась. Всегда внимательна к деталям и объясняет всё понятно.',
          date: 'Октябрь 2024',
        },
        {
          name: 'Ольга К.',
          initials: 'ОК',
          text: 'Прекрасный врач! Весь период беременности была под чутким руководством Катерины. Чувствовала себя в безопасности. Родила здорового малыша, за что очень благодарна!',
          date: 'Сентябрь 2024',
        },
        {
          name: 'Анна Т.',
          initials: 'АТ',
          text: 'Катерина — настоящий профессионал своего дела! Очень внимательная, деликатная, всегда готова ответить на все вопросы. Клиника чистая, современное оборудование. Рекомендую!',
          date: 'Август 2024',
        },
        {
          name: 'Виктория Л.',
          initials: 'ВЛ',
          text: 'Спасибо огромное за помощь и поддержку! Долго искала своего врача, и наконец нашла. Катерина очень компетентная и отзывчивая. Теперь только к ней!',
          date: 'Июль 2024',
        },
        {
          name: 'Ирина П.',
          initials: 'ИП',
          text: 'Очень довольна приёмом! Катерина уделила достаточно времени, провела тщательный осмотр, назначила необходимые анализы. Всё прошло в комфортной атмосфере.',
          date: 'Июнь 2024',
        },
        {
          name: 'Елена Д.',
          initials: 'ЕД',
          text: 'Рекомендую всем своим подругам! Катерина — врач от бога. Профессиональный подход, современные методы лечения, и что важно — человеческое отношение. Спасибо!',
          date: 'Май 2024',
        },
      ],
    },
    uk: {
      title: 'Відгуки пацієнток',
      subtitle: 'Я пишаюся довірою моїх пацієнток та їх позитивними відгуками',
      reviews: [
        {
          name: 'Марина С.',
          initials: 'МС',
          text: 'Дуже вдячна Катерині за професіоналізм та чуйне ставлення! Вона допомогла мені вирішити проблеми, з якими я зіткнулася. Завжди уважна до деталей і пояснює все зрозуміло.',
          date: 'Жовтень 2024',
        },
        {
          name: 'Ольга К.',
          initials: 'ОК',
          text: 'Чудовий лікар! Весь період вагітності була під чуйним керівництвом Катерини. Почувалася в безпеці. Народила здорову дитину, за що дуже вдячна!',
          date: 'Вересень 2024',
        },
        {
          name: 'Анна Т.',
          initials: 'АТ',
          text: 'Катерина — справжній професіонал своєї справи! Дуже уважна, делікатна, завжди готова відповісти на всі питання. Клініка чиста, сучасне обладнання. Рекомендую!',
          date: 'Серпень 2024',
        },
        {
          name: 'Вікторія Л.',
          initials: 'ВЛ',
          text: 'Дякую величезне за допомогу та підтримку! Довго шукала свого лікаря, і нарешті знайшла. Катерина дуже компетентна та відгукувана. Тепер тільки до неї!',
          date: 'Липень 2024',
        },
        {
          name: 'Ірина П.',
          initials: 'ІП',
          text: 'Дуже задоволена прийомом! Катерина приділила достатньо часу, провела ретельний огляд, призначила необхідні аналізи. Все пройшло в комфортній атмосфері.',
          date: 'Червень 2024',
        },
        {
          name: 'Олена Д.',
          initials: 'ОД',
          text: 'Рекомендую всім своїм подругам! Катерина — лікар від бога. Професійний підхід, сучасні методи лікування, і що важливо — людське ставлення. Дякую!',
          date: 'Травень 2024',
        },
      ],
    },
  };

  const t = translations[currentLang];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pink-700 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-lg bg-gradient-to-br from-pink-50 to-orange-50">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-pink-300 mb-4" />
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="bg-gradient-to-br from-pink-400 to-orange-400">
                    <AvatarFallback className="text-white">{review.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-gray-800">{review.name}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}