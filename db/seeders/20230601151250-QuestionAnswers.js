'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
    await queryInterface.bulkInsert('QuestionAnswers', [
      {
      question: 'Я требую продолжения банкета',
      answer: 'Иван Васильевич меняет профессию',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Страх рождает колебание, а колебания превращают страхи в реальность. Покажи силу и избежишь конфликта',
      answer: 'на гребене волны',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Люди боятся всего, что у них происходит в душе. Этот страх от осознания того, что вокруг них пустота',
      answer: 'мирный воин',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Кто спасет одну жизнь, тот спасет весь мир. Вы спасли 1100 человек и благодаря вам у них появятся новые поколения',
      answer: 'список Шиндлера',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Царь, очень приятно, здравствуйте, царь',
      answer: 'Иван Васильевич меняет профессию',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Не виноватая я, он сам пришёл!',
      answer: 'бриллиантовая рука',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Штирлиц, а вас я попрошу остаться',
      answer: '17 мгновений весны',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'К правительству лететь — гравицаппу надо иметь. Правительство на другой планете живёт, родной!',
      answer: 'кин-дза-дза',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Пасть порву, моргалы выколю…',
      answer: 'джентльмены удачи',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Я собираюсь сделать ему предложение, от которого он не сможет отказаться.',
      answer: 'крестный отец',
      theme_id: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Настоящее имя Волан-де-Морта',
      answer: 'том марволо реддл',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Как в книгах и фильме называли людей, которые лишены магических способностей и не родились в семье волшебников?',
      answer: 'маглы',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Какое у Гарри второе имя',
      answer: 'джеймс',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Какое заклинание заставляет левитировать объекты в воздухе?',
      answer: 'вингардиум левиоса',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Кто анонимно отправляет Гарри мантию-невидимку на первое Рождество в Хогвартсе?',
      answer: 'альбус дамблдор',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Как зовут собаку Хагрида?',
      answer: 'клык',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Как называется семейный дом Уизли?',
      answer: 'нора',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Что преподает профессор Макгонагалл?',
      answer: 'трансфигурация',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Сколько крестражей (хоркруксов) намеренно создал Волан-де-Морт?',
      answer: '7',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Где спрятан вход в Тайную комнату?',
      answer: 'туалет для девочек',
      theme_id: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      
    },
    {
      question: 'Как называется басня И.А.Крылова, в которой четыре «музыканта» играли, кто в лес, кто по дрова?',
      answer: 'квартет',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: `Отгадайте музыкальный инструмент:
      На первом звучит музыка и танцуют дамы и кавалеры
      Второе — разделительный союз в русском языке
      Третье — порода собак`,
      answer: 'балалайка',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Как называется самый старинный щипковый струнный музыкальный инструмент?',
      answer: 'арфа',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Какого композитора мы называем королем вальса?',
      answer: 'штраус',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Название этой нелетающей птицы из Австралии состоит из двух нот. Что это за птица?',
      answer: 'додо',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Назовите самый известный балет П.И.Чайковского, посвященный птицам.',
      answer: 'лебединое озеро',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Этот музыкальный инструмент очень похож на огромное крыло бабочки. Что это за инструмент?',
      answer: 'арфа',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'С латинского языка название этого инструмента переводится как «дуновение»',
      answer: 'флейта',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      question: 'Ф. Лист называл этот музыкальный инструмент «королем всех инструментов»',
      answer: 'рояль',
      theme_id: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
  ], {});
      },

  async down (queryInterface) {
    
     await queryInterface.bulkDelete('QuestionAnswers', null, {});
    
  }
};
