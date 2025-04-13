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
            "In my work, I focus on the goals<br/>and objectives of the business,<br/>the target audience, research<br/>and custdev, resource and<br/>technical constraints",
          aboutSectionNumbers: "In numbers",
          aboutSectionNumbersImplemented: "implemented projects",
          aboutSectionNumbersCommercial: "сommercial experience",
          aboutSectionNumbersLeading: "leading designers",
          goToProjects: "Go to projects",
          contactMe: "Contact me",
          email: "E-mail",
          telegram: "Write to Telegram",
          tg: "Telegram",
          cases: {
            case1: {
              title: "Leroy Merlin. Search and catalog",
              metaTitle: "About the company",
              metaDescription:
                "Leroy Merlin is an international retail chain specializing <br/> in products for construction, renovation, and home improvement. The company offers a wide range<br/>of goods for both the home and garden",

              metaSectionTitle: "What I Did",
              metaSectionDescription:
                "Before starting the redesign, I conducted a detailed analysis of user scenarios, identified key pain points customers encounter, and gathered feedback through interviews. This allowed us to gain a deeper understanding of the needs of different customer groups — from private buyers who prioritize convenience and accessibility,<br/>to professionals who require detailed product specifications and flexible search options.<br/br/>Based on this research, we developed a redesign strategy aimed at improving search usability, optimizing the catalog structure, and introducing personalization tools.",
              titleFeature1: "Objectives",
              descFeature1:
                "The main goal of the redesign was to simplify the process of finding and selecting products. This is especially important given the extensive product assortment,<br/>where users need to quickly locate relevant items<br/>and choose the best purchasing options.<br/br/>For private customers, the key priorities were ease<br/>of selection, the ability to filter by in-store availability,<br/>and delivery speed. Professional buyers, on the other hand, needed advanced search capabilities — including filtering by technical specifications and compatibility with other products. It was essential to create an interface that could adapt to various use cases, ensuring a smooth<br/>and intuitive user journey.",
              titleFeature2: "Search",
              descFeature2:
                "One of the top priorities was improving the search function, as it is a key entry point for many users.<br/>I redesigned the search mechanics to make product selection faster and more convenient. Now, the system not only suggests products in text format, but also presents them as visual cards — allowing users<br/>to immediately recognize the items they need.<br/br/>A quick access feature was added for search history<br/>and popular products, enabling users to easily return<br/>to previously viewed items or explore trending options.<br/>The filtering system was also enhanced to dynamically adjust based on the selected category, offering relevant filter options. For example, construction materials can<br/>now be filtered by surface type and usage conditions, while tools can be filtered by power and functionality.",
              titleFeature3: "",
              descFeature3:
                "Additionally, I reworked the logic behind search results display, allowing the product list to dynamically adapt<br/>to user preferences. This improved navigation and reduced the time customers spend searching for<br/>the right products.",
              titleFeature4: "Product Metrics",
              descFeature4:
                "Following the search improvements, users were able to find relevant products more quickly, leading to increased engagement. The time spent on search decreased, while the share of successful queries went up. Fewer users exited the site immediately after searching, indicating<br/>that the results were more relevant and helpful.<br/br/>The conversion rate from search to product detail views grew significantly, as users clicked more often on the suggested items. Additionally, the average number<br/>of products viewed after a search increased — <br/>pointing to greater trust in the search results<br/>and smoother navigation.",
              scoreHeadFeature4: "",
              score1Feature4: "higher search-to-product detail page conversion",
              score2Feature4:
                "increased average order value (recommendations in search)",
              score3Feature4: "lower bounce rate",
              score4Feature4: "growth in MAU",
              titleFeature5: "Catalog",
              descFeature5:
                "The catalog redesign focused on creating a more<br/>intuitive and user-friendly interface that works equally<br/>well for one-time buyers and professional customers.<br/br/>I implemented a filtering mechanism that enables<br/>usersto immediately select products based on available fulfillment options — particularly relevant for those choosing between in-store pickup and home delivery.<br/br/>For professional clients, the catalog has become even more versatile. It now allows for quick product searches based on technical specifications, easy compatibility checks with other materials, and streamlined solution-building for complex projects. The entire category structure has been redesigned to help users navigate intuitively, move seamlessly between sections, and find the right products without unnecessary steps.",
              titleFeature6: "",
              descFeature6:
                "An important change was the implementation of individual filters for different types of products. Now, for construction materials, you can choose parameters related to their durability and intended use, while for finishing materials, compatibility with specific surfaces can be considered.",
              titleFeature7: "Product Metrics",
              descFeature7:
                "The updated catalog structure has had a positive impact on the user experience. Bounce rates on category pages have decreased, indicating clearer and more intuitive navigation. Conversion rates to product detail views have increased, as users are now able to find relevant items more quickly.<br/br/>Although time spent on catalog pages has grown, the average number of clicks needed to reach the desired product has dropped—signaling more efficient filtering tools. The share of users who proceed to purchase after browsing the catalog has also risen, confirming that the new interface is more user-friendly and accessible.",
              scoreHeadFeature7: "",
              score1Feature7: "page depth has increased",
              score2Feature7: "higher conversion to product detail pages",
              score3Feature7: "fewer bounces",
              score4Feature7: "growth in MAU",
            },
          },
          commingSoon: "Comming soon",
        },
      },
      ru: {
        translation: {
          cases: {
            case1: {
              title: "Леруа Мерлен. Поиск и каталог",
              metaTitle: "О компании",
              metaDescription:
                "Леруа Мерлен - международная розничная сеть, специализирующаяся на продаже товаров для строительства, ремонта и обустройства дома. Компания предлагает широкий ассортимент продукции для дома и сада.",

              metaSectionTitle: "Что делал",
              metaSectionDescription:
                "Перед началом работы я провел детальный анализ пользовательских сценариев, изучили ключевые барьеры, с которыми сталкиваются покупатели,<br/>и собрал обратную связь через интервью.<br/>Это позволило глубже понять потребности<br/> различных групп клиентов — от частных <br/>покупателей, которые делают выбор на основе удобства и доступности, до профессионалов,<br/> для которых важны детализированные<br/> характеристики товаров и гибкость поиска. <br/br/> На основе полученных данных была разработана стратегия редизайна, направленная на повышение удобства поиска, оптимизацию структуры каталога <br/>и внедрение инструментов персонализации.",
              titleFeature1: "Задачи",
              descFeature1:
                "Основной целью редизайна стало упрощение процесса поиска и выбора товаров.<br/> Это особенно важно для большого ассортимента,<br/> где пользователям необходимо быстро находить нужные позиции и подбирать оптимальные<br/> условия покупки.<br/br/>Для частных клиентов ключевыми аспектами<br/>стали удобство выбора, возможность фильтрации<br/>по наличию в магазинах и скорости доставки. Профессиональным покупателям требовались расширенные параметры поиска, включая сортировку по техническим характеристикам и совместимости<br/>с другими товарами. Важно было создать интерфейс,<br/> который адаптируется под разные сценарии использования, обеспечивая удобный и логичный процесс взаимодействия.",
              titleFeature2: "Поиск",
              descFeature2:
                "Одним из приоритетных направлений работы стала оптимизация поиска, так как он является важной точкой входа для пользователей. Я переработал<br/>его механику, чтобы сделать процесс выбора более быстрым и удобным. Теперь система автоматически подсказывает товары не только в текстовом формате, но и в виде визуальных карточек, что позволяет пользователям сразу видеть нужные позиции.<br/br/>Была добавлена возможность быстрого доступа<br/>к истории запросов и популярным товарам, благодаря чему пользователи могут легко возвращаться к ранее найденным позициям или ориентироваться на самые востребованные предложения. Улучшенная система фильтрации теперь подстраивается под конкретную категорию, предлагая релевантные параметры выбора. Например, для строительных материалов стали доступны фильтры по типу поверхности<br/>и условиям эксплуатации, а для инструментов<br/>по мощности и функциональности.",
              titleFeature3: "",
              descFeature3:
                "Дополнительно была пересмотрена логика отображения результатов, что позволило динамически адаптировать список товаров<br/>с учетом предпочтений пользователей.<br/>Это улучшило навигацию и сократило время,<br/>которое покупатели тратят на поиск<br/>нужных позиций.",
              titleFeature4: "Метрики",
              descFeature4:
                "После изменений в поиске пользователи стали<br/> быстрее находить нужные товары, что отразилось<br/>на показателях вовлеченности. Время, затраченное <br/>на поиск, уменьшилось, а доля успешных запросов<br/>увеличилась. Количество пользователей, покидающих<br/>сайт сразу после попытки поиска, снизилось,<br/>что говорит о том, что система стала лучше<br/>подбирать релевантные товары.<br/br/>Конверсия из поиска в просмотр карточек товаров<br/>значительно выросла, так как пользователи стали<br/>чаще кликать на предложенные результаты.<br/>Дополнительно увеличилось среднее число<br/>товаров, просматриваемых после поиска,<br/>что говорит о большем доверии к выдаче<br/>удобстве навигации по результатам.",
              scoreHeadFeature4: "",
              score1Feature4: "повысилась конверсию поиска в просмотр карточки",
              score2Feature4: "увеличился средний чек (рекомендации в поиске)",
              score3Feature4: "уменьшились отказы",
              score4Feature4: "увеличился MAU",
              titleFeature5: "Каталог",
              descFeature5:
                "Работа над каталогом была направлена на создание более интуитивного и удобного интерфейса, который одинаково хорошо подходит как для разовых покупок, так и для профессиональных закупок.<br/br/>Я внедрил механизм фильтрации, который позволяет пользователям сразу отбирать товары с учетом доступных способов получения, что особенно актуально для тех, кто выбирает между<br/>самовывозом и доставкой.<br/br/>Для профессиональных клиентов каталог стал<br/>еще более гибким. Теперь можно быстро находить<br/>товары по техническим характеристикам, оценивать<br/>их совместимость с другими материалами и подбирать решения для комплексных проектов.<br/>Вся структура категорий была переработана таким образом, чтобы пользователи могли легко ориентироваться, переходить между разделами<br/>и находить нужные товары без лишних шагов.",
              titleFeature6: "",
              descFeature6:
                "Важным изменением стало внедрение индивидуальных фильтров для разных типов товаров.<br/>Теперь для строительных материалов можно выбрать параметры, связанные с их устойчивостью и назначением, а для отделочных покрытий учитывать совместимость с конкретными поверхностями. ",
              titleFeature7: "Метрики",
              descFeature7:
                "Обновление структуры каталога положительно повлияло на пользовательский опыт. Количество отказов на страницах категорий сократилось,<br/>что говорит о более понятной навигации. Конверсия<br/>в просмотры карточек товаров увеличилась, так как пользователи стали быстрее находить нужные товары.<br/><br/>Время, проведенное на страницах каталога, возросло, но при этом среднее число кликов до нужного товара сократилось, что указывает на более эффективную работу фильтров. Доля пользователей, совершающих покупки после просмотра каталога, также выросла, подтверждая, что обновленный интерфейс стал удобнее и понятнее.",
              scoreHeadFeature7: "",
              score1Feature7: "увеличилась глубина просмотра",
              score2Feature7: "увеличилась конверсия в карточку",
              score3Feature7: "уменьшились отказы",
              score4Feature7: "увеличился MAU",
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
            "В своей работе я уделяю особое внимание целям и задачам<br/>бизнеса, анализу целевой аудитории, исследованиям и custdev. Учитываю технические ограничения и другие ресурсы",
          aboutSectionNumbers: "В цифрах",
          aboutSectionNumbersImplemented: "реализованных проектов",
          aboutSectionNumbersCommercial: "коммерческого опыта",
          aboutSectionNumbersLeading: "руководство дизайнерами",
          goToProjects: "К проектам",
          contactMe: "Связаться",
          email: "Почта",
          telegram: "Написать в телеграм",
          tg: "Телеграм",
          commingSoon: "В разработке",
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
