import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  fr: {
    translation: {
      // Header
      menu: "Menu",
      home: "Accueil",
      courses: "Les cours",
      instructors: "Instructeurs",
      contact: "Contact",
      "menu.histoire": "L'histoire Drena Dance",
      "menu.meninos": "Meninos do Semba",
      "menu.afterwork": "After Work",
      "menu.gallerie": "Gallerie",
      "menu.agenda": "Agenda",

      // Hero
      "hero.title": "DRENA DANCE LUXEMBOURG — KIZOMBA, SEMBA, AFRO",
      "hero.subtitle": "Découvrez l'art de la danse africaine au Luxembourg",
      "hero.description":
        "Plongez dans l’univers vibrant de Drena Dance, le club de danse au Luxembourg où la passion unit les cœurs et fait vibrer chaque pas. Ici, la Kizomba, le Semba et les danses afro prennent vie dans une ambiance chaleureuse et conviviale. Que vous soyez débutant ou danseur confirmé, rejoignez une communauté dynamique qui partage l’amour de la danse, le plaisir de progresser et le bonheur de se retrouver sur la piste.",
      "hero.button": "Découvrir Drena Dance",
      "hero.sound_on": "Activer le son",
      "hero.sound_off": "Couper le son",

      // Footer
      "footer.rights": "Tous droits réservés",

      // Courses
      "courses.title": "Nos Cours de Kizomba",
      "courses.subtitle":
        "Découvrez notre gamme complète de cours adaptés à tous les niveaux",
      "courses.students_suffix": "élèves",
      "courses.enroll": "S'inscrire",
      "courses.items.1.title": "Kizomba Débutant",
      "courses.items.1.description":
        "Découvrez les bases de la Kizomba avec nos professeurs expérimentés. Apprenez les pas fondamentaux et la connexion avec votre partenaire.",
      "courses.items.1.level": "Débutant",
      "courses.items.1.features.0": "Pas de base",
      "courses.items.1.features.1": "Connexion",
      "courses.items.1.features.2": "Musique angolaise",
      "courses.items.1.features.3": "Technique de guidage",
      "courses.items.2.title": "Kizomba Intermédiaire",
      "courses.items.2.description":
        "Perfectionnez votre technique et explorez des figures plus complexes. Développez votre style personnel et votre musicalité.",
      "courses.items.2.level": "Intermédiaire",
      "courses.items.2.features.0": "Figures avancées",
      "courses.items.2.features.1": "Musicalité",
      "courses.items.2.features.2": "Style personnel",
      "courses.items.2.features.3": "Improvisation",
      "courses.items.3.title": "Kizomba Avancé",
      "courses.items.3.description":
        "Maîtrisez l'art de la Kizomba avec des techniques professionnelles. Développez votre créativité et votre expression artistique.",
      "courses.items.3.level": "Avancé",
      "courses.items.3.features.0": "Techniques pro",
      "courses.items.3.features.1": "Créativité",
      "courses.items.3.features.2": "Expression",
      "courses.items.3.features.3": "Chorégraphies",
      "courses.items.4.title": "Semba Traditionnel",
      "courses.items.4.description":
        "Explorez les racines de la Kizomba avec le Semba, la danse traditionnelle angolaise. Découvrez l'histoire et la culture.",
      "courses.items.4.level": "Tous niveaux",
      "courses.items.4.features.0": "Culture angolaise",
      "courses.items.4.features.1": "Histoire",
      "courses.items.4.features.2": "Tradition",
      "courses.items.4.features.3": "Musique authentique",

      // Instructors
      "instructors.title": "Nos Maîtres de Danse",
      "instructors.subtitle":
        "Des professeurs passionnés et expérimentés pour vous guider dans l'art de la Kizomba",
      "instructors.achievements": "Réalisations",
      "instructors.rating": "5.0/5",
      "instructors.items.1.name": "Carlos Mendes",
      "instructors.items.1.specialty": "Kizomba & Semba",
      "instructors.items.1.experience": "15 ans",
      "instructors.items.1.origin": "Luanda, Angola",
      "instructors.items.1.bio":
        "Originaire de Luanda, Carlos a grandi avec la Kizomba dans les rues d'Angola. Champion national de danse, il transmet avec passion l'authenticité de cette danse.",
      "instructors.items.1.achievements.0": "Champion Angola 2018",
      "instructors.items.1.achievements.1": "Formateur certifié",
      "instructors.items.1.achievements.2": "500+ élèves formés",
      "instructors.items.2.name": "Isabella Santos",
      "instructors.items.2.specialty": "Kizomba Sensuelle",
      "instructors.items.2.experience": "12 ans",
      "instructors.items.2.origin": "Lisbonne, Portugal",
      "instructors.items.2.bio":
        "Isabella a découvert la Kizomba à Lisbonne et s'est spécialisée dans l'aspect sensuel et artistique de la danse. Elle enseigne la connexion et l'expression.",
      "instructors.items.2.achievements.0": "Championne Europe 2019",
      "instructors.items.2.achievements.1": "Spécialiste connexion",
      "instructors.items.2.achievements.2": "Artiste chorégraphe",
      "instructors.items.3.name": "Miguel Rodrigues",
      "instructors.items.3.specialty": "Semba Traditionnel",
      "instructors.items.3.experience": "18 ans",
      "instructors.items.3.origin": "Benguela, Angola",
      "instructors.items.3.bio":
        "Miguel est un gardien de la tradition. Il enseigne le Semba authentique tel qu'il se danse dans les quartiers populaires d'Angola.",
      "instructors.items.3.achievements.0": "Maître Semba",
      "instructors.items.3.achievements.1": "Préservateur culturel",
      "instructors.items.3.achievements.2": "Historien de la danse",

      // Contact
      "contact.title": "Rejoignez Notre Communauté",
      "contact.subtitle":
        "Prêt à découvrir la magie de la Kizomba ? Contactez-nous dès maintenant !",
      "contact.info.title": "Informations de Contact",
      "contact.info.address": "Adresse",
      "contact.info.phone": "Téléphone",
      "contact.info.email": "Email",
      "contact.info.hours": "Horaires",
      "contact.follow": "Suivez-nous",
      "contact.form.title": "Inscrivez-vous à un cours",
      "contact.form.name": "Votre nom complet",
      "contact.form.email": "Votre email",
      "contact.form.phone": "Votre téléphone",
      "contact.form.select_course": "Sélectionnez un cours",
      "contact.form.message": "Votre message (optionnel)",
      "contact.form.submit": "Envoyer ma demande",
      "contact.map.caption": "Notre studio de danse au cœur de Paris",

      // Footer (extended)
      "footer.brand": "Drena Dance",
      // Pages
      "pages.histoire.title": "L'histoire de Drena Dance",
      "pages.histoire.intro":
        "Découvrez les origines, les valeurs et l'évolution de notre club.",
      "pages.meninos.title": "Meninos do Semba",
      "pages.meninos.intro":
        "Un hommage à la culture angolaise et aux racines du Semba.",
      "pages.cours.title": "Les Cours",
      "pages.cours.kizomba": "Kizomba",
      "pages.cours.semba": "Semba",
      "pages.cours.afro": "Afro",
      "pages.cours.kizomba_desc":
        "Cours de Kizomba pour tous niveaux, axés sur la connexion et la musicalité.",
      "pages.cours.semba_desc":
        "Semba traditionnel et moderne, énergie et culture angolaise.",
      "pages.cours.afro_desc":
        "Danse afro urbaine, expression, rythme et dynamisme.",
      "pages.afterwork.title": "Drena Dance After Work",
      "pages.afterwork.intro":
        "Des moments conviviaux pour danser, partager et se retrouver.",
      "pages.gallerie.title": "Gallerie",
      "pages.gallerie.intro": "Photos et vidéos de nos événements et cours.",
      "pages.agenda.title": "Agenda",
      "pages.agenda.intro":
        "Retrouvez nos dates de cours, after work et événements.",
      "footer.description":
        "Découvrez la passion de la Kizomba avec Drena Dance dans une ambiance chaleureuse et professionnelle. Rejoignez notre communauté de danseurs passionnés.",
      "footer.courses": "Nos Cours",
      "footer.course_beginner": "Kizomba Débutant",
      "footer.course_intermediate": "Kizomba Intermédiaire",
      "footer.course_advanced": "Kizomba Avancé",
      "footer.course_semba": "Semba Traditionnel",
      "footer.course_private": "Cours Privés",
      "footer.info": "Informations",
      "footer.info_teachers": "Nos Professeurs",
      "footer.info_contact": "Contact",
      "footer.info_prices": "Tarifs",
      "footer.info_schedule": "Horaires",
      "footer.info_events": "Événements",
      "footer.contact": "Contact",
      "footer.address": "123 Rue de la Danse\n75001 Paris, France",
      "footer.phone": "+33 1 23 45 67 89",
      "footer.email": "contact@drenadance.fr",
      "footer.rights_prefix": "",
      "footer.legal": "Mentions légales",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "CGV",
      "footer.made_with": "Fait avec",
      "footer.in_france": "en France",
    },
  },
  en: {
    translation: {
      // Header
      menu: "Menu",
      home: "Home",
      courses: "Courses",
      instructors: "Instructors",
      contact: "Contact",
      "menu.histoire": "Drena Dance Story",
      "menu.meninos": "Meninos do Semba",
      "menu.afterwork": "After Work",
      "menu.gallerie": "Gallery",
      "menu.agenda": "Schedule",

      // Hero
      "hero.title": "DRENA DANCE LUXEMBOURG — KIZOMBA, SEMBA, AFRO",
      "hero.subtitle": "Discover the art of African dance in Luxembourg",
      "hero.description":
        "Dive into the vibrant world of Drena Dance, the dance club in Luxembourg where passion brings hearts together and makes every step come alive. Here, Kizomba, Semba, and Afro dances flourish in a warm and friendly atmosphere. Whether you’re a beginner or an experienced dancer, join a dynamic community that shares the love of dance, the joy of progressing, and the happiness of meeting again on the dance floor.",
      "hero.button": "Discover Drena Dance",
      "hero.sound_on": "Turn sound on",
      "hero.sound_off": "Mute sound",

      // Footer
      "footer.rights": "All rights reserved",

      // Courses
      "courses.title": "Our Kizomba Courses",
      "courses.subtitle": "Discover our full range of courses for all levels",
      "courses.students_suffix": "students",
      "courses.enroll": "Enroll",
      "courses.items.1.title": "Beginner Kizomba",
      "courses.items.1.description":
        "Discover the basics of Kizomba with our experienced teachers. Learn the fundamental steps and partner connection.",
      "courses.items.1.level": "Beginner",
      "courses.items.1.features.0": "Basic steps",
      "courses.items.1.features.1": "Connection",
      "courses.items.1.features.2": "Angolan music",
      "courses.items.1.features.3": "Leading technique",
      "courses.items.2.title": "Intermediate Kizomba",
      "courses.items.2.description":
        "Improve your technique and explore more complex figures. Develop your personal style and musicality.",
      "courses.items.2.level": "Intermediate",
      "courses.items.2.features.0": "Advanced figures",
      "courses.items.2.features.1": "Musicality",
      "courses.items.2.features.2": "Personal style",
      "courses.items.2.features.3": "Improvisation",
      "courses.items.3.title": "Advanced Kizomba",
      "courses.items.3.description":
        "Master the art of Kizomba with professional techniques. Develop your creativity and artistic expression.",
      "courses.items.3.level": "Advanced",
      "courses.items.3.features.0": "Pro techniques",
      "courses.items.3.features.1": "Creativity",
      "courses.items.3.features.2": "Expression",
      "courses.items.3.features.3": "Choreographies",
      "courses.items.4.title": "Traditional Semba",
      "courses.items.4.description":
        "Explore the roots of Kizomba with Semba, the traditional Angolan dance. Discover history and culture.",
      "courses.items.4.level": "All levels",
      "courses.items.4.features.0": "Angolan culture",
      "courses.items.4.features.1": "History",
      "courses.items.4.features.2": "Tradition",
      "courses.items.4.features.3": "Authentic music",

      // Instructors
      "instructors.title": "Our Master Instructors",
      "instructors.subtitle":
        "Passionate and experienced teachers to guide you in the art of Kizomba",
      "instructors.achievements": "Achievements",
      "instructors.rating": "5.0/5",
      "instructors.items.1.name": "Carlos Mendes",
      "instructors.items.1.specialty": "Kizomba & Semba",
      "instructors.items.1.experience": "15 years",
      "instructors.items.1.origin": "Luanda, Angola",
      "instructors.items.1.bio":
        "Originally from Luanda, Carlos grew up with Kizomba in the streets of Angola. A national dance champion, he passionately conveys the authenticity of this dance.",
      "instructors.items.1.achievements.0": "Angola Champion 2018",
      "instructors.items.1.achievements.1": "Certified trainer",
      "instructors.items.1.achievements.2": "500+ students trained",
      "instructors.items.2.name": "Isabella Santos",
      "instructors.items.2.specialty": "Sensual Kizomba",
      "instructors.items.2.experience": "12 years",
      "instructors.items.2.origin": "Lisbon, Portugal",
      "instructors.items.2.bio":
        "Isabella discovered Kizomba in Lisbon and specialized in the sensual and artistic aspect of the dance. She teaches connection and expression.",
      "instructors.items.2.achievements.0": "Europe Champion 2019",
      "instructors.items.2.achievements.1": "Connection specialist",
      "instructors.items.2.achievements.2": "Choreographic artist",
      "instructors.items.3.name": "Miguel Rodrigues",
      "instructors.items.3.specialty": "Traditional Semba",
      "instructors.items.3.experience": "18 years",
      "instructors.items.3.origin": "Benguela, Angola",
      "instructors.items.3.bio":
        "Miguel is a guardian of tradition. He teaches authentic Semba as it is danced in Angola’s popular neighborhoods.",
      "instructors.items.3.achievements.0": "Semba Master",
      "instructors.items.3.achievements.1": "Cultural preserver",
      "instructors.items.3.achievements.2": "Dance historian",

      // Contact
      "contact.title": "Join Our Community",
      "contact.subtitle":
        "Ready to discover the magic of Kizomba? Contact us now!",
      "contact.info.title": "Contact Information",
      "contact.info.address": "Address",
      "contact.info.phone": "Phone",
      "contact.info.email": "Email",
      "contact.info.hours": "Opening Hours",
      "contact.follow": "Follow us",
      "contact.form.title": "Register for a class",
      "contact.form.name": "Your full name",
      "contact.form.email": "Your email",
      "contact.form.phone": "Your phone",
      "contact.form.select_course": "Select a course",
      "contact.form.message": "Your message (optional)",
      "contact.form.submit": "Send my request",
      "contact.map.caption": "Our dance studio in the heart of Paris",

      // Footer (extended)
      "footer.brand": "Drena Dance",
      // Pages
      "pages.histoire.title": "The Story of Drena Dance",
      "pages.histoire.intro":
        "Discover our club’s origins, values and evolution.",
      "pages.meninos.title": "Meninos do Semba",
      "pages.meninos.intro":
        "A tribute to Angolan culture and the roots of Semba.",
      "pages.cours.title": "Classes",
      "pages.cours.kizomba": "Kizomba",
      "pages.cours.semba": "Semba",
      "pages.cours.afro": "Afro",
      "pages.cours.kizomba_desc":
        "Kizomba classes for all levels, focused on connection and musicality.",
      "pages.cours.semba_desc":
        "Traditional and modern Semba, energy and Angolan culture.",
      "pages.cours.afro_desc":
        "Afro urban dance: expression, rhythm and dynamism.",
      "pages.afterwork.title": "Drena Dance After Work",
      "pages.afterwork.intro": "Friendly moments to dance, share and meet.",
      "pages.gallerie.title": "Gallery",
      "pages.gallerie.intro": "Photos and videos from our events and classes.",
      "pages.agenda.title": "Schedule",
      "pages.agenda.intro": "Find our classes, after-work and event dates.",
      "footer.description":
        "Discover the passion of Kizomba with Drena Dance in a warm and professional atmosphere. Join our community of passionate dancers.",
      "footer.courses": "Our Courses",
      "footer.course_beginner": "Kizomba Beginner",
      "footer.course_intermediate": "Kizomba Intermediate",
      "footer.course_advanced": "Kizomba Advanced",
      "footer.course_semba": "Traditional Semba",
      "footer.course_private": "Private Lessons",
      "footer.info": "Information",
      "footer.info_teachers": "Our Teachers",
      "footer.info_contact": "Contact",
      "footer.info_prices": "Prices",
      "footer.info_schedule": "Schedule",
      "footer.info_events": "Events",
      "footer.contact": "Contact",
      "footer.address": "123 Rue de la Danse\n75001 Paris, France",
      "footer.phone": "+33 1 23 45 67 89",
      "footer.email": "contact@drenadance.fr",
      "footer.rights_prefix": "",
      "footer.legal": "Legal Notice",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms",
      "footer.made_with": "Made with",
      "footer.in_france": "in France",
    },
  },
  pt: {
    translation: {
      // Header
      menu: "Menu",
      home: "Início",
      courses: "Aulas",
      instructors: "Instrutores",
      contact: "Contacto",
      "menu.histoire": "História Drena Dance",
      "menu.meninos": "Meninos do Semba",
      "menu.afterwork": "After Work",
      "menu.gallerie": "Galeria",
      "menu.agenda": "Agenda",

      // Hero
      "hero.title": "DRENA DANCE LUXEMBOURG — KIZOMBA, SEMBA, AFRO",
      "hero.subtitle": "Descubra a arte da dança africana no Luxemburgo",
      "hero.description":
        "Mergulhe no universo vibrante da Drena Dance, o clube de dança no Luxemburgo onde a paixão une corações e faz cada passo vibrar. Aqui, a Kizomba, o Semba e as danças afro ganham vida num ambiente acolhedor e amigável. Seja você iniciante ou dançarino experiente, junte‑se a uma comunidade dinâmica que partilha o amor pela dança, o prazer de evoluir e a alegria de se reencontrar na pista.",
      "hero.button": "Descobrir Drena Dance",
      "hero.sound_on": "Ativar som",
      "hero.sound_off": "Cortar som",

      // Footer
      "footer.rights": "Todos os direitos reservados",

      // Courses
      "courses.title": "Os nossos cursos de Kizomba",
      "courses.subtitle":
        "Descubra a nossa gama completa de cursos para todos os níveis",
      "courses.students_suffix": "alunos",
      "courses.enroll": "Inscrever-se",
      "courses.items.1.title": "Kizomba Iniciante",
      "courses.items.1.description":
        "Descubra o básico da Kizomba com os nossos professores experientes. Aprenda os passos fundamentais e a ligação com o parceiro.",
      "courses.items.1.level": "Iniciante",
      "courses.items.1.features.0": "Passos básicos",
      "courses.items.1.features.1": "Ligação",
      "courses.items.1.features.2": "Música angolana",
      "courses.items.1.features.3": "Técnica de condução",
      "courses.items.2.title": "Kizomba Intermédio",
      "courses.items.2.description":
        "Aperfeiçoe a sua técnica e explore figuras mais complexas. Desenvolva o seu estilo pessoal e musicalidade.",
      "courses.items.2.level": "Intermédio",
      "courses.items.2.features.0": "Figuras avançadas",
      "courses.items.2.features.1": "Musicalidade",
      "courses.items.2.features.2": "Estilo pessoal",
      "courses.items.2.features.3": "Improvisação",
      "courses.items.3.title": "Kizomba Avançado",
      "courses.items.3.description":
        "Domine a arte da Kizomba com técnicas profissionais. Desenvolva a sua criatividade e expressão artística.",
      "courses.items.3.level": "Avançado",
      "courses.items.3.features.0": "Técnicas profissionais",
      "courses.items.3.features.1": "Criatividade",
      "courses.items.3.features.2": "Expressão",
      "courses.items.3.features.3": "Coreografias",
      "courses.items.4.title": "Semba Tradicional",
      "courses.items.4.description":
        "Explore as raízes da Kizomba com o Semba, a dança tradicional angolana. Descubra a história e a cultura.",
      "courses.items.4.level": "Todos os níveis",
      "courses.items.4.features.0": "Cultura angolana",
      "courses.items.4.features.1": "História",
      "courses.items.4.features.2": "Tradição",
      "courses.items.4.features.3": "Música autêntica",

      // Instructors
      "instructors.title": "Os nossos mestres de dança",
      "instructors.subtitle":
        "Professores apaixonados e experientes para o guiar na arte da Kizomba",
      "instructors.achievements": "Conquistas",
      "instructors.rating": "5.0/5",
      "instructors.items.1.name": "Carlos Mendes",
      "instructors.items.1.specialty": "Kizomba & Semba",
      "instructors.items.1.experience": "15 anos",
      "instructors.items.1.origin": "Luanda, Angola",
      "instructors.items.1.bio":
        "Natural de Luanda, o Carlos cresceu com a Kizomba nas ruas de Angola. Campeão nacional de dança, transmite com paixão a autenticidade desta dança.",
      "instructors.items.1.achievements.0": "Campeão Angola 2018",
      "instructors.items.1.achievements.1": "Formador certificado",
      "instructors.items.1.achievements.2": "500+ alunos formados",
      "instructors.items.2.name": "Isabella Santos",
      "instructors.items.2.specialty": "Kizomba Sensual",
      "instructors.items.2.experience": "12 anos",
      "instructors.items.2.origin": "Lisboa, Portugal",
      "instructors.items.2.bio":
        "A Isabella descobriu a Kizomba em Lisboa e especializou-se no aspecto sensual e artístico da dança. Ensina a ligação e a expressão.",
      "instructors.items.2.achievements.0": "Campeã Europa 2019",
      "instructors.items.2.achievements.1": "Especialista em ligação",
      "instructors.items.2.achievements.2": "Artista coreógrafa",
      "instructors.items.3.name": "Miguel Rodrigues",
      "instructors.items.3.specialty": "Semba Tradicional",
      "instructors.items.3.experience": "18 anos",
      "instructors.items.3.origin": "Benguela, Angola",
      "instructors.items.3.bio":
        "O Miguel é um guardião da tradição. Ensina o Semba autêntico tal como se dança nos bairros populares de Angola.",
      "instructors.items.3.achievements.0": "Mestre Semba",
      "instructors.items.3.achievements.1": "Preservador cultural",
      "instructors.items.3.achievements.2": "Historiador da dança",

      // Contact
      "contact.title": "Junte-se à nossa comunidade",
      "contact.subtitle":
        "Pronto para descobrir a magia da Kizomba? Contacte-nos agora!",
      "contact.info.title": "Informações de contacto",
      "contact.info.address": "Endereço",
      "contact.info.phone": "Telefone",
      "contact.info.email": "Email",
      "contact.info.hours": "Horários",
      "contact.follow": "Siga-nos",
      "contact.form.title": "Inscreva-se numa aula",
      "contact.form.name": "O seu nome completo",
      "contact.form.email": "O seu email",
      "contact.form.phone": "O seu telefone",
      "contact.form.select_course": "Selecione um curso",
      "contact.form.message": "A sua mensagem (opcional)",
      "contact.form.submit": "Enviar o meu pedido",
      "contact.map.caption": "O nosso estúdio de dança no coração de Paris",

      // Footer (extended)
      "footer.brand": "Drena Dance",
      // Pages
      "pages.histoire.title": "A história da Drena Dance",
      "pages.histoire.intro":
        "Descubra as origens, os valores e a evolução do nosso clube.",
      "pages.meninos.title": "Meninos do Semba",
      "pages.meninos.intro":
        "Uma homenagem à cultura angolana e às raízes do Semba.",
      "pages.cours.title": "Aulas",
      "pages.cours.kizomba": "Kizomba",
      "pages.cours.semba": "Semba",
      "pages.cours.afro": "Afro",
      "pages.cours.kizomba_desc":
        "Aulas de Kizomba para todos os níveis, focadas na ligação e musicalidade.",
      "pages.cours.semba_desc":
        "Semba tradicional e moderno, energia e cultura angolana.",
      "pages.cours.afro_desc":
        "Dança afro urbana: expressão, ritmo e dinamismo.",
      "pages.afterwork.title": "Drena Dance After Work",
      "pages.afterwork.intro":
        "Momentos convívios para dançar, partilhar e reencontrar.",
      "pages.gallerie.title": "Galeria",
      "pages.gallerie.intro": "Fotos e vídeos dos nossos eventos e aulas.",
      "pages.agenda.title": "Agenda",
      "pages.agenda.intro":
        "Encontre as datas das nossas aulas, after work e eventos.",
      "footer.description":
        "Descubra a paixão da Kizomba com a Drena Dance num ambiente acolhedor e profissional. Junte-se à nossa comunidade de dançarinos apaixonados.",
      "footer.courses": "Os nossos cursos",
      "footer.course_beginner": "Kizomba Iniciante",
      "footer.course_intermediate": "Kizomba Intermédio",
      "footer.course_advanced": "Kizomba Avançado",
      "footer.course_semba": "Semba Tradicional",
      "footer.course_private": "Aulas Particulares",
      "footer.info": "Informações",
      "footer.info_teachers": "Os nossos professores",
      "footer.info_contact": "Contacto",
      "footer.info_prices": "Preços",
      "footer.info_schedule": "Horários",
      "footer.info_events": "Eventos",
      "footer.contact": "Contacto",
      "footer.address": "123 Rue de la Danse\n75001 Paris, France",
      "footer.phone": "+33 1 23 45 67 89",
      "footer.email": "contact@drenadance.fr",
      "footer.rights_prefix": "",
      "footer.legal": "Aviso legal",
      "footer.privacy": "Política de privacidade",
      "footer.terms": "Termos",
      "footer.made_with": "Feito com",
      "footer.in_france": "na França",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
