export const tests = 
[
    {
        id: 1,
        photo:'https://catherineasquithgallery.com/uploads/posts/2021-03/1614798189_163-p-fon-dlya-pdd-191.jpg',
        title: 'Тест на знание ПДД.',
        description: 'На сколько хорошо знаешь ПДД??',
        categories_id:1,
        popular:true
    },
    {
        id:2,
        photo:'https://konstruktortestov.ru/files/c67b/460d/92b5/8488/a171/9f35/d3dc/7818/4037206505_small.jpg',
        title: "Тест на начитанность",
        description: "Думаете, что вы начитанный человек? Тогда вперед!",
        categories_id:4
    },
    {
        id:3,
        photo:'https://konstruktortestov.ru/files/9a46/cda9/dcd1/372f/47bf/6068/6d06/1a2e/3281167085_small.jpg',
        title: "Tест на IQ",
        description: "Никому не удается набрать в этом тесте на IQ 7/9! Может, получится у вас?",
        categories_id:2
    },
    {
        id:4,
        photo:'https://konstruktortestov.ru/files/aa34/b806/4a63/d904/4421/486e/c601/e17e/3836654755_small.jpg',
        title: "Блиц-Тест на знание ПДД ",
        description: "Никому не удается набрать в этом тесте на IQ 7/9! Может, получится у вас?",
        categories_id:1
    },
    {
        id:5,
        photo:'https://konstruktortestov.ru/files/5b97/25e7/1417/91b1/41ee/b50a/d89e/54a4/852461552_small.jpg',
        title: "10 вопросов на эрудицию",
        description: "Никому не удается набрать в этом тесте на IQ 7/9! Может, получится у вас?",
        categories_id:2
    },
    {
        id:6,
        photo:'https://konstruktortestov.ru/files/5e07/53af/f723/ec7a/6336/4308/2424/cff2/1232749567_small.jpg',
        title: "10 вопросов на знание географии.",
        description: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
        Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
        categories_id:6
    },
    {
        id:7,
        photo:'https://konstruktortestov.ru/files/bc07/2636/6477/37fd/7c9e/bef7/df0a/c8a5/203652960_small.jpg',
        title: "Насколько вы внимательны?",
        description: `Небольшой тест, который покажет, насколько вы внимательны :)`,
        categories_id:5
    },
    {
        id:8,
        photo:'https://konstruktortestov.ru/files/5ee8/a388/dded/31f4/acc1/569e/6191/f2d0/3065907509_small.jpg',
        title: "Найдите автора книги по ее обложке?",
        description: `Вы любите читать и считаете себя знатоком литературы? 
        А сможете ли вы определить автора книги по её обложке? Проверьте себя с помощью этого теста.`,
        categories_id:4
    },
    {
        id:9,
        photo:'https://konstruktortestov.ru/files/cf2f/4305/6150/f6be/f558/774d/e51d/fe52/4039345089_small.jpg',
        title: "Тест для киноманов",
        description: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
        categories_id:4
    },
    {
        id:10,
        photo:'https://warspot-asset.s3.amazonaws.com/articles/pictures/000/020/330/content/7-fdb5c6f024a510f9e77fc22e1042ec18.jpg',
        title: "Тест про военное дело",
        description: `Совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
        categories_id:4
    },
    {
        id:11,
        photo:'https://konstruktortestov.ru/files/a46f/8962/9d36/b703/e6b5/d3c7/7df4/153f/2079865443_small.jpg',
        title: "Кулинарный тест",
        description: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
        categories_id:3
    },
        
]


// Первый вопрос
export const questions = 
[
    {
        id: 1,
        title: `На сколько хорошо знаешь ПДД? 
        Экзамеционные билеты ПДД 2022. Теоретический экзамен на знание Правил Дорожного Движения 2022 года Росиии в режиме онлайн, в соответствии с изменениями на 2022 год. Все билеты ПДД соответствуют официальным на 2022 год.`,
        photo: 'https://konstruktortestov.ru/files/625d/f34d/0435/41e3/8522/c8c4/12ba/2975/2574907941.jpg',
        description: 'Разрешается ли Вам выполнить поворот направо по указанной траектории в данной ситуации?',
        test_id: 1,
        answers: 
    [
        {
            id: 1,
            title: "Запрещается",
            status: false ,
        },
            {
            id: 2,
            title: "Разрешается",
            status: true,
            }
    ]

    },
    
    // Второй вопрос
    {
        id: 2,
        title: 'На сколько хорошо знаешь ПДД?',
        photo: 'https://konstruktortestov.ru/files/9faf/f206/e486/1f5a/f330/0be9/0377/0684/3582961453.jpg',
        description: 'По какой траектории водителю легкового автомобиля можно выполнить обгон?',
        test_id: 1,
        answers: 
    [
        {
            id: 1,
            title: "Только по А",
            status: false ,
        },
            {
            id: 2,
            title: "По любой из указанных",
            status: true,
            },
            {
            id: 3,
            title: "Только по Б",
            status: false,
            },
    ]  
    },
// Третий вопрос
    {
        id: 3,
        title: 'На сколько хорошо знаешь ПДД?',
        photo: 'https://konstruktortestov.ru/files/82d8/8372/6c7b/f2b5/d755/ac16/2ec6/8eff/1356938713.jpg',
        description: 'С какой максимальной скоростью можно продолжить движение за знаком?',
        test_id: 1,
        answers: 
    [
        {
            id: 1,
            title: "50 км\ч",
            status: false ,
        },
            {
            id: 2,
            title: "60 км\ч",
            status: true,
            },
            {
            id: 3,
            title: "20 км\ч",
            status: false,
        },
        {
            id: 4,
            title: "30 км\ч",
            status: false,
        }
            
    ]  
    },
    // Четвертый вопрос
    {
        id: 4,
        title: 'На сколько хорошо знаешь ПДД?',
        photo: 'https://konstruktortestov.ru/files/c6d2/9050/199a/7d4a/5a9d/254f/9772/2cc5/1001338719.jpg',
        description: 'Кто из водителей нарушил правила стоянки?',
        test_id: 1,
        answers: 
    [
        {
            id: 1,
            title: "Только водитель грузового авто",
            status: false ,
        },
            {
            id: 2,
            title: "Никто не нарушил",
            status: true,
            },
            {
            id: 3,
            title: "Водитель мотоцикла и грузового авто",
            status: false,
            },
            {
            id: 4,
            title: "Только водитель мотоцикла",
            status: false,
            },
    ]  
    },
    // Пятый вопрос
    {
        id: 5,
        title: 'На сколько хорошо знаешь ПДД?',
        photo: 'https://konstruktortestov.ru/files/81af/db26/111d/74cb/e4c6/9060/ea0a/2a60/2034391855.jpg',
        description: 'Кому Вы должны уступить дорогу при движении прямо?',
        test_id: 1,
        answers: 
    [
        {
            id: 1,
            title: "Только легковому авто",
            status: false ,
        },
            {
            id: 2,
            title: "легковому авто и мотоциклу",
            status: true,
            },
            {
            id: 3,
            title: "Никому",
            status: false,
            },
    ]  
    },
    // Шестой вопрос
    {
        id: 6,
        title: 'На сколько хорошо знаешь ПДД?',
        photo: 'https://konstruktortestov.ru/files/91c4/cdcb/7f08/ff8e/2680/769c/5708/6e0f/868279057.jpg',
        description: 'Вы можете объехать препятствие:',
        test_id: 1,
        answers: 
    [
        {
            id: 1,
            title: "Только по траектории Б",
            status: false ,
        },
            {
            id: 2,
            title: "Только по траектории А",
            status: true,
            },
            {
            id: 3,
            title: "По любой траектории из указанных",
            status: false,
            },
    ]  
    },
// Седьмой вопрос
{
    id: 7,
    title: 'На сколько хорошо знаешь ПДД?',
    photo: 'https://konstruktortestov.ru/files/afb0/cf41/0d41/dcdd/1cca/7786/a50b/ba6e/2667152127.jpg',
    description: 'Вы намерены проехать перекресток в прямом направлении. Ваши действия?',
    test_id: 1,
    answers: 
[
    {
        id: 1,
        title: "Уступите дорогу трамваю",
        status: false ,
    },
        {
        id: 2,
        title: "Проедете первым руководствуюясь сигналом светофора ",
        status: true,
        },
        {
        id: 3,
        title: "Проедете первым руководствуюясь знаком Главная дорога",
        status: false,
        },
]  
},
// Восьмой вопрос
{
    id: 8,
    title: 'На сколько хорошо знаешь ПДД?',
    photo: 'https://konstruktortestov.ru/files/762c/7257/75f7/1450/367a/a432/24c1/3821/2953050927.jpg',
    description: 'Можно ли Вам выполнить разворот?',
    test_id: 1,
    answers: 
[
    {
        id: 1,
        title: "Только по траектории Б",
        status: false ,
    },
        {
        id: 2,
        title: "Только по траектории А ",
        status: true,
        },
        {
        id: 3,
        title: "Можно",
        status: false,
        },
        {
            id: 4,
            title: "Нельзя",
            status: false,
            },
]  
},
// Девятый вопрос
{
    id: 9,
    title: 'На сколько хорошо знаешь ПДД?',
    photo: 'https://konstruktortestov.ru/files/1f6d/672b/7e39/e385/1625/1dc9/c2a8/adb0/1207449605.jpg',
    description: 'Разрешается ли Вам остановка в указанном месте?',
    test_id: 1,
    answers: 
[
    {
        id: 1,
        title: "Запрещается",
        status: false ,
    },
        {
        id: 2,
        title: "Разрешается",
        status: true,
        },
        {
        id: 3,
        title: "Разрешается только для высадки и посадки пассажиров",
        status: false,
        },
      
]  
},
// Десятый вопрос
{
    id: 10,
    title: 'На сколько хорошо знаешь ПДД?',
    photo: 'https://konstruktortestov.ru/files/76c1/b295/2b7e/b8c7/148f/93e9/70d0/2bb0/3935373180.jpg',
    description: 'Как Вам следует поступить при повороте налево?',
    test_id: 1,
    answers: 
[
    {
        id: 1,
        title: "Проехать перекресток первым",
        status: false,
    },
        {
        id: 2,
        title: "Уступить дорогу легковому автомобилю",
        status: true,
        },
        
      
]  
},



{
    id: 11,
    title: 'Мы покажем вам отрывки из книг известных писателей.Ваша задача — угадать автора этих строк.Ну что, готовы принять вызов? Тогда вперед!',
    photo: 'https://konstruktortestov.ru/files/dbb8/0b91/4a9b/d4f4/f517/330c/46e1/3ba6/2367089882.jpg',
    description: 'В белом плаще с кровавым подбоем, шаркающей кавалерийской походкой, ранним утром четырнадцатого числа весеннего месяца нисана в крытую колоннаду между двумя крыльями дворца Ирода Великого вышел прокуратор Иудеи Понтий Пилат',
    test_id: 2,
    answers: 
[
    {
        id: 2,
        title: "Михаил Булгаков, “Мастер и Маргарита”",
        status: true ,
    },
        {
        id: 3,
        title: "Данте Алигьери, 'Божественная комедия'",
        status: false,
        }
]

},
{
    id: 12,
    title: 'Мы покажем вам отрывки из книг известных писателей.Ваша задача — угадать автора этих строк.Ну что, готовы принять вызов? Тогда вперед!',
    photo: 'https://konstruktortestov.ru/files/2b95/4395/6133/99f0/d42c/cc13/df82/6e15/1150196627.jpg',
    description: 'В этот день на Гревской площади зажигались потешные огни, у Бракской часовни происходила церемония посадки майского деревца, в здании Дворца правосудия давалась мистерия. Об этом еще накануне возвестили при звуках труб на всех перекрестках глашатаи парижского прево, разодетые в щегольские полукафтанья из лилового камлота с большими белыми крестами на груди.',
    test_id: 2,
    answers: 
[
    {
        id: 1,
        title: "Виктор Гюго, Собор Парижской Богоматери",
        status: true ,
    },
        {
        id: 2,
        title: "Патрик Зюскинд, Парфюмер",
        status: false,
        }
]

},
{
    id: 13,
    title: 'Мы покажем вам отрывки из книг известных писателей.Ваша задача — угадать автора этих строк.Ну что, готовы принять вызов? Тогда вперед!',
    photo: 'https://konstruktortestov.ru/files/87d2/6324/d05a/4cfc/bab5/68f4/1d03/226c/2630782401.jpg',
    description: 'Туалет вот уже год не работает, потому что Миртл постоянно рыдает и затапливает помещение. Лично я туда захожу только в случае крайней нужды. Войдёшь в кабинку по своей надобности,  а там Миртл увидит тебя и начинает рыдать...',
    test_id: 2,
    answers: 
[
    {
        id: 1,
        title: "Джоанн К.Роулинг, 'Гарри Поттер и философский камень'",
        status: true ,
    },
        {
        id: 2,
        title: "Джоанн К.Роулинг, 'Гарри Поттер и тайная комната'",
        status: false,
        }
]

},
{
    id: 14,
    title: 'Мы покажем вам отрывки из книг известных писателей.Ваша задача — угадать автора этих строк.Ну что, готовы принять вызов? Тогда вперед!',
    photo: 'https://konstruktortestov.ru/files/89c8/8f93/6561/a988/7918/9893/93a2/d082/1228211572.jpg',
    description: '— Что есть лучшее? — спросил я. — Мы вышли из людей. Мы научились ходить в сумрак, научились менять природу вещей и людей. Что изменилось, Ольга? — Хотя бы то, что вампиры не охотятся без лицензий. — Скажи это человеку, у которого пьют кровь…',
    test_id: 2,
    answers: 
[
    {
        id: 1,
        title: "Сергей Лукьяненко, “Ночной дозор”",
        status: true ,
    },
        {
        id: 2,
        title: "Лиза Джейн Смит, “Дневники вампира”",
        status: false,
        }
]

},
{
    id: 15,
    title: 'Мы покажем вам отрывки из книг известных писателей.Ваша задача — угадать автора этих строк.Ну что, готовы принять вызов? Тогда вперед!',
    photo: 'https://konstruktortestov.ru/files/8b57/660f/a629/f7ec/661c/fda5/4ef4/3925/2132710187.jpg',
    description: 'Если вам на самом деле хочется услышать эту историю, вы, наверно, прежде всего захотите узнать, где я родился, как провел свое дурацкое детство, что делали мои родители до моего рождения, - словом, всю эту давидкопперфилдовскую муть. Но, по правде говоря, мне неохота в этом копаться',
    test_id: 2,
    answers: 
[
    {
        id: 1,
        title: "Джером Дэвид Сэлинджер, “Над пропастью во ржи”",
        status: true ,
    },
        {
        id: 2,
        title: "Пауло Коэльо, “Алхимик”",
        status: false,
        }
]

},
{
    id: 16,
    title: 'Мы покажем вам отрывки из книг известных писателей.Ваша задача — угадать автора этих строк.Ну что, готовы принять вызов? Тогда вперед!',
    photo: 'https://konstruktortestov.ru/files/47d8/bdde/12b3/5077/82ec/718f/3f9d/4290/1026922202.jpg',
    description: 'Посреди комнаты стоял на мольберте портрет молодого человека необыкновенной красоты, а перед мольбертом, немного поодаль, сидел и художник, тот самый Бэзил Холлуорд, чье внезапное исчезновение несколько лет назад так взволновало лондонское общество и вызвало столько самых фантастических предположений',
    test_id: 2,
    answers: 
[
    {
        id: 1,
        title: "Джейн Остен, “Гордость и предубеждение”",
        status: true ,
    },
        {
        id: 2,
        title: "Оскар Уайльд, “Портрет Дориана Грея”",
        status: false,
        }
]

},
{
    id: 17,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/222b/2b44/1f05/70e6/e046/a4d3/cec1/1c83/3971755276.jpg',
    description: 'Выберите того, кто не является известным композитором:',
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "ЕЛОТОЛ",
        status: true ,
    },
        {
        id: 2,
        title: "ПШНЕО",
        status: false,
        },
        {
            id: 3,
            title: "ЦОМТАР",
            status: false,
            },

]

},
{
    id: 18,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/b860/3c07/67a4/a397/6f2c/45bb/ae1c/d0be/2680407200.jpg',
    description: 'Вставьте слово, которое образует новые слова. Что это слово обозначает?',
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "ОБЪЕМ",
        status: true ,
    },
        {
        id: 2,
        title: "КОЛИЧЕСТВО",
        status: false,
        },
        {
            id: 3,
            title: "ПРОЦЕСС",
            status: false,
            },
            
]

},
{
    id: 19,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/4ad3/897b/7525/e6c0/3ddd/ad1a/ec22/4993/1242536373.jpg',
    description: 'Выберите лишнее слово:',
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "ПТИЦА",
        status: true ,
    },
        {
        id: 2,
        title: "ПАУК",
        status: false,
        },
        {
            id: 3,
            title: "СТРЕКОЗА",
            status: false,
            },
            
]

},
{
    id: 20,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/8315/d1c9/b1e8/b998/8593/7314/a5d0/ae17/1883149326.jpg',
    description: `Какое нужно вставить слово, чтобы оно закончило первое слово и начало последнее БУЙ ( . . . ) ОКНО? 
    Выберите букву, которую содержит это слово:`,
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "К",
        status: true ,
    },
        {
        id: 2,
        title: "Л",
        status: false,
        },
        {
            id: 3,
            title: "Ю",
            status: false,
            },
            
]

},

{
    id: 21,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/0091/80f9/3993/9050/d017/4c86/c9cc/c201/254108975.jpg',
    description: `Автомобиль относится к дороге, как поезд к...`,
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "ШОССЕ",
        status: true ,
    },
        {
        id: 2,
        title: "РЕЛЬСАМ",
        status: false,
        },
        {
            id: 3,
            title: "ЛОКОМОТИВУ",
            status: false,
            },
            
]

},
{
    id: 22,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/61db/b996/273a/4724/bf2e/52e0/3aee/38e2/974544390.jpg',
    description: `Какое слово здесь лишнее?`,
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "ПОЛОЖИТЕЛЬНЫЙ",
        status: true ,
    },
        {
        id: 2,
        title: "УСТАЛЫЙ",
        status: false,
        },
        {
            id: 3,
            title: "БЫСТРЫЙ",
            status: false,
            },
            
]

},
{
    id: 23,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/7a10/a998/ed13/fb9b/fb2a/fbde/214b/4d6e/337055646.jpg',
    description: `Расшифруйте анаграмму РАМУ ВЕДЬ. У вас должно получиться животное. К какому классу оно относится?`,
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "НАСЕКОМЫЕ",
        status: true ,
    },
        {
        id: 2,
        title: "МЛЕКОПИТАЮЩИЕ",
        status: false,
        },
        {
            id: 3,
            title: "РЫБЫ",
            status: false,
            },
            
]

},
{
    id: 24,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/a678/1ef9/e7c1/ba14/e507/9635/62b1/e8dc/2540946556.jpg',
    description: `Назовите столицу Уругвая:`,
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "МОНТЕВИДЕО",
        status: true ,
    },
        {
        id: 2,
        title: "ТИРАНА",
        status: false,
        },
        {
            id: 3,
            title: "ДЖИБУТИ",
            status: false,
            },
            
]

},
{
    id: 25,
    title: 'Этот тест на IQ совсем не прост. Пока никому еще не удавалось набрать хотя бы 7 правильных ответов из 9.',
    photo: 'https://konstruktortestov.ru/files/4f18/c097/a8ee/c0f1/76a5/bc7e/9d47/a038/2688627207.jpg',
    description: `Что из этого лишнее?`,
    test_id: 3,
    answers: 
[
    {
        id: 1,
        title: "КИБЕРНЕТИКА",
        status: true ,
    },
        {
        id: 2,
        title: "ТАНК",
        status: false,
        },
        {
            id: 3,
            title: "АРБУЗ",
            status: false,
            },
            {
                id: 3,
                title: "БРИКЕТ",
                status: false,
                },
]

},
{
    id: 26,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/9594/3d9d/760b/230c/7918/9d33/f71b/c253/3403868576.jpg',
    description: `Сколько полос для движения имеет проезжая часть данной дороги?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "ДВЕ",
        status: true ,
    },
        {
        id: 2,
        title: "ТРИ",
        status: false,
        },
        {
            id: 3,
            title: "ОДНУ",
            status: false,
            },
            
]

},
{
    id: 27,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/35c1/5c43/03d6/067d/aab2/16d6/85b0/7b8a/1642549277.jpg',
    description: `Эти знаки предупреждают Вас:`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "О том, что сразу за знаком начнется участок протяженностью 500 м с опасными поворотами",
        status: false ,
    },
        {
        id: 2,
        title: "О наличии через 500 м опасного поворота.",
        status: false,
        },
        {
            id: 3,
            title: `О том, что на расстоянии 150-300 м за дорожным знаком начнется участок дороги протяженность 500 м с 
            опасными поворотами`,
            status:  true,
            },
            
]

},

