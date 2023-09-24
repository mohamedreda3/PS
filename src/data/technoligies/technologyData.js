export const technologyData = {
  categories: [
    {
      title: 'Front End',
      title_ar: 'مطور واجهات',
      id: '1',
      sub_categories: [
        {
          title: 'Frameworks',
          title_ar: 'بيئة عمل',
          id: '1'
        },
        {
          title: 'Languages',
          title_ar: 'لغات',
          id: '2'
        }
      ]
    },

    {
      title: 'Back End',
      title_ar:'باك إند',
      id: '2',
      sub_categories: [
        {
          title: 'Frameworks',
          title_ar: 'بيئة عمل',
          id: '3'
        },
        {
          title: 'Languages',
          title_ar: 'لغات',
          id: '4'
        }
      ]
    },

    {
      title: 'Mobile Apps',
      title_ar:'تطبيقات موبيل',
      id: '3',
      sub_categories: [
        {
          title: 'Frameworks',
          title_ar: 'بيئة عمل',
          id: '5'
        },
        {
          title: 'Languages',
          title_ar: 'لغات',
          id: '6'
        }
      ]
    },

    {
      title: 'Embedded',
      title_ar:'الأنظمة المضمنة',
      id: '4'
    }
  ],
  technologies: [
    // Front End Frameworks

    {
      category_id: "1",
      sub_category_id: "1",
      title: "React",
      title_ar:'ريأكت',
      description: "A JavaScript library for building user interfaces.",
      description_ar: "مكتبة جافا سكريبت لبناء واجهات المستخدم      ",
      id: "1",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285296/React-icon.svg_s2so1y.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 128, 0, .3)", // Green with 80% opacity
      official_website: "https://reactjs.org/"
    },
    {
      category_id: "1",
      sub_category_id: "1",
      title: "Angular",
      title_ar: "أنجيولار",
      description: "إطار تطبيق ويب يستند إلى TypeScript.",
      id: "2",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/Angular_full_color_logo.svg_owtzxm.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 69, 0, .3)", // Red-Orange with 80% opacity
      official_website: "https://angular.io/"
    },
    {
      category_id: "1",
      sub_category_id: "1",
      title: "Vue.js",
      title_ar: "فيو",
      description:
        "إطار عمل JavaScript تقدمي لبناء واجهات المستخدم.        ",
      id: "3",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/Vue.js_Logo_2.svg_dob5jv.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 0, 255, .3)", // Blue with 80% opacity
      official_website: "https://vuejs.org/"
    },
    {
      category_id: "1",
      sub_category_id: "1",
      title: "Svelte",
      title_ar:'سفيمت',
      description: "A radical new approach to building user interfaces.",
      description_ar: "نهج جديد جذري لبناء واجهات المستخدم.",
      id: "4",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/1200px-Svelte_Logo.svg_rqp0e1.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(128, 0, 128, .3)", // Purple with 80% opacity
      official_website: "https://svelte.dev/"
    },
    {
      category_id: "1",
      sub_category_id: "1",
      title: "Ember.js",
      title_ar: "إمبر",
      description: "A framework for creating ambitious web applications.",
      description_ar:'إطار عمل لإنشاء تطبيقات الويب الطموحة.',
      id: "5",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/teaching-reverse_sly9uk.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 165, 0, .3)", // Orange with 80% opacity
      official_website: "https://emberjs.com/"
    },

    {
      category_id: "1",
      sub_category_id: "2",
      title: "JavaScript",
      title_ar:'جافا إسكريبت',
      description: "A popular scripting language for web development.",
      description_ar:'لغة برمجة شعبية لتطوير الويب.',
      id: "6",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/Unofficial_JavaScript_logo_2.svg_z0hew3.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 128, 0, .3)", // Green with 80% opacity
      official_website:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      category_id: "1",
      sub_category_id: "2",
      title: "TypeScript",
      title_ar:'تايب إسكريبت',
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
      description_ar:
        "مجموعة شاملة مكتوبة من JavaScript يتم تجميعها إلى JavaScript عادي.        ",
      id: "7",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285533/typescript_uw2yn1.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 69, 0, .3)", // Red-Orange with 80% opacity
      official_website: "https://www.typescriptlang.org/"
    },
    {
      category_id: "1",
      sub_category_id: "2",
      title: "HTML",
      title_ar: "إتش تى إم إل",
      description: "Hypertext Markup Language for creating web pages.",
      description_ar:'لغة ترميز النص التشعبي لإنشاء صفحات الويب.      ',
      id: "8",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285265/1670239867-1_gmqwzn.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 0, 255, .3)", // Blue with 80% opacity
      official_website: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      category_id: "1",
      sub_category_id: "2",
      title: "CSS",
      title_ar:'سى إس إس',
      description: "Cascading Style Sheets for styling web pages.",
      description_ar:'أوراق الأنماط المتتالية لتصميم صفحات الويب.      ',
      id: "9",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/CSS3_logo.svg_dpxetp.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(128, 0, 128, .3)", // Purple with 80% opacity
      official_website: "https://www.w3.org/Style/CSS/Overview.en.html"
    },
    {
      category_id: "1",
      sub_category_id: "2",
      title: "SCSS",
      title_ar:'ساسس',
      description: "Sass CSS pre-processor.",
      description_ar:'المعالج الأولى لـ Sass CSS',
      id: "10",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/1200px-Sass_Logo_Color.svg_nqyx1h.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 165, 0, .3)", // Orange with 80% opacity
      official_website: "https://sass-lang.com/"
    },

    // ... More technologies for Front End and other categories

    {
      category_id: "2",
      sub_category_id: "3",
      title: "Express.js",
      title_ar:'إكسبرس',
      description:
        "A fast, unopinionated, minimalist web framework for Node.js.",
      id: "11",
      description_ar:'إطار عمل ويب سريع وغير مدروس وبسيط لـ Node.js.      ',
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286016/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text-removebg-preview_qm1idz.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      official_website: "https://expressjs.com/"
    },
    {
      category_id: "2",
      sub_category_id: "3",
      title: "Django",
      title_ar:'جانجو',
      description:
        "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
        description_ar:'إطار عمل ويب Python عالي المستوى يشجع التطوير السريع والتصميم النظيف والعملي.        ',
      id: "12",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286016/django_epi1qq.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      official_website: "https://www.djangoproject.com/"
    },
    {
      category_id: "2",
      sub_category_id: "3",
      title: "Ruby on Rails",
      title_ar:'روبى',
      description: "A web application framework written in Ruby.",
      description_ar:'إطار تطبيق ويب مكتوب بلغة روبي.      ',
      id: "13",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286016/png-transparent-web-development-ruby-on-rails-computer-icons-rails-text-logo-web-application-thumbnail-removebg-preview_kutrxc.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      official_website: "https://rubyonrails.org/"
    },
    {
      category_id: "2",
      sub_category_id: "3",
      title: "Laravel",
      title_ar:'لارافيل',
      description: "A PHP web framework used for web application development.",
      description_ar:'إطار ويب PHP يستخدم لتطوير تطبيقات الويب      ',
      id: "14",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286016/png-transparent-laravel-hd-logo-removebg-preview_eng5vl.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      official_website: "https://laravel.com/"
    },
    {
      category_id: "2",
      sub_category_id: "3",
      title: "Spring Boot",
      title_ar:'إسبرينج بوت',
      description:
        "An extension of the Spring framework for creating standalone, production-grade applications.",
        description_ar:'امتداد لإطار عمل Spring لإنشاء تطبيقات مستقلة على مستوى الإنتاج.        ',
      id: "15",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286112/458-4589658_spring-framework-logo-spring-boot-png-transparent-png_funhd7.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      official_website: "https://spring.io/projects/spring-boot"
    },

    // Back End Languages

    {
      category_id: "2",
      sub_category_id: "4",
      title: "Node.js",
      title_ar:'نود',
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        description_ar:'وقت تشغيل JavaScript مبني على محرك JavaScript V8 الخاص بـ Chrome        ',
      id: "16",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286016/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text-removebg-preview_qm1idz.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 128, 0, .3)", // Green with 80% opacity
      official_website: "https://nodejs.org/"
    },
    {
      category_id: "2",
      sub_category_id: "4",
      title: "Python",
      title_ar:'بايثون',
      description:
        "A versatile programming language often used for web development.",
        description_ar:'لغة برمجة متعددة الاستخدامات تُستخدم غالبًا لتطوير الويب        ',
      id: "17",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286016/kisspng-python-computer-icons-programmer-javascript-progra-tweet-on-twitter-trend-by-gp_pulipaka-twitter-tre-5b6648da225a38.5188591515334299781407-removebg-preview_futjbu.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 69, 0, .3)", // Red-Orange with 80% opacity
      official_website: "https://www.python.org/"
    },
    {
      category_id: "2",
      sub_category_id: "4",
      title: "Ruby",
      title_ar:'روبى',
      description:
        "A dynamic, open-source programming language with a focus on simplicity and productivity.",
        description_ar:'لغة برمجة ديناميكية مفتوحة المصدر مع التركيز على البساطة والإنتاجية.        ',
      id: "18",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286016/png-transparent-ruby-gemstone-emerald-others-gemstone-heart-diamond-removebg-preview_voxvef.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 0, 255, .3)", // Blue with 80% opacity
      official_website: "https://www.ruby-lang.org/"
    },
    {
      category_id: "2",
      sub_category_id: "4",
      title: "PHP",
      title_ar:'بى إتش بى',
      description: "A popular scripting language used for web development.",
      description_ar:'لغة برمجة شائعة تستخدم لتطوير الويب.      ',
      id: "19",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286308/3-2-php-logo-png-picture_galkxw.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(128, 0, 128, .3)", // Purple with 80% opacity
      official_website: "https://www.php.net/"
    },
    {
      category_id: "2",
      sub_category_id: "4",
      title: "Java",
      title_ar:'جافا',
      description:
        "A versatile programming language used for various applications, including back-end development.",
        description_ar:'لغة برمجة متعددة الاستخدامات تستخدم لمختلف التطبيقات، بما في ذلك التطوير الخلفي.        ',
      id: "20",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286308/58480979cef1014c0b5e4901_bihj2c.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 165, 0, .3)", // Orange with 80% opacity
      official_website: "https://www.java.com/"
    },

    // Mobile Apps Frameworks

    {
      category_id: "3",
      sub_category_id: "5",
      title: "React Native",
      title_ar:'ريأكت نيتف',
      description: "A framework for building native mobile apps using React.",
      description_ar:'إطار عمل لبناء تطبيقات الهاتف المحمول الأصلية باستخدام React.      ',
      id: "21",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285296/React-icon.svg_s2so1y.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 128, 128, .3)", // Teal with 80% opacity
      official_website: "https://reactnative.dev/"
    },
    {
      category_id: "3",
      sub_category_id: "5",
      title: "Flutter",
      title_ar:'فلاتر',
      description:
        "Google's UI toolkit for building natively compiled applications for mobile.",
        description_ar:'مجموعة أدوات واجهة مستخدم Google لإنشاء تطبيقات مجمعة محليًا للجوال.        ',
      id: "22",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286496/1_5-aoK8IBmXve5whBQM90GA_cf9bnt.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 0, 255, .3)", // Magenta with 80% opacity
      official_website: "https://flutter.dev/"
    },
    {
      category_id: "3",
      sub_category_id: "5",
      title: "Ionic",
      title_ar:'أيقونك',
      description:
        "An open-source framework for building cross-platform mobile apps.",
        description_ar:'إطار عمل مفتوح المصدر لبناء تطبيقات الهاتف المحمول عبر الأنظمة الأساسية.        ',
      id: "23",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286495/a488f17e4616738ff04531ef23fa4572a4659d64_d3nz1j.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 255, 0, .3)", // Green with 80% opacity
      official_website: "https://ionicframework.com/"
    },
    {
      category_id: "3",
      sub_category_id: "5",
      title: "Xamarin",
      title_ar:'زامارين',
      description:
        "A Microsoft-owned framework for building cross-platform apps.",
        description_ar:'إطار عمل مملوك لشركة Microsoft لإنشاء تطبيقات مشتركة بين الأنظمة الأساسية.        ',
      id: "24",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286495/790012_shkpb1.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(128, 0, 0, .3)", // Maroon with 80% opacity
      official_website: "https://dotnet.microsoft.com/apps/xamarin"
    },
    {
      category_id: "3",
      sub_category_id: "5",
      title: "PhoneGap",
      title_ar:'فون غاب',
      description:
        "An open-source framework for building cross-platform mobile apps using HTML, CSS, and JavaScript.",
        description_ar:'إطار عمل مفتوح المصدر لإنشاء تطبيقات الهاتف المحمول عبر الأنظمة الأساسية باستخدام HTML وCSS وJavaScript.        ',
      id: "25",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286496/60365_vh7etm.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 0, 128, .3)", // Navy Blue with 80% opacity
      official_website: "https://phonegap.com/"
    },

    // Mobile Apps Languages

    {
      category_id: "3",
      sub_category_id: "6",
      title: "Swift",
      title_ar:'سويفت',
      description:
        "Apple's programming language for building iOS and macOS apps.",
        description_ar:'لغة برمجة Apple لبناء تطبيقات iOS وmacOS.        ',

      id: "26",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286704/swift_logo_pfmi8p.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 0, 0, .3)", // Red with 80% opacity
      official_website: "https://developer.apple.com/swift/"
    },
    {
      category_id: "3",
      sub_category_id: "6",
      title: "Java",
      title_ar:'جافا',
      description:
        "A versatile programming language used for Android app development.",
        description_ar:'لغة برمجة متعددة الاستخدامات تستخدم لتطوير تطبيقات Android.        ',
      id: "27",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286308/58480979cef1014c0b5e4901_bihj2c.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 255, 0, .3)", // Green with 80% opacity
      official_website: "https://www.java.com/"
    },
    {
      category_id: "3",
      sub_category_id: "6",
      title: "Kotlin",
      title_ar:'كوتلين',
      description:
        "A modern programming language used for Android app development.",
        description_ar:'لغة برمجة حديثة تستخدم لتطوير تطبيقات الأندرويد.        ',
      id: "28",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286705/kotlin-1-logo_uy8lef.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 0, 255, .3)", // Blue with 80% opacity
      official_website: "https://kotlinlang.org/"
    },
    {
      category_id: "3",
      sub_category_id: "6",
      title: "Dart",
      title_ar:'دارت',
      description:
        "The programming language used with Flutter for building cross-platform apps.",
        description_ar:'لغة البرمجة المستخدمة مع Flutter لإنشاء تطبيقات مشتركة بين الأنظمة الأساسية.        ',
      id: "29",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693286704/Dart-logo_kyvlw2.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(128, 0, 128, .3)", // Purple with 80% opacity
      official_website: "https://dart.dev/"
    },
    {
      category_id: "3",
      sub_category_id: "6",
      title: "JavaScript",
      title_ar:'جافا إسكريبت',
      description:
        "Used with frameworks like Cordova for building cross-platform mobile apps.",
        description_ar:'يُستخدم مع أطر عمل مثل Cordova لبناء تطبيقات الهاتف المحمول عبر الأنظمة الأساسية.        ',
      id: "30",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693285264/Unofficial_JavaScript_logo_2.svg_z0hew3.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 165, 0, .3)", // Orange with 80% opacity
      official_website:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },

    {
      category_id: "4",
      sub_category_id: "",
      title: "Arduino",
      title_ar:'أوردوينو',
      description:
        "An open-source electronics platform based on easy-to-use hardware and software.",
        description_ar:'منصة إلكترونية مفتوحة المصدر تعتمد على أجهزة وبرامج سهلة الاستخدام.        ',
      id: "16",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693287202/arduino-logo-1_dhdhxk.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 165, 0, .3)", // Orange with 80% opacity
      official_website: "https://www.arduino.cc/"
    },
    {
      category_id: "4",
      sub_category_id: "",
      title: "Raspberry Pi",
      title_ar:'ريسبرى بى',
      description: "A tiny and affordable computer for learning programming.",
      description_ar:'جهاز كمبيوتر صغير وبأسعار معقولة لتعلم البرمجة.      ',
      id: "17",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693287202/pngwing.com_1_hkxkq6.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(128, 0, 0, .3)", // Maroon with 80% opacity
      official_website: "https://www.raspberrypi.org/"
    },
    {
      category_id: "4",
      sub_category_id: "",
      title: "BeagleBone",
      title_ar:'بيجل بون',
      description: "A low-cost, community-supported development platform.",
      description_ar:'منصة تطوير منخفضة التكلفة ومدعومة من المجتمع.      ',
      id: "18",
      logo: "https://res.cloudinary.com/duovxefh6/image/upload/v1693287201/pngwing.com_dbipor.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 128, 0, .3)", // Green with 80% opacity
      official_website: "https://beagleboard.org/"
    },
    {
      category_id: "4",
      sub_category_id: "",
      title: "Particle Photon",
      title_ar:'فوتون الجسيمات      ',
      description: "A Wi-Fi development board for creating connected projects.",
      description_ar:'لوحة تطوير Wi-Fi لإنشاء مشاريع متصلة.      ',
      id: "19",
      logo: "https://www.seekpng.com/png/detail/22-229035_particle-logo-particle-photon-logo.png",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(0, 0, 128, .3)", // Navy Blue with 80% opacity
      official_website: "https://www.particle.io/"
    },
    {
      category_id: "4",
      sub_category_id: "",
      title: "ESP8266",
      title_ar:'ESP8266',
      description: "A low-cost Wi-Fi microchip with full TCP/IP stack.",
      description_ar:'شريحة Wi-Fi صغيرة منخفضة التكلفة مزودة بمكدس TCP/IP كامل.      ',
      id: "20",
      logo: "https://www.espressif.com/sites/all/themes/espressif/logo-black.svg",
      tech_logo:
        "https://res.cloudinary.com/duovxefh6/image/upload/v1693111821/Pngtree_vector_code_optimization_icon_3994990_eg1spq.png",
      alpha_color: "rgba(255, 0, 0, .3)", // Red with 80% opacity
      official_website: "https://www.espressif.com/en/products/socs/esp8266"
    }

    // ... More technologies for Mobile Apps and other categories
  ]
};
