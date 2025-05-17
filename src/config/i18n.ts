import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          welcome:
            "Senior product designer helping company communicate with their audience in a meaningful way",
          welcomeMobile:
            "Senior product designer helping company communicate with their audience in a meaningful way",
          projects: "Projects",
          about: "About",
          contact: "Contact",
          phone: "Phone",
          aboutSectionHello: "Hello",
          aboutSectionHelloContent:
            "My name is Andrei Mordovski.<br />I am a senior product designer<br />with over 12 years of experience<br />in digital product development.<br />I went from a freelancer to<br />the lead of the design team.<br />I have collaborated with<br />companies such as Leroy Merlin,<br />Sberbank, Yakitoria and other ",
          aboutSectionExperience: "Experience",
          aboutSectionExperienceContent:
            "I have extensive experience<br />in creating design systems,<br />fintech, e-commerce products,<br />BI, b2b, Saas and others",
          infoSectionTitle: "Focal point",
          infoSectionContent:
            "In my work, I focus on the goals and objectives of the business, the target audience, research and custdev, resource and technical constraints",
          aboutSectionNumbers: "In numbers",
          aboutSectionNumbersImplemented: "implemented projects",
          aboutSectionNumbersCommercial: "сommercial experience",
          aboutSectionNumbersLeading: "leading designers",
          goToProjects: "Go to projects",
          contactMe: "Contact me",
          email: "E-mail",
          telegram: "Write to telegram",
          tg: "Telegram",
          cases: {
            leroyMerlinSearch: {
              title: "Leroy Merlin. Search and catalog",
              titleMobile: "Leroy Merlin.<br /> Search and catalog",
              metaTitle: "About the company",
              metaDescription:
                "Leroy Merlin is an international retail chain specializing  in products for construction, renovation, and home improvement. The company offers a wide range of goods for both the home and garden",
              metaSectionTitle: "What I Did",
              metaSectionDescription:
                "Before starting the redesign, I conducted a detailed analysis of user scenarios, identified key pain points customers encounter, and gathered feedback through interviews. This allowed us to gain a deeper understanding of the needs of different customer groups — from private buyers who prioritize convenience and accessibility, to professionals who require detailed product specifications and flexible search options.<br/br/>Based on this research, we developed a redesign strategy aimed at improving search usability, optimizing the catalog structure, and introducing personalization tools.",
              titleFeature1: "Objectives",
              descFeature1:
                "The main goal of the redesign was to simplify the process of finding and selecting products. This is especially important given the extensive product assortment, where users need to quickly locate relevant items and choose the best purchasing options.<br/br/>For private customers, the key priorities were ease of selection, the ability to filter by in-store availability, and delivery speed. Professional buyers, on the other hand, needed advanced search capabilities — including filtering by technical specifications and compatibility with other products. It was essential to create an interface that could adapt to various use cases, ensuring a smooth and intuitive user journey.",
              titleFeature2: "Search",
              descFeature2:
                "One of the top priorities was improving the search function, as it is a key entry point for many users. I redesigned the search mechanics to make product selection faster and more convenient. Now, the system not only suggests products in text format, but also presents them as visual cards — allowing users to immediately recognize the items they need.<br/br/>A quick access feature was added for search history and popular products, enabling users to easily return to previously viewed items or explore trending options. The filtering system was also enhanced to dynamically adjust based on the selected category, offering relevant filter options. For example, construction materials can now be filtered by surface type and usage conditions, while tools can be filtered by power and functionality.",
              titleFeature3: "",
              descFeature3:
                "Additionally, I reworked the logic behind search results display, allowing the product list to dynamically adapt to user preferences. This improved navigation and reduced the time customers spend searching for the right products.",
              titleFeature4: "Metrics",
              descFeature4:
                "Following the search improvements, users were able to find relevant products more quickly, leading to increased engagement. The time spent on search decreased, while the share of successful queries went up. Fewer users exited the site immediately after searching, indicating that the results were more relevant and helpful.<br/br/>The conversion rate from search to product detail views grew significantly, as users clicked more often on the suggested items. Additionally, the average number of products viewed after a search increased —  pointing to greater trust in the search results and smoother navigation.",
              scoreHeadFeature4: "",
              score1Feature4: "increased search conversion to cards",
              score2Feature4: "increased average",
              score2Feature4_2: "order value",
              score3Feature4: "lower bounce rate",
              score4Feature4: "growth in MAU",
              titleFeature5: "Catalog",
              descFeature5:
                "The catalog redesign focused on creating a more intuitive and user-friendly interface that works equally well for one-time buyers and professional customers.<br/br/>I implemented a filtering mechanism that enables usersto immediately select products based on available fulfillment options — particularly relevant for those choosing between in-store pickup and home delivery.<br/br/>For professional clients, the catalog has become even more versatile. It now allows for quick product searches based on technical specifications, easy compatibility checks with other materials, and streamlined solution-building for complex projects. The entire category structure has been redesigned to help users navigate intuitively, move seamlessly between sections, and find the right products without unnecessary steps.",
              titleFeature6: "",
              descFeature6:
                "An important change was the implementation of individual filters for different types of products. Now, for construction materials, you can choose parameters related to their durability and intended use, while for finishing materials, compatibility with specific surfaces can be considered.",
              titleFeature7: "Metrics",
              descFeature7:
                "The updated catalog structure has had a positive impact on the user experience. Bounce rates on category pages have decreased, indicating clearer and more intuitive navigation. Conversion rates to product detail views have increased, as users are now able to find relevant items more quickly.<br/br/>Although time spent on catalog pages has grown, the average number of clicks needed to reach the desired product has dropped—signaling more efficient filtering tools. The share of users who proceed to purchase after browsing the catalog has also risen, confirming that the new interface is more user-friendly and accessible.",
              scoreHeadFeature7: "",
              score1Feature7: "page depth",
              score1Feature7_2: "has increased",
              score2Feature7: "increased conversion",
              score2Feature7_2: "per card",
              score3Feature7: "fewer bounces",
              score4Feature7: "growth in MAU",
            },
            leroyMerlinCard: {
              // title: 'Leroy Merlin. Product Page and Checkout'
            },
          },
          commingSoon: "Project name",
        },
      },
      ru: {
        translation: {
          cases: {
            leroyMerlinSearch: {
              title: "Леруа Мерлен. Поиск и каталог",
              titleMobile: "Леруа Мерлен.<br/> Поиск и каталог",
              metaTitle: "О компании",
              metaDescription:
                "Леруа Мерлен - международная розничная сеть, специализирующаяся на продаже товаров для строительства, ремонта и обустройства дома. Компания предлагает широкий ассортимент продукции для дома и сада.",
              metaSectionTitle: "Что делал",
              metaSectionDescription:
                "Перед началом работы я провел детальный анализ пользовательских сценариев, изучили ключевые барьеры, с которыми сталкиваются покупатели, и собрал обратную связь через интервью. Это позволило глубже понять потребности различных групп клиентов — от частных покупателей, которые делают выбор на основе удобства и доступности, до профессионалов, для которых важны детализированные характеристики товаров и гибкость поиска.<br/br/> На основе полученных данных была разработана стратегия редизайна, направленная на повышение удобства поиска, оптимизацию структуры каталога и внедрение инструментов персонализации.",
              titleFeature1: "Задачи",
              descFeature1:
                "Основной целью редизайна стало упрощение процесса поиска и выбора товаров. Это особенно важно для большого ассортимента, где пользователям необходимо быстро находить нужные позиции и подбирать оптимальные условия покупки.<br/br/>Для частных клиентов ключевыми аспектами стали удобство выбора, возможность фильтрации по наличию в магазинах и скорости доставки. Профессиональным покупателям требовались расширенные параметры поиска, включая сортировку по техническим характеристикам и совместимости с другими товарами. Важно было создать интерфейс, который адаптируется под разные сценарии использования, обеспечивая удобный и логичный процесс взаимодействия.",
              titleFeature2: "Поиск",
              descFeature2:
                "Одним из приоритетных направлений работы стала оптимизация поиска, так как он является важной точкой входа для пользователей. Я переработал его механику, чтобы сделать процесс выбора более быстрым и удобным. Теперь система автоматически подсказывает товары не только в текстовом формате, но и в виде визуальных карточек, что позволяет пользователям сразу видеть нужные позиции.<br/br/>Была добавлена возможность быстрого доступа к истории запросов и популярным товарам, благодаря чему пользователи могут легко возвращаться к ранее найденным позициям или ориентироваться на самые востребованные предложения. Улучшенная система фильтрации теперь подстраивается под конкретную категорию, предлагая релевантные параметры выбора. Например, для строительных материалов стали доступны фильтры по типу поверхности и условиям эксплуатации, а для инструментов по мощности и функциональности.",
              titleFeature3: "",
              descFeature3:
                "Дополнительно была пересмотрена логика отображения результатов, что позволило динамически адаптировать список товаров с учетом предпочтений пользователей. Это улучшило навигацию и сократило время, которое покупатели тратят на поиск нужных позиций.",
              titleFeature4: "Метрики",
              descFeature4:
                "После изменений в поиске пользователи стали быстрее находить нужные товары, что отразилось на показателях вовлеченности. Время, затраченное  на поиск, уменьшилось, а доля успешных запросов увеличилась. Количество пользователей, покидающих сайт сразу после попытки поиска, снизилось, что говорит о том, что система стала лучше подбирать релевантные товары.<br/br/>Конверсия из поиска в просмотр карточек товаров значительно выросла, так как пользователи стали чаще кликать на предложенные результаты. Дополнительно увеличилось среднее число товаров, просматриваемых после поиска, что говорит о большем доверии к выдаче удобстве навигации по результатам.",
              scoreHeadFeature4: "",
              score1Feature4: "повысилась конверсия поиска в карточки",
              score2Feature4: "увеличился",
              score2Feature4_2: "средний чек",
              score3Feature4: "уменьшились отказы",
              score4Feature4: "увеличился MAU",
              titleFeature5: "Каталог",
              descFeature5:
                "Работа над каталогом была направлена на создание более интуитивного и удобного интерфейса, который одинаково хорошо подходит как для разовых покупок, так и для профессиональных закупок.<br/br/>Я внедрил механизм фильтрации, который позволяет пользователям сразу отбирать товары с учетом доступных способов получения, что особенно актуально для тех, кто выбирает между самовывозом и доставкой.<br/br/>Для профессиональных клиентов каталог стал еще более гибким. Теперь можно быстро находить товары по техническим характеристикам, оценивать их совместимость с другими материалами и подбирать решения для комплексных проектов. Вся структура категорий была переработана таким образом, чтобы пользователи могли легко ориентироваться, переходить между разделами и находить нужные товары без лишних шагов.",
              titleFeature6: "",
              descFeature6:
                "Важным изменением стало внедрение индивидуальных фильтров для разных типов товаров. Теперь для строительных материалов можно выбрать параметры, связанные с их устойчивостью и назначением, а для отделочных покрытий учитывать совместимость с конкретными поверхностями. ",
              titleFeature7: "Метрики",
              descFeature7:
                "Обновление структуры каталога положительно повлияло на пользовательский опыт. Количество отказов на страницах категорий сократилось, что говорит о более понятной навигации. Конверсия в просмотры карточек товаров увеличилась, так как пользователи стали быстрее находить нужные товары. Время, проведенное на страницах каталога, возросло, но при этом среднее число кликов до нужного товара сократилось, что указывает на более эффективную работу фильтров. Доля пользователей, совершающих покупки после просмотра каталога, также выросла, подтверждая, что обновленный интерфейс стал удобнее и понятнее.",
              scoreHeadFeature7: "",
              score1Feature7: "увеличилась глубина",
              score1Feature7_2: "просмотра",
              score2Feature7: "увеличилась конверсия",
              score2Feature7_2: "в карточку",
              score3Feature7: "уменьшились отказы",
              score4Feature7: "увеличился MAU",
            },
            leroyMerlinCard: {
              title: "Леруа Мерлен. Карточка товара и чекаут",
              titleMobile: "Леруа Мерлен.<br/>Карточка товара и чекаут",
              metaTitle: "О компании",
              metaDescription:
                "Леруа Мерлен - международная розничная сеть, специализирующаяся на продаже товаров для строительства, ремонта и обустройства дома. Компания предлагает широкий ассортимент продукции для дома и сада.",
              metaSectionTitle: "Что делал",
              metaSectionDescription:
                "Перед началом работы я подробно изучил, как пользователи взаимодействуют с карточкой товара и чекаутом, чтобы понять, где именно возникают трудности в процессе выбора и оформления покупки. Провёл серию интервью, чтобы собрать живую обратную связь и глубже понять мотивации и ожидания разных групп клиентов — от тех, кто стремится купить быстро и без лишних шагов, до тех, кто внимательно сравнивает параметры, услуги и детали перед оформлением заказа.<br/br/>На основе полученных данных я выделил ключевые метрики, которые позволили точно оценить, что нуждается в улучшении, и какие изменения смогут повысить удобство покупки.",
              titleFeature1: "Задачи",
              descFeature1:
                "Целью редизайна стало повышение удобства принятия решений на карточке товара и упрощение процесса оформления заказа. Нужно было сократить количество сложных или неудобных моментов в пользовательском пути — как на этапе выбора товара, так и при переходе к оплате.<br/br/>Для одних пользователей важно было быстрое и интуитивное добавление товара в корзину, понятная структура информации и уверенность в том, что товар соответствует их ожиданиям. Для других — возможность сравнить параметры, подключить услуги и оформить доставку с нужными условиями. В чекауте особое внимание уделил тем, кто терялся на финальных шагах: задача состояла в том, чтобы сделать оформление максимально прозрачным и предсказуемым, без лишних полей и непонятных шагов.",
              titleFeature2: "Карточка товара",
              descFeature2:
                "В карточке товара важно было сократить путь от интереса к покупке — убрать лишние усилия и сделать процесс выбора интуитивным. Основная задача состояла в том, чтобы помочь пользователю быстро понять, подходит ли товар, сколько его нужно и что ещё может пригодиться.<br/br/>Ключевым улучшением стал калькулятор: теперь пользователь может ввести, например, площадь помещения — и система автоматически рассчитает нужное количество упаковок. Это особенно упростило выбор в категориях с непростой логикой расчёта. Также на карточке товара были добавлены услуги, адаптированные под тип товара. Это позволяет пользователю сразу увидеть доступные дополнительные опции, такие как доставка, сборка или консультация, что помогает быстрее и удобнее принимать решение о покупке.",
              titleFeature3: "Продуктовые метрики",
              descFeature3:
                "После изменений в карточке товара пользователи стали быстрее ориентироваться в ассортименте и принимать решение о покупке, что отразилось на ключевых показателях вовлеченности. Время, которое пользователи тратят на выборе товара, снизилось, а конверсия из просмотра в покупку возросла. Дополнительно увеличилось количество успешных покупок, что говорит о высоком уровне доверия к информации на карточке товара и улучшении процесса выбора.",
              scoreHeadFeature3: "",
              score1Feature3: "Увеличился CTR по",
              score1Feature3_2: "кнопке “В корзину”",
              score2Feature3: "Увеличилось среднее время на карточке",
              score3Feature3: "Повысилась конверсия",
              score3Feature3_2: "из карточки в корзину",
              score4Feature3: "Увеличилась глубина взаимодействия ",
              titleFeature4: "Чекаут",
              descFeature4:
                "В процессе редизайна чекаута я сосредоточился на том, чтобы сделать оформление заказа максимально понятным, быстрым и прозрачным. Для этого переработал ключевые UX-решения, убрав лишние шаги и уточнив формулировки, которые вызывали сомнения у пользователей.<br/br/>Отдельное внимание было уделено карте — одному из ключевых элементов в выборе точки получения. Обновилась логика работы и визуальное представление: теперь сразу видно, сколько товаров доступно в каждой точке, а выбрать удобный магазин стало проще. Добавилось отображение веса товара — это особенно полезно при заказах с самовывозом или крупными позициями. Все изменения сделали процесс оформления более предсказуемым и удобным, снизив вероятность ошибок и отказов на финальных этапах.",
              titleFeature6: "",
              descFeature6:
                "Важным изменением стало внедрение индивидуальных фильтров для разных типов товаров. Теперь для строительных материалов можно выбрать параметры, связанные с их устойчивостью и назначением, а для отделочных покрытий учитывать совместимость с конкретными поверхностями. ",
              titleFeature5: "Продуктовые метрики",
              descFeature5:
                "После обновления чекаута пользователи стали быстрее и увереннее проходить путь от корзины до оплаты. Интерфейс стал проще, понятнее и лучше подстраиваться под реальные сценарии покупки — от быстрой оплаты до выбора подходящего магазина. Изменения особенно хорошо сказались на ключевых точках принятия решений: оформление заказа стало занимать меньше времени, пользователи реже возвращались к предыдущим шагам, а количество успешно завершённых заказов выросло. Улучшения в логике отображения информации и карте повысили прозрачность и помогли снизить уровень напряжения на финальных этапах, что напрямую сказалось на росте доверия к сервису и общей эффективности процесса покупки.",
              scoreHeadFeature5: "",
              score1Feature5: "Повысился Conversion rate из корзины",
              score1Feature5_2: "в покупку",
              score2Feature5: "Сократилось время <br/>до оформлени<br/> заказа",
              score3Feature5: "Увеличился MAU",
              score4Feature5: "Повысился средний чек",
            },
          },
          welcome:
            "Ведущий продуктовый дизайнер, создающий эффективное взаимодействие компаний с аудиторией",
          welcomeMobile:
            "Ведущий продуктовый дизайнер, создающий эффективное взаимодействие компаний с аудиторией",
          projects: "Проекты",
          about: "Обо мне",
          contact: "Контакты",
          phone: "Телефон",
          aboutSectionHello: "Привет",
          aboutSectionHelloContent:
            "Меня зовут Мордовской Андрей.<br />Я старший продуктовый дизайнер<br />с более чем 12-летним опытом работы в разработке цифровых продуктов. За это время я<br />прошел путь от фрилансера<br />до лида команды дизайна. Сотрудничал с такими<br />компаниями как Leroy Merlin, Сбербанк, Якитория и другими",
          aboutSectionExperience: "Опыт",
          aboutSectionExperienceContent:
            "У меня большой опыт в создании дизайн-систем, разработке продуктов для e-commerce,<br />fintech, BI, b2b, Saas и других",
          infoSectionTitle: "Фокус",
          infoSectionContent:
            "В своей работе я уделяю особое внимание целям и задачам бизнеса, анализу целевой аудитории, исследованиям и custdev. Учитываю технические ограничения и другие ресурсы",
          aboutSectionNumbers: "В цифрах",
          aboutSectionNumbersImplemented: "реализованных проектов",
          aboutSectionNumbersCommercial: "коммерческого опыта",
          aboutSectionNumbersLeading: "руководство дизайнерами",
          goToProjects: "К проектам",
          contactMe: "Связаться",
          email: "Почта",
          telegram: "Написать в телеграм",
          tg: "Телеграм",
          commingSoon: "Название проекта",
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