{
    id: 28,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/8475/099f/afec/3b81/7a38/bf54/3dbf/e18a/473872954.jpg',
    description: `Какой из указанных знаков распространяет свое действие только на ту полосу, над которой он установлен?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "Б и В",
        status: false ,
    },
        {
        id: 2,
        title: "ТОЛЬКО А",
        status: true,
        },
        {
            id: 3,
            title: `ТОЛЬКО Б`,
            status:  false,
            },
            
]

},
{
    id: 29,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/27c1/a623/aca2/6937/853b/5708/46db/1c65/414379175.jpg',
    description: `Вы буксируете неисправный автомобиль. По какой полосе Вам можно продолжить движение?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "ТОЛЬКО ПО ЛЕВОЙ",
        status: false ,
    },
        {
        id: 2,
        title: "ТОЛЬКО ПО ПРАВОЙ",
        status: true,
        },
        {
            id: 3,
            title: `ПО ЛЮБОЙ`,
            status:  false,
            },
            
]

},
{
    id: 30,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/c5b8/1e49/1d71/7e74/f121/c8b0/3520/5ce6/2368992885.jpg',
    description: `Вы намерены продолжить движение по главной дороге. 
    Обязаны ли Вы при этом включить указатели правого поворота?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "НЕ ОБЯЗАНЫ",
        status: false,
    },
        {
        id: 2,
        title: "Обязаны только при наличии движущегося сзади транспортного средства",
        status: false,
        },
        {
            id: 3,
            title: `ОБЯЗАНЫ`,
            status:  true,
            },
            
]

},
{
    id: 31,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/a285/b3c0/fb93/e1e9/bbb6/e506/5870/3a20/2693944137.jpg',
    description: `Кто должен уступить дорогу?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "Водитель грузового автомобиля",
        status: false,
    },
        {
        id: 2,
        title: "Водитель легкового автомобиля",
        status: true,
        },
        
            
]

},
{
    id: 32,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/954e/0fb1/12f2/2616/fafe/a719/413c/429e/2453245628.jpg',
    description: `Вам можно выполнить разворот:`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "По любой траектории из указанных",
        status: false,
    },
        {
        id: 2,
        title: "Только по траектории Б",
        status: true,
        },
        {
            id: 3,
            title: "Только по траектории А",
            status: false,
            }           
]

},
{
    id: 33,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/7d4a/8de4/1930/6383/e915/49a6/fc7f/ab15/3508014159.jpg',
    description: `Разрешено ли Вам обогнать мотоцикл?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "Разрешено ли Вам обогнать мотоцикл?",
        status: false,
    },
        {
        id: 2,
        title: "Разрешено",
        status: true,
        },
        {
            id: 3,
            title: "Запрещено",
            status: false,
            }           
]

},
{
    id: 34,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: 'https://konstruktortestov.ru/files/f8c3/3eda/b358/6717/9db3/027e/5b24/dfdf/14547315.jpg',
    description: `Как Вам следует поступить при выполнении разворота?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "Уступить дорогу только легковому автомобилю",
        status: true,
    },
        {
        id: 2,
        title: "Переехать перекресток первым",
        status: false,
        },
        {
            id: 3,
            title: "Уступить дорогу обоим транспортным средствам",
            status: false,
            }           
]

},
{
    id: 35,
    title: 'Тест, который покажет, насколько хорошо вы знаете или помните ПДД.',
    photo: '',
    description: `Какое расстояние должно быть обеспечено между буксирующим и буксируемым транспортными
     средствами при буксировке на жесткой сцепке?`,
    test_id: 4,
    answers: 
[
    {
        id: 1,
        title: "Не более 4 м.",
        status: true,
    },
        {
        id: 2,
        title: "От 4 до 6 м.",
        status: false,
        },
        {
            id: 3,
            title: "От 6 до 8 м.",
            status: false,
            }           
]

},
{
    id: 36,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/d1ff/f733/73c4/c412/0d30/9a52/ded3/5feb/35611599.jpg',
    description: `Во время какой войны был принят Воинский устав Петра I?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "СТОЛЕТНЕЙ",
        status: true,
    },
        {
        id: 2,
        title: "СЕВЕРНОЙ",
        status: false,
        },
        {
            id: 3,
            title: "РУССКО-ТУРЕЦКОЙ",
            status: false,
        },
        {
            id: 4,
            title: "СЕМИЛЕТНЕЙ",
            status: false,
        }           
]

},
{
    id: 37,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/34e2/56f4/c845/a111/b006/c862/13cd/1e4e/1441022810.jpg',
    description: `У какой из этих птиц самый длинный язык?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "ЗИМОРОДОК",
        status: true,
    },
        {
        id: 2,
        title: "СНЕГИРЬ",
        status: false,
        },
        {
            id: 3,
            title: "ДЯТЕЛ",
            status: false,
        },
        {
            id: 4,
            title: "ЛАСТОЧКА",
            status: false,
        }           
]

},
{
    id: 38,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/78ba/6d91/a954/f245/cec5/e2c9/160b/9386/92077163.jpg',
    description: `Как называется верхний слой атмосферы Земли?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "ТРОПОСФЕРА",
        status: true,
    },
        {
        id: 2,
        title: "МЕЗОСФЕРА",
        status: false,
        },
        {
            id: 3,
            title: "СТРАТОСФЕРА",
            status: false,
        },
        {
            id: 4,
            title: "ОЗОНОВЫЙ СЛОЙ",
            status: false,
        }           
]

},
{
    id: 39,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/d94e/9063/711e/6a7c/5bc0/81c5/eff8/c126/2985429000.jpg',
    description: `Какой полуостров расположен не в Азии?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "ФЛОРИДА",
        status: true,
    },
        {
        id: 2,
        title: "ТАЙМЫР",
        status: false,
        },
        {
            id: 3,
            title: "ЯМАЛ",
            status: false,
        },
        {
            id: 4,
            title: "КАМЧАТКА",
            status: false,
        }           
]

},
{
    id: 40,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/2e87/88f1/4784/93dd/07a7/355b/e40f/74a0/2748469298.jpg',
    description: `Какого цвета были глаза у Воланда, героя романа "Мастер и Маргарита"?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "СЕРЫЕ",
        status: true,
    },
        {
        id: 2,
        title: "ЧЕРНЫЕ",
        status: false,
        },
        {
            id: 3,
            title: "ЧЕРНЫЙ И ЗЕЛЕНЫЙ",
            status: false,
        },
        {
            id: 4,
            title: "ЗЕЛЕНЫЕ",
            status: false,
        }           
]

},
{
    id: 41,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/ed83/417e/25bf/3b46/7447/5ffb/02ff/cab2/2559189104.jpg',
    description: `Где в теле человека расположена плюсна?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "ЗАПЯСТЬЕ",
        status: true,
    },
        {
        id: 2,
        title: "СТОПА",
        status: false,
        },
        {
            id: 3,
            title: "КОЛЕНО",
            status: false,
        },
        {
            id: 4,
            title: "ЛОКОТЬ",
            status: false,
        }           
]

},
{
    id: 42,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/9f3b/f49a/9c09/36c4/0c68/1f66/4380/0943/3416980720.jpg',
    description: `Что изображено на государственном гербе Ватикана?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "МЕЧИ",
        status: true,
    },
        {
        id: 2,
        title: "КЛЮЧИ",
        status: false,
        },
        {
            id: 3,
            title: "КНИГИ",
            status: false,
        },
        {
            id: 4,
            title: "РЫБЫ",
            status: false,
        }           
]

},
{
    id: 43,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/a706/1e56/22a4/e5ca/195e/0df6/d6bc/2b63/4028414735.jpg',
    description: `Кого подвигнул на героический подвиг нижегородский купец?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "ЕРМАКА",
        status: true,
    },
        {
        id: 2,
        title: "АЛЕКСАНДРА НЕВСКОГО",
        status: false,
        },
        {
            id: 3,
            title: "ИВАНА СУСАНИНА",
            status: false,
        },
        {
            id: 4,
            title: "ДМИТРИЯ ПОЖАРСКОГО",
            status: false,
        }           
]

},
{
    id: 44,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/839f/1c8e/b65e/6ecf/b0ac/237a/7ef6/bf40/1713614830.jpg',
    description: `Кто из перечисленных был пажом во времена Екатерины II?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "ФОНВИЗИН",
        status: true,
    },
        {
        id: 2,
        title: "ДЕРЖАВИН",
        status: false,
        },
        {
            id: 3,
            title: "РАДИЩЕВ",
            status: false,
        },
        {
            id: 4,
            title: "КАРАМЗИН",
            status: false,
        }           
]

},
{
    id: 45,
    title: `Знания из разных областей поставят Вас перед выбором - вспоминать то, что некогда узнали, 
    или просто угадывать, тренируя интуицию.`,
    photo: 'https://konstruktortestov.ru/files/29b9/70eb/6b26/04ef/a228/42b3/4ae7/23e0/3490712626.jpg',
    description: `В каком здании обитал главный герой романа Гастона Леру "Призрак оперы"?`,
    test_id: 5,
    answers: 
[
    {
        id: 1,
        title: "КОВЕНТ-ГАРДЕН",
        status: true,
    },
        {
        id: 2,
        title: "ГРАНД-ОПЕРА",
        status: false,
        },
        {
            id: 3,
            title: "БОЛЬШОЙ ТЕАТР",
            status: false,
        },
        {
            id: 4,
            title: "ЛА-СКАЛА",
            status: false,
        }           
]

},
{
    id: 46,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/1b4c/b4d5/1b67/3673/8ebd/1bb1/fdbb/0e80/873177181.jpg',
    description: `Самое крупное озеро на нашей планете?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "МИЧИГАН",
        status: true,
    },
        {
        id: 2,
        title: "ВИКТОРИЯ",
        status: false,
        },
        {
            id: 3,
            title: "КАСПИЙСКОЕ МОРЕ",
            status: false,
        },
        {
            id: 4,
            title: "БАЛТИКА",
            status: false,
        }           
]

},
{
    id: 47,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/ddb0/561f/a89e/2ee7/124d/9dbd/9477/db29/1641122473.jpg',
    description: `Какая страна не является страной-карликом?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "МАЛЬТА",
        status: true,
    },
        {
        id: 2,
        title: "МОНАКО",
        status: false,
        },
        {
            id: 3,
            title: "ЯПОНИЯ",
            status: false,
        },
        {
            id: 4,
            title: "СИНГАПУР",
            status: false,
        }           
]

},
{
    id: 48,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/6e42/dd70/76b5/39d8/55c1/e95e/b3fb/8c7e/1741214338.jpg',
    description: `Высота Эльбруса 5874 метра над уровнем моря.`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "ПРАВДА",
        status: true,
    },
        {
        id: 2,
        title: "ЛОЖЬ",
        status: false,
        },
                  
]

},
{
    id: 49,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/b8c0/7ba3/6b79/f468/2c95/50e8/a86a/aedd/2081480954.jpg',
    description: `Гималаи - самая протяженная горная система Земли?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "ПРАВДА",
        status: true,
    },
        {
        id: 2,
        title: "ЛОЖЬ",
        status: false,
        },           
]

},
{
    id: 50,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/bc66/e6fc/c03c/b62b/1ea1/13df/53b2/e1b1/2609259905.jpg',
    description: `В какой стране находится вулкан Килиманджаро?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "В КАМБОДЖЕ",
        status: true,
    },
        {
        id: 2,
        title: "БАНГЛАДЕШЕ",
        status: false,
        },
        {
            id: 3,
            title: "В ТАНЗАНИИ",
            status: false,
        },
        {
            id: 4,
            title: "НА МАДАГАСКАРЕ",
            status: false,
        }           
]

},
{
    id: 51,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/7265/9079/2bc7/35b6/caef/fea0/d1f5/2125/1557732763.jpg',
    description: `Какое место по численности населения занимает Россия?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "ТРЕТЬЕ",
        status: true,
    },
        {
        id: 2,
        title: "ПЯТОЕ",
        status: false,
        },
        {
            id: 3,
            title: "ДЕСЯТОЕ",
            status: false,
        },
        {
            id: 4,
            title: "ДЕВЯТОЕ",
            status: false,
        }           
]

},
{
    id: 52,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/7265/9079/2bc7/35b6/caef/fea0/d1f5/2125/1557732763.jpg',
    description: `Какая страна не совпадает со столицей?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "ВЕНГРИЯ-БЕЙРУТ",
        status: true,
    },
        {
        id: 2,
        title: "АВСТРИЯ-ВЕНА",
        status: false,
        },
        {
            id: 3,
            title: "АНГОЛА-ЛУАНДА",
            status: false,
        },
        {
            id: 4,
            title: "БРАЗИЛИА-БРАЗИЛИЯ",
            status: false,
        }           
]

},
{
    id: 53,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/7ce2/720e/0f98/bd5e/cadc/372d/5dde/6a49/2211302507.jpg',
    description: `Какая страна не граничит с Россией?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "США",
        status: true,
    },
        {
        id: 2,
        title: "ХОРВАТИЯ",
        status: false,
        },
        {
            id: 3,
            title: "ЛАТВИЯ",
            status: false,
        },
        {
            id: 4,
            title: "ЭСТОНИЯ",
            status: false,
        }           
]

},
{
    id: 53,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/7ce2/720e/0f98/bd5e/cadc/372d/5dde/6a49/2211302507.jpg',
    description: `Какая страна не граничит с Россией?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "США",
        status: true,
    },
        {
        id: 2,
        title: "ХОРВАТИЯ",
        status: false,
        },
        {
            id: 3,
            title: "ЛАТВИЯ",
            status: false,
        },
        {
            id: 4,
            title: "ЭСТОНИЯ",
            status: false,
        }           
]

},
{
    id: 54,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/1db0/e3d5/b976/a71b/3b29/4a29/6447/7eea/3355231329.jpg',
    description: `Чем является Арктика?`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "ОБЛАСТЬ ЗЕМЛИ ГДЕ ОБИТАЮТ МЕДВЕДИ И ПИНГВИНЫ",
        status: true,
    },
        {
        id: 2,
        title: "ЮЖНАЯ ПРИПОЛЯРНАЯ ОБЛАСТЬ ЗЕМЛИ",
        status: false,
        },
        {
            id: 3,
            title: "ХОЛОДНЫЙ ФИЗИКО-ГЕОГРАФИЧЕСКИЙ РАЙОН ЗЕМЛИ ",
            status: false,
        },
        {
            id: 4,
            title: "МАТЕРИК ЗЕМЛИ",
            status: false,
        }           
]

},
{
    id: 55,
    title: `Чем отличается Антарктида от Арктики? Какое самое крупное озеро на нашей планете? 
    Знаешь ли ты ответы на эти вопросы? Самое время проверить свои знания!`,
    photo: 'https://konstruktortestov.ru/files/df30/c643/c284/86ae/3d5a/4695/aa4d/b853/1392648570.jpg',
    description: `Кингстон - это столица...`,
    test_id: 6,
    answers: 
[
    {
        id: 1,
        title: "ШРИ-ЛАНКИ",
        status: true,
    },
        {
        id: 2,
        title: "ЯМАЙКИ",
        status: false,
        },
        {
            id: 3,
            title: "ЭКВАДОРА",
            status: false,
        },
                   
]

},
{
    id: 56,
    title: `Небольшой тест, который покажет, насколько вы внимательны :)`,
    photo: 'https://konstruktortestov.ru/files/bc07/2636/6477/37fd/7c9e/bef7/df0a/c8a5/203652960.jpg',
    description: `Сколько отличий на картинке?`,
    test_id: 7,
    answers: 
[
    {
        id: 1,
        title: "5",
        status: true,
    },
        {
        id: 2,
        title: "ОНИ ОДИНАКОВЫЕ",
        status: false,
        },
        {
            id: 3,
            title: "8",
            status: false,
        },
        {
            id: 4,
            title: "10",
            status: false,
        },
                   
]

},
{
    id: 57,
    title: `Небольшой тест, который покажет, насколько вы внимательны :)`,
    photo: 'https://konstruktortestov.ru/files/63b8/70a9/2805/e5ad/fc3e/bb2e/2a49/d9db/2591010705.jpg',
    description: `Сколько отличий на картинке?`,
    test_id: 7,
    answers: 
[
    {
        id: 1,
        title: "23",
        status: true,
    },
        {
        id: 2,
        title: "15",
        status: false,
        },
        {
            id: 3,
            title: "5",
            status: false,
        },
        {
            id: 4,
            title: "10",
            status: false,
        },
                   
]

},
{
    id: 58,
    title: `Небольшой тест, который покажет, насколько вы внимательны :)`,
    photo: 'https://konstruktortestov.ru/files/4717/9fb1/088e/292f/0383/d4a5/b38e/15a4/1296643150.jpg',
    description: `Найдите отличия`,
    test_id: 7,
    answers: 
[
    {
        id: 1,
        title: "5",
        status: true,
    },
        {
        id: 2,
        title: "ТОЧНО 5",
        status: false,
        },
        {
            id: 3,
            title: "Я НЕ ВИЖУ ОТЛИЧИЙ",
            status: false,
        },
        
                   
]

},
{
    id: 59,
    title: `Небольшой тест, который покажет, насколько вы внимательны :)`,
    photo: 'https://konstruktortestov.ru/files/bf2c/7a1b/d5f4/f863/17e8/bf71/8297/3f4d/2551168740.jpg',
    description: `Сколько отличий?`,
    test_id: 7,
    answers: 
[
    {
        id: 1,
        title: "5",
        status: true,
    },
        {
        id: 2,
        title: "1",
        status: false,
        },
        {
            id: 3,
            title: "ИХ НЕТ",
            status: false,
        },
        
                   
]

},
{
    id: 60,
    title: `Небольшой тест, который покажет, насколько вы внимательны :)`,
    photo: 'https://konstruktortestov.ru/files/a240/c1da/1015/5318/1b39/4eb6/871d/743b/4291538908.jpg',
    description: `Сколько отличий?`,
    test_id: 7,
    answers: 
[
    {
        id: 1,
        title: "5",
        status: true,
    },
        {
        id: 2,
        title: "ОНИ ОДИНАКОВЫ",
        status: false,
        },
        {
            id: 3,
            title: "6",
            status: false,
        },
        
                   
]

},
{
    id: 61,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/6b80/8441/10aa/316c/b290/2348/6e58/eb56/3071895502.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "ИВАН БЕЛКИН",
        status: false,
    },
        {
        id: 2,
        title: "НИКОЛАЙ ГОГОЛЬ",
        status: false,
        },
        {
            id: 3,
            title: "АЛЕКСАНДР ПУШКИН",
            status: true,
        },
       
                   
]

},
{
    id: 62,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/6f8b/d8bf/f639/8df3/cc3c/7a3b/6266/fede/1590704882.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "А.БЛОК",
        status: false,
    },
        {
        id: 2,
        title: "О.МАНДЕЛЬШТАМ",
        status: false,
        },
        {
            id: 3,
            title: "Б.ПАСТЕРНАК",
            status: true,
        },
       
                   
]

},
{
    id: 63,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/bd65/14d6/1712/bf30/090f/a26a/92c0/ac18/78618272.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "ЭРИХ МАРИЯ РЕМАРК",
        status: false,
    },
        {
        id: 2,
        title: "Ф.С.ФИЦДЖЕРАЛЬД",
        status: true,
        },
        {
            id: 3,
            title: "Э.ХЕМИНГУЭЙ",
            status: false,
        },
       
                   
]

},
{
    id: 64,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/7542/3aa0/49da/e47d/c465/37af/e47b/056b/2656563979.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "И.БУНИН",
        status: false,
    },
        {
        id: 2,
        title: "В.НАБОКОВ",
        status: true,
        },
        {
            id: 3,
            title: "А.СОЛЖЕНИЦЫН",
            status: false,
        },
       
                   
]

},
{
    id: 65,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/c7e2/c0f6/4dc3/08a7/859a/5a28/1373/5534/695817157.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "КУРТ ВОННЕГУТ",
        status: false,
    },
        {
        id: 2,
        title: "ХАРПЕР ЛИ",
        status: true,
        },
        {
            id: 3,
            title: "МАРГАРЕТ МИТЧЕЛ",
            status: false,
        },
       
                   
]

},
{
    id: 66,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/9e80/2d86/e98e/edad/133c/8cbc/ba6f/a80f/3422085854.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "ГАБРИЕЛЬ ГАРСИА МАРКЕС",
        status: false,
    },
        {
        id: 2,
        title: "ДЖЕРОМ СЕЛИНДЖЕР",
        status: true,
        },
        {
            id: 3,
            title: "ДЖЕК КЭРУАК",
            status: false,
        },
       
                   
]

},
{
    id: 67,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/80fa/0d85/c267/286b/f066/7e6a/9c15/236d/2364478861.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "ЮРИЙ ОЛЕША",
        status: false,
    },
        {
        id: 2,
        title: "МИХАИЛ БУЛГАКОВ",
        status: true,
        },
        {
            id: 3,
            title: "ВИКЕНТИЙ ВЕРЕСАЕВ",
            status: false,
        },
       
                   
]

},
{
    id: 68,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/baae/585d/81f2/9460/0414/ce87/df6b/b089/1002998160.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "Ф.ТЮТЧЕВ",
        status: false,
    },
        {
        id: 2,
        title: "А. КУПРИН",
        status: false,
        },
        {
            id: 3,
            title: "И.БУНИН",
            status: true,
        },
       
                   
]

},
{
    id: 69,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/4aa1/f7ea/1fa4/c8df/57dc/9547/1a8b/4f39/264357549.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "ФРАНЦ КАФКА",
        status: false,
    },
        {
        id: 2,
        title: "ДЖОРДЖ ОРУЭЛЛ",
        status: true,
        },
        {
            id: 3,
            title: "ОЛДОС ХАКСЛИ",
            status: false,
        },
       
                   
]

},
{
    id: 70,
    title: `Сможете ли вы определить автора книги по её обложке?`,
    photo: 'https://konstruktortestov.ru/files/1e65/6f6f/54c6/bd40/c64e/91e0/792b/dfea/703125320.jpg',
    description: `Кто автор этой книги?`,
    test_id: 8,
    answers: 
[
    {
        id: 1,
        title: "А.ДЮМА",
        status: true,
    },
        {
        id: 2,
        title: "О.БАЛЬЗАК",
        status: false,
        },
        {
            id: 3,
            title: "Ж.ВЕРН",
            status: false,
        },
       
                   
]

},
{
    id: 71,
    title: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
    photo: 'https://konstruktortestov.ru/files/a1a1/bafd/0175/5419/8601/150c/90cf/f5cf/363200327.jpg',
    description: `Кадр из какой комедии перед вами, узнали?`,
    test_id: 9,
    answers: 
[
    {
        id: 1,
        title: "Три плюс два",
        status: true,
    },
        {
        id: 2,
        title: "Бриллиантовая рука",
        status: false,
        },
        {
            id: 3,
            title: "Будьте моим мужем",
            status: false,
        },
       
                   
]

},
{
    id: 72,
    title: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
    photo: 'https://konstruktortestov.ru/files/e232/d843/cec2/ee5b/a6d1/5d19/a779/e424/330724626.jpg',
    description: `Присмотритесь внимательно, здесь легко ошибиться. Эта героиня Орловой из какой киноленты?`,
    test_id: 9,
    answers: 
[
    {
        id: 1,
        title: "Цирк",
        status: true,
    },
        {
        id: 2,
        title: "Светлый путь",
        status: false,
        },
        {
            id: 3,
            title: "Весна",
            status: false,
        },
       
                   
]

},
{
    id: 73,
    title: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
    photo: 'https://konstruktortestov.ru/files/6c7d/d283/02e3/acde/89d0/da65/477c/be8f/537066071.jpg',
    description: `Из какой комедии мы взяли этот стоп-кадр, догадались?`,
    test_id: 9,
    answers: 
[
    {
        id: 1,
        title: "Кавказкая пленница или новые приключения Шурика",
        status: true,
    },
        {
        id: 2,
        title: "Операция Ы и другие приключения Шурика",
        status: false,
        },
        {
            id: 3,
            title: "Карьера Димы Горина",
            status: false,
        },
       
                   
]

},
{
    id: 74,
    title: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
    photo: 'https://konstruktortestov.ru/files/af51/b32b/9081/f28a/8609/3ef1/5ff0/2259/3811444689.jpg',
    description: `А эту комедийную картину готовы назвать, взглянув на предложенный нами кадр?`,
    test_id: 9,
    answers: 
[
    {
        id: 1,
        title: "Покровские ворота",
        status: true,
    },
        {
        id: 2,
        title: "Старики разбойники",
        status: false,
        },
        {
            id: 3,
            title: "Берегись автомобиля",
            status: false,
        },
       
                   
]

},
{
    id: 75,
    title: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
    photo: 'https://konstruktortestov.ru/files/e4eb/3806/b059/0268/9fbf/dadf/45a2/2d9e/1853183126.jpg',
    description: `Кто-то узнает фильм сразу, а кто-то наоборот растеряется и не угадает по нему фильм. А вы узнали?`,
    test_id: 9,
    answers: 
[
    {
        id: 1,
        title: "Джентльмены удачи",
        status: true,
    },
        {
        id: 2,
        title: "Хорошо сидим",
        status: false,
        },
        {
            id: 3,
            title: "Афоня",
            status: false,
        },
       
                   
]

},
{
    id: 76,
    title: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
    photo: 'https://konstruktortestov.ru/files/2fc1/2138/a50d/89d9/a820/ad14/b11e/9a67/3461686020.jpg',
    description: `Что скажете? Этот кадр подсказал вам название фильма, откуда мы его взяли?`,
    test_id: 9,
    answers: 
[
    {
        id: 1,
        title: "Солдат Иван Бровкин",
        status: true,
    },
        {
        id: 2,
        title: "Полосатый рейс",
        status: false,
        },
        {
            id: 3,
            title: "Укротительница тигров",
            status: false,
        },
       
                   
]

},
{
    id: 77,
    title: `Сможете угадать популярную советскую комедию по предложенному нами кадру?`,
    photo: 'https://konstruktortestov.ru/files/bdb1/2a4f/3563/402d/f85e/888d/2cc2/fba5/3485391326.jpg',
    description: `И заключительный кадр нашей викторины. Из какой он кинокомедии, узнали?`,
    test_id: 9,
    answers: 
[
    {
        id: 1,
        title: "Ирония судьбы или с Легким паром!",
        status: true,
    },
        {
        id: 2,
        title: "Старый Новый Год",
        status: false,
        },
        {
            id: 3,
            title: "Иван Васильевич меняет профессию",
            status: false,
        },
       
                   
]

},
{
    id: 78,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://two-sonnik.ru/wp-content/uploads/2015/07/6407.jpg',
    description: `Сколько звезд на погонах армейского старшего лейтенанта?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "3",
        status: true,
    },
        {
        id: 2,
        title: "5",
        status: false,
        },
        {
            id: 3,
            title: "4",
            status: false,
        },
        {
            id: 4,
            title: "1",
            status: false,
        },
       
                   
]

},
{
    id: 79,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://cdn.fishki.net/upload/post/2018/05/21/2604393/c0494cc45478e90d09dc45c267dffc6c.jpg',
    description: `Где военнослужащий носит эполеты?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "На груди",
        status: false,
    },
        {
        id: 2,
        title: "На фуражке",
        status: false,
        },
        {
            id: 3,
            title: "На плечах",
            status: true,
        },
        {
            id: 4,
            title: "На штанах",
            status: false,
        },
       
                   
]

},
{
    id: 80,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-image-d569df66-c1e9-40c7-803f-930d6d957257&mb=webpulse',
    description: `Что нужно принять, чтобы, будучи новобранцем, вступить в ряды армии?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Клятву верности",
        status: false,
    },
        {
        id: 2,
        title: "Клятву Гиппократа",
        status: false,
        },
        {
            id: 3,
            title: "Военную присягу",
            status: true,
        },
        {
            id: 4,
            title: "положение упор лежа",
            status: false,
        },
       
                   
]

},
{
    id: 81,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://qph.fs.quoracdn.net/main-qimg-405173774c062e7b3d9d92a1ecd7c24b-lq',
    description: `Как называется часть боевого патрона, которая поражает цель?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Капсюль",
        status: false,
    },
        {
        id: 2,
        title: "Пуля",
        status: true,
        },
        {
            id: 3,
            title: "Гильза",
            status: false,
        },
        {
            id: 4,
            title: "Порох",
            status: false,
        },
       
                   
]

},
{
    id: 82,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://cdn.trinixy.ru/pics6/20191117/184262_3_trinixy_ru.jpg',
    description: `Чем артиллерист должен зарядить пушку, если со стороны врага начнется массированное наступление пехоты?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Гвоздями",
        status: false,
    },
        {
        id: 2,
        title: "Картечью",
        status: true,
        },
        {
            id: 3,
            title: "Ракетами",
            status: false,
        },
        {
            id: 4,
            title: "Ядрами",
            status: false,
        },
       
                   
]

},
{
    id: 83,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://pickimage.ru/wp-content/uploads/images/detskie/airtransport/vosdushnitransport9.jpg',
    description: `Какой тип воздушной техники разработан для того, чтобы ликвидировать такую же воздушную технику?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Беспилотный летательный аппарат.",
        status: false,
    },
        {
        id: 2,
        title: "Штурмовик.",
        status: false,
        },
        {
            id: 3,
            title: "Вертолет.",
            status: false,
        },
        {
            id: 4,
            title: "Истребитель",
            status: true,
        },
       
                   
]

},
{
    id: 84,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://chto-proishodit.ru/uploads/posts/poster/1632743831_gvardeiskii-raketnyi-kreiser-moskva-proekt-1164-shifr-atlant.jpg',
    description: `Выберите правильное название для большого объединения военных судов разных типов?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Авангард.",
        status: false,
    },
        {
        id: 2,
        title: "Адмиралтейство.",
        status: false,
        },
        {
            id: 3,
            title: "Эспаньолка.",
            status: false,
        },
        {
            id: 4,
            title: "Эскадра.",
            status: true,
        },
       
                   
]

},
{
    id: 85,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://topwar.ru/uploads/posts/2015-08/1438669751_3.jpg',
    description: `Что из нижеперечисленного военнослужащий может получить без очереди не прикладывая каких-либо усилий?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Наряд.",
        status: true,
    },
        {
        id: 2,
        title: "Увольнение.",
        status: false,
        },
        {
            id: 3,
            title: "Автомобиль.",
            status: false,
        },
        {
            id: 4,
            title: "Оружие.",
            status: false,
        },
       
                   
]

},
{
    id: 86,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://grodno24.com/assets/images/2021/03/pogony-generala.jpg',
    description: `Полковник, будучи представленным очередному званию получит погоны…`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Генерала.",
        status: false,
    },
        {
        id: 2,
        title: "Генерал-майора.",
        status: true,
        },
        {
            id: 3,
            title: "Генерал-полковника.",
            status: false,
        },
        {
            id: 4,
            title: "Генерал-сержанта.",
            status: false,
        },
       
                   
]

},
{
    id: 87,
    title: `совершеннолетних мужчин в обязательном порядке обучают военному делу на срочной службе в армии. 
    Насколько хорошо с этим ремеслом знакомы вы? Проверьте, пройдя этот военный тест!`,
    photo: 'https://render.fineartamerica.com/images/rendered/search/flat/puzzle/images/artworkimages/medium/3/camouflage-us-universal-camouflage-pattern-tom-hill.jpg?brightness=261&v=6',
    description: `Как называется элемент обмундирования из специального оборудования 
    или его окраски для пехоты и военной техники?`,
    test_id: 10,
    answers: 
[
    {
        id: 1,
        title: "Камуфляж",
        status: true,
    },
        {
        id: 2,
        title: "Тан.",
        status: false,
        },
        {
            id: 3,
            title: "Хаки",
            status: false,
        },
        {
            id: 4,
            title: "Грим.",
            status: false,
        },
       
                   
]

},
{
    id: 88,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/f897/122b/9f69/af51/8c0d/7f99/8dff/8978/1433685167.jpg',
    description: `Что вы делаете когда бланшируете овощи?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Ошпариваете кипятком, затем погружаете в холодную воду",
        status: true,
    },
        {
        id: 2,
        title: "Замачиваете в ледяной воде перед погружением в кипяток",
        status: false,
        },
        {
            id: 3,
            title: "Храните в ледяной воде в холодильнике",
            status: false,
        },
        
       
                   
]

},
{
    id: 89,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/f4c1/f64b/e599/52d1/f981/1de4/0e0e/7db4/2881613260.jpg',
    description: `Что такое фламбирование?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Использование кухонной горелки, чтобы растопить и поджарить сахар на десерте",
        status: false,
    },
        {
        id: 2,
        title: "Приготовление пищи на очень горячем дровяном огне",
        status: false,
        },
        {
            id: 3,
            title: "Разбрызгивание алкогольных напитков на продукты и поджигание (спирт выгорает, вкус остается).",
            status: true,
        },
        
       
                   
]

},
{
    id: 90,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/96f1/3b90/5c16/7b7f/4def/af29/f272/073d/1322027943.jpg',
    description: `Как называется этот вид пасты?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Ригатони",
        status: true,
    },
        {
        id: 2,
        title: "Фарфалле",
        status: false,
        },
        {
            id: 3,
            title: "Пенне",
            status: false,
        },
        
       
                   
]

},
{
    id: 91,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/6a8b/d385/f638/b436/5326/da91/5dc5/5194/2695310706.jpg',
    description: `Из какой части туши готовят филе-миньон?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Корейка",
        status: true,
    },
        {
        id: 2,
        title: "Окорок",
        status: false,
        },
        {
            id: 3,
            title: "Грудина",
            status: false,
        },
        
       
                   
]

},
{
    id: 92,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/33b3/0e8d/d019/eb82/d4d7/b52d/99fa/ebc1/3546659485.jpg',
    description: `Как называется холодный суп из перетертых сырых овощей?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Гаспачо",
        status: true,
    },
        {
        id: 2,
        title: "Окрошка",
        status: false,
        },
        {
            id: 3,
            title: "Менудо",
            status: false,
        },
        
       
                   
]

},
{
    id: 93,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/a34f/c29f/3a75/6a76/911c/666a/b9d5/691e/777052061.jpg',
    description: `Если в названии рецепта упоминается рыба, мясо или овощи в папильоте, что это означает?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Папильот - мексиканский соус с перцем чипотле, который подходит почти ко всему",
        status: false,
    },
        {
        id: 2,
        title: "Блюдо обычно готовится в духовке с использованием сложенного мешочка, обычно из пергаментной бумаги",
        status: true,
        },
        {
            id: 3,
            title: "Папильот - французское слово, означающее запеканку, причудливый способ сказать запеченное блюдо",
            status: false,
        },
        
       
                   
]

},
{
    id: 94,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/bb96/2bb9/169d/e1b8/ddc4/3ebf/8dfb/bcce/1494760945.jpg',
    description: `что надо делать, чтобы фарш не прилипал к рукам при лепке?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Добавлять в фарш больше жира",
        status: false,
    },
        {
        id: 2,
        title: "Лепить из холодного фарша",
        status: false,
        },
        {
            id: 3,
            title: "Смачивать руки водой",
            status: true,
        },
        
       
                   
]

},
{
    id: 95,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/2717/495a/ce70/a58d/7576/78bf/2063/182d/4182008231.jpg',
    description: `Что добавляют в рис, чтобы он получился белоснежным?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Сахар",
        status: false,
    },
        {
        id: 2,
        title: "Соду",
        status: false,
        },
        {
            id: 3,
            title: "Уксус",
            status: true,
        },   
                   
]

},
{
    id: 96,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/505f/7e3d/7984/9761/07c6/3374/1bdc/d742/156744147.jpg',
    description: `Что следует сделать с картофелем, чтобы при жарке он не развалился и приобрел румяную корочку?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Подержать в воде",
        status: false,
    },
        {
        id: 2,
        title: "Посолить в самом начале жарки",
        status: false,
        },
        {
            id: 3,
            title: "Просушить на салфетке",
            status: true,
        },   
                   
]

},
{
    id: 97,
    title: `Вы готовите не хуже шеф-повара, если наберете 10/10`,
    photo: 'https://konstruktortestov.ru/files/ea7d/035a/765a/f062/1dc5/ba56/4aaa/1ba1/4031308851.jpg',
    description: `Любите шарлотку? А что следует сделать, чтобы яблоки не опустились на дно формы?`,
    test_id: 11,
    answers: 
[
    {
        id: 1,
        title: "Обвалять в соде",
        status: false,
    },
        {
        id: 2,
        title: "Обвалять в муке",
        status: true,
        },
        {
            id: 3,
            title: "Смочить их водой",
            status: false,
        },   
                   
]

},

]

