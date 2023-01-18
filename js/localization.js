function getE(id, untrustedText) {
  const title = document.getElementById(id);
  title.innerHTML = untrustedText
}

function getEByClass(className, text) {
  const elements = document.getElementsByClassName(className);


  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = text
  }
}
//let language = 'rus'
let en = true
function setRusLanguage() {
  getE("title", "Artem Musaelyan - official site")

// Menu sections
  getE("menu_about_me", "ПРО МЕНЯ")
  getE("menu_my_experience", "МОЙ ОПЫТ")
  getE("menu_my_skills", "МОИ НАВЫКИ")
  getE("menu_my_works", "МОИ РАБОТЫ")
  getE("menu_contacts", "КОНТАКТЫ")
// Promo
  getE("promo_title", "Меня зовут")
  getE("promo_title_name", "Артем Мусаэлян")
  getE("promo_portfolio", "Портфолио")
  getE("promo_about_me", "Про меня")
// About
  getE("about_about_me", "Про меня")
  getE("about_about_name", "Меня зовут Артем")
  getE("about_text", "Свой путь разработчика начал с программирования на C++. Вскоре был погружен в web-разработку. Для меня программирование - это конструктор, который помогает создавать что-то новое." +
    "<br/> -Способ использования интеллекта важнее, чем его уровень. © C. MacConnell")

  getE("frontend", "Знаю основы HTML, CSS (grid, flex), bootstrap. Изучал по курсу udemy WEB-разработчик 2021. Ссылки на разработанные сайты находятся ниже. Сейчас активно изучаю React и пишу различные проекты.")
  getE("backend", "Имею опыт разработки на С++, решал олимпиадные задачи и погружался в язык. Сейчас изучаю python для сдачи экзаменов и получения опыта")
  getE("patterns", "• Работа с алгоритмами и структурами данных: стек, очередь, связанные списки, деревья." + " " +
    "<br/> • Оптимизация сортировок, таких как: сортировка вставками, сортировка выбором, сортировка слиянием, пирамидальная сортировка, алгоритм быстрой сортировки.")
  getE("react_react", "React – библиотека JS которую я постоянно использую для разработки пользовательского интерфейса(UI) своих проектов. Все проекты пишу на языке TypeScript(т.к он является типизированным и поддерживает модули) и применяю архитектурный паттерн Atomic Design. Для стилизации своих работ я выбираю библиотеку компонентов MUI")
  getE("about_patterns_algorithms", "Паттерны и алгоритмы")

// Skills
  getE("skills_title", "Навыки")
  getE("skills_subtitle", "Что я использую в работе 10/10")
  getE("approach_to_styles", "Подход к стилям")
  getE("collectors", "Сборщики")
  getE("state_manager", "State менеджер")
  getE("data_exchange", "Обмен данными")
  getE("Bug_tracker_and_technologies", "Bug tracker и технологии")

  getE("react_text", "Разработка приложений для банковских конвейеров и других enterprise решений.")
  getE("ts_text", "Понимание и использование типизации и дополнительных возможностей ООП.")
  getE("js_text", "Знание базовых функций и возможностей языка.")
  getE("mui_text", "Опыт написания кастомных компонентов с переопределенными классами.")
  getE("style_text", "Использование разных подходов: sx, bootstrap, styled.component, flex и grid.")
  getE("html_text", "Опыт использования подхода БЭМ, знание основ верстки.")
  getE("css_text", "Опыт работы в разных подходах: SASS, CSS, LESS и SCSS.")
  getE("gulp_text", "Конфигурация задач Gulp для работы с проектами чистого js/html/css для сборки модуля запуска.")
  getE("cra_text", "Опыт разработки проектов при помощи сборщика Create React App.")
  getE("redux_text", "Опыт RTK для работы с глобальным состоянием и асинхронными запросами.")
  getE("native_text", "Опыт использования useContext для небольших проектов.")
  getE("api_text", "Опыт работы с запросами axios и fetch.")
  getE("figma_text", "Опыт работы с макетами из Figma.")


//Portfolio
  getE("portfolio", "Портфолио")
  getE("my_projects", "Мои работы")
  getE("wait", "Ожидать 20 секунд при первом запуске приложения")

//contacts
  getE("my_cont", "Контакты")
  getE("contact_me", "Свяжитесь со мной")
  getE("way", "Любым удобным для вас способом:")
  getE("leave", "Или оставьте ваши данные и я сам вам напишу:")
  getE("your_name", "Ваше имя")
  getE("your_mail", "Ваша почта ")
  getE("your_message", "Ваше сообщение")
  getE("send", "Отправить сообщение")
  getE("privacy", "Я согласен(а) с <a href=\"/policy.html\">политикой конфиденциальности</a>")

//Resume
  getE("resume_title", "Опыт")
  getE("resume_subtitle", "Чем я буду полезен")
  getE("resume_educ_internship", "Образование и проекты")
  getE("resume_subtitle_internship", "Udemy / Stepik")
  getE("resume_title_uni", "МАОУ сош №89 имени Метальникова")
  getE("resume_subtitle_uni", "Основное общее образование (сейчас 11 класс)")
  getE("resume_text_uni", "Сейчас обучаюсь в 11 классе. Планирую и дальше продвигаться в сфере IT. Более углулено изучать старое и открывать новое.")
  getE("courses", "Курсы")
  getE("courses_text", "Постоянно изучаю что-то новое, каждый проект для меня это изучение нового материала. Курсы: \"Полный курс по JavaScript + React - с нуля до результата\", \"WEB-разработчик 2021\", \"Angular - The Complete Guide (2021 Edition)\".")

  getE('marvel', 'Проект "Marvel"')
  getE('marvel_text', '- Запросы на rest api server\n' +
    '- Стилизация при помощи препроцессора sass\n' +
    '- Основной язык JavaScript + библиотека React\n' +
    '- Использование функциональных компонентов\n' +
    '- Опыт написания кастомных хуков')

  getE('auto_moto', 'Проект "Auto/Moto"')
  getE('auto_moto_text', '- База данных Firebase для хранения таблиц\n' +
    '- Аунтификация через социальные сети при помощи firebase\n' +
    '- Использование React Router для маршрутизации\n' +
    '- Язык TypeScript - Применение web kit mui 5 ')

  getE('dishes', 'Проект "Dishes"')
  getE('dishes_text', '- Библиотека React\n' +
    '- Использование web kit mui 5 для верстки\n' +
    '- Работа с темой MUI\n' +
    '- Основной язык написания кода - TypeScript\n' +
    '- Декомпозиция компонентов\n' +
    '- Применение архитектурного паттерна Atomic Design: атомы, молекулы, организмы')

  getE('heart_rate_monitor', 'Проект "Heart rate monitor"')
  getE('heart_rate_monitor_text', '- Методология описания классов БЭМ (блок, элемент, модификатор)\n' +
    '- Стилизация sass\n' +
    '- Конфигурирование почтового сервиса на языке php\n' +
    '- Разработка макета Figma\n' +
    '- Разработка списка товаров при помощи технологии Grid CSS'
  )
}
function setEngLanguage() {
  getE("title", "Artem Musaelyan - official site")

// Menu sections
  getE("menu_about_me", "about me")
  getE("menu_my_experience", "my experience")
  getE("menu_my_skills", "my skills")
  getE("menu_my_works", "my works")
  getE("menu_contacts", "contacts")

// Promo
  getE("promo_title", "My name is")
  getE("promo_title_name", "Artem Musaelyan")
  getE("promo_portfolio", "Portfolio")
  getE("promo_about_me", "About me")

// About
  getE("about_about_me", "About me")
  getE("about_about_name", "My name is Artem")

  getE("frontend", "I know the basics of HTML, CSS(grid, flex), Bootstrap. Moreover, I studied it with the help of the courses UDEMY / Stepik. Links to the developed sites are below. Now I am actively studying React and writing various projects. ")
  getE("backend", "I have an experience in developing on C++. Moreover, I solved various problems and was keen on learning language. Now I am studying Python to pass the exams and get the experience. ")

  getE("react_react", "React is a library of JS which I always use for the developing the user interface (UI) of my projects. All the projects I write on the TypeScript language ( because it is typed and supports modules) and use architectural pattern Atomic design. To style my work, I choose a library of components MUI.")
  getE("about_patterns_algorithms", "Patterns and algorithms")
  getE("patterns", "Working with algorithms and data structures. Own implementation: stack, queue, linked lists, sports programming trees. Also optimization of sorts, such as: insertion sort, selection sort, merge sort, heap sort, quick sort algorithm.")

// Skills
  getE("skills_title", "Skills")
  getE("skills_subtitle", "What I use in my work 10/10")
  getE("approach_to_styles", "Approach to styles")
  getE("collectors", "Collectors")
  getE("state_manager", "State manager")
  getE("data_exchange", "Data exchange")
  getE("Bug_tracker_and_technologies", "Bug tracker and technologies")

  getE("react_text", "Development of applications for banking pipelines and other enterprise solutions.")
  getE("ts_text", "Understanding and using typing and additional OOP features.")
  getE("js_text", "Knowledge of the basic functions and capabilities of the language.")
  getE("mui_text", "Experience writing custom components with predefined classes.")
  getE("style_text", "Using different approaches: sx, bootstrap, styled.component, flex and grid.")
  getE("html_text", "Experience using the BEM approach, knowledge of the basics of layout.")
  getE("css_text", "Experience in different approaches: SASS, CSS, LESS and SCSS.")
  getE("gulp_text", "Configuration of Gulp tasks for working with pure js/html/css projects for building a launcher.")
  getE("cra_text", "Experience in developing projects using the Create React App assembler.")
  getE("redux_text", "RTK experience for working with global state and asynchronous requests.")
  getE("native_text", "Experience using useContext for small projects.")
  getE("api_text", "Experience working with Axios and Fetch queries.")
  getE("figma_text", "Experience working with layouts from Figma.")

//Portfolio
  getE("portfolio", "Portfolio")
  getE("my_projects", "My projects")
  getE("wait", "Wait 20 seconds when the app is first launched")

//contacts
  getE("my_cont", "Contacts")
  getE("contact_me", "Contact me")
  getE("way", "In any way convenient for you")
  getE("leave", "Or leave your details and I will write to you myself:")
  getE("your_name", "Your name")
  getE("your_mail", "Your mail")
  getE("your_message", "Your message")
  getE("send", "Send this message")
  getE("privacy", "I agree with the <a href=\"/policyEng.html\">privacy Policy</a>")

//Resume
  getE("resume_title", "Experience")
  getE("resume_subtitle", "How can I be useful")
  getE("resume_educ_internship", "Education and projects")
  getE("resume_title_uni", "The state school 89 of the Peter Metalnikov’s name.")
  getE("resume_subtitle_uni", "Basic general education (now it is  the 11th grade)")
  getE("resume_text_uni", "Now I am studying in the 11th grade. I am planning to develop myself in IT-sphere by in-depth study of the old things and the discovery of the new ones. ")
  getE("courses", "Courses")
  getE("courses_text", "I always learn something new and every project is a study of the new material. Courses: 'Full course on JavaScript + React - from scratch to the result', 'WEB Developer 2022'")
  getE("resume_subtitle_internship", "Udemy/Stepik")

  getE('marvel', 'The Project “Marvel”')
  getE('marvel_text', '⁃ Requests for rest api server.' +
    '\n⁃ Stylization using the processor sass. ' +
    '\n⁃ The main language JavaScript + the library React. ' +
    '\n⁃ The usage of the functional components. ' +
    '\n⁃ The experience in writing custom hooks')

  getE("about_text",
    "I started my path as a developer with programming on C++. Then I was plunged in web-development. As for me, programming is a brick set, which helps to create something new.\n" +
    "<br/> -The way of using intelligence is more important than its level. ©McConnell")
  getE('auto_moto', 'The project “Auto/Moto” ')
  getE('auto_moto_text', '⁃ Database “Firebase” for storing tables. ' +
    '\n⁃ Authentication through social nets with the help of firebase. ' +
    '\n⁃ The usage of React Router for routing. ' +
    '\n⁃ The language TypeScript ' +
    '\n⁃ Use of web kit mui 5 ')

  getE('dishes', 'The project “Dishes”')
  getE('dishes_text', '⁃ The library React. ' +
    '\n⁃ The usage of web kit mui 5 for website layout. ' +
    '\n⁃ Working with a topic MUI. ' +
    '\n⁃ The main language of the code writing is TypeScript. ' +
    '\n⁃ Decomposition of components. ' +
    '\n⁃ The use of architectural pattern Atomic design: atoms, molecules, organisms')

  getE('heart_rate_monitor', 'The project “Heart rate monitor” ')
  getE('heart_rate_monitor_text', '⁃ BEM methodology (block, element, modifier). ' +
    '\n⁃ Stylization with sass. ' +
    '\n⁃ Configuration of the mail service in the php language. ' +
    '\n⁃ The development of design Figma. ' +
    '\n⁃ The development of the list of goods with the help of technology Grid CSS')

  getEByClass("modal__subtitle", "Sorry, sending messages is disabled")
  getEByClass("modal__descr", "Contact me in another way")
}

document.getElementById("language1-2").checked = true

document.getElementById("language1-1").addEventListener("change", () => {
  en = !en
  if(!en){
    setRusLanguage()
  }
})

document.getElementById("language1-2").addEventListener("change", () => {
  en = !en
  if (en) {
    setEngLanguage()
  }
})

setEngLanguage()