export const categories=[
    {
        description: "Тесты"
    },
    {
        id:1,
        title:"На ПДД"
    },
    {
        id:2,
        title:"На IQ"
    },
    {
        id:3,
        title:"Кулинарный"
    },
    {
        id:4,
        title:"Разное"
    }, 
    {
        id:5,
        title:"На внимание"
    },
  
    {
        id:6,
        title:"Мои тесты"
    },
    
]
export const users = [
    {
        id:1,
        login:"mirba",
        password:"1294",
        fullname:"БАЙДЕН БАРАК ОБАМОВИЧ",
        avatar:"https://avatars.mds.yandex.net/i?id=abdd81f4c9eff93d9823a09cf2666868-5294137-images-thumbs&n=13",
        date:"1994.01.12",
        sex:"Мужской",
        contact:"+996701139413",
        mail:"mirlan4ikbek@gmail.com"
    },
    {
        id:2,
        login:"mirlan",
        password:"1994",
        fullname:"ПУТИН ВЛАДИМИР ВЛАДИМИРОВИЧ",
        avatar:"https://avatars.mds.yandex.net/i?id=4dd5ca773196f86764e40c59cbc190096f8d5f94-6887327-images-thumbs&n=13",
        date:"1994.01.12",
        sex:"Мужской",
        contact:"+996701139413",
        mail:"mirlan4ikbek@gmail.com"
    },
    {
        id:3,
        login:"mister",
        fullname:"Асанов Усон Эснович",
        password:"sss",
        avatar:"https://avatars.mds.yandex.net/i?id=8f66e6e464ab2ebe3eba1427cf0f1e33c629900d-7755895-images-thumbs&n=13",
        date:"1994.01.12",
        sex:"Мужской",
        contact:"+996701139413",
        mail:"mirlan4ikbek@gmail.com"

    },
]

