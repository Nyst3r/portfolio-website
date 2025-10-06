import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ENG: {
        translation: {
          navbar: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
          },
          hero: {
            greeting: "Hi, I'm",
            name: {
              first: "Ny Hanjara",
              last: "Randriakoto"
            },
            description:
              "I'm a software engineering graduate from École de technologie supérieure (ÉTS) with a passion for solving challenging problems and building reliable, efficient software and applications that just work.",
            button: "View My Work",
            scroll: "Scroll",
          },
          about: {
            title: {
              part1: "About",
              part2: "Me",
            },
            subtitle: "Software Engineer & Problem Solver",
            paragraphs: {
              p1: "I'm a software engineering graduate from École de technologie supérieure (ÉTS) with experience in backend and full-stack development. I've contributed to multiple projects using C#, .NET, React Native, JavaScript, Java and other modern technologies, focusing on creating scalable and efficient applications.",
              p2: "During my internships at Desjardins, Schneider Electric, and Owens Corning, I gained hands-on experience migrating applications, improving existing features, writing unit tests, and supporting internal tools. I enjoy solving complex technical challenges and constantly learning new technologies to deliver robust solutions.",
              p3: "Outside of development, I love traveling and exploring new cultures. I’ve visited more than 15 countries, which inspires me to bring creativity and perspective to my work. During my free time, I enjoy playing video games, cooking, going for coffee runs, and discovering new experiences.",
            },
            buttons: {
              contact: "Get In Touch",
              download: "Download CV",
            },
            skills: {
              fullstack: {
                title: "Full-Stack Development",
                description:
                  "Building scalable backend systems and responsive front-end interfaces using C#, .NET, React, and modern web technologies.",
              },
              database: {
                title: "Database & API Integration",
                description:
                  "Designing and integrating databases, REST APIs, and internal tools to streamline workflows and improve functionality.",
              },
              support: {
                title: "IT Support",
                description:
                  "Providing technical support, maintaining internal applications, and ensuring smooth operations across multiple teams.",
              },
            },
          },
          projects: {
            title: { main: "Personnal", highlight: "Projects" },
            description: "Here are some of my personal projects.",
            checkGithub: "Check My Github",
            list: [
              {
                title: "Personal website",
                description:
                  "This is my portfolio website that I built using React, TailwindCSS and Vite. It showcases my projects, skills, and contact information with smooth animations and a clean, user-friendly design.",
              },
              {
                title: "Project #2",
                description: "Building...",
              },
              {
                title: "Project #3",
                description: "Building...",
              },
            ],
          },
          skills: {
            title: {
              main: "My",
              highlight: "Skills"
            },
            categories: {
              all: "All",
              frontend: "Frontend",
              backend: "Backend",
              tools: "Tools"
            }
          },
          contact: {
            title: { main: "Get In", highlight: "Touch" },
            description:
              "Whether you have a project idea, need help with software development, or want to connect, feel free to reach out. I’m always excited to discuss new opportunities, collaborations, or potential roles.",
            contactInfoTitle: "Contact Information",
            email: "nyhanjara.randria@gmail.com",
            location: "Montreal, QC, Canada",
            connectTitle: "Connect with me",
          },
          footer: {
            rights: "All rights reserved."
          },
        },
      },

      FR: {
        translation: {
          navbar: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
          },
          hero: {
            greeting: "Salut, je suis",
            name: {
              first: "Ny Hanjara",
              last: "Randriakoto"
            },
            description:
              "Je suis diplômé en génie logiciel de l'École de technologie supérieure (ÉTS), passionné par la résolution de problèmes complexes et la création de logiciels fiables et efficaces.",
            button: "Voir mes projets",
            scroll: "Faire défiler",
          },
          about: {
            title: {
              part1: "À propos de",
              part2: "moi",
            },
            subtitle: "Ingénieur logiciel passionné par la résolution de problèmes",
            paragraphs: {
              p1: "Je suis diplômé en génie logiciel de l'École de technologie supérieure (ÉTS) avec une expérience en développement backend et full-stack. J'ai contribué à plusieurs projets utilisant C#, .NET, React Native, JavaScript, Java et d'autres technologies modernes, en me concentrant sur la création d'applications évolutives et efficaces.",
              p2: "Lors de mes stages chez Desjardins, Schneider Electric et Owens Corning, j'ai acquis une expérience pratique dans la migration d'applications, l'amélioration de fonctionnalités existantes, l'écriture de tests unitaires et le support des outils internes. J'aime résoudre des défis techniques complexes et apprendre continuellement de nouvelles technologies pour livrer des solutions robustes.",
              p3: "En dehors du développement, j'aime voyager et découvrir de nouvelles cultures. J'ai visité plus de 15 pays, ce qui m'inspire à apporter créativité et ouverture d'esprit à mon travail. Pendant mon temps libre, j'aime jouer aux jeux vidéo, cuisiner, prendre un café et découvrir de nouvelles expériences.",
            },
            buttons: {
              contact: "Me Contacter",
              download: "Télécharger mon CV",
            },
            skills: {
              fullstack: {
                title: "Développement Full-Stack",
                description:
                  "Conception de systèmes backend évolutifs et d'interfaces front-end réactives avec C#, .NET, React et les technologies web modernes.",
              },
              database: {
                title: "Base de données et intégration API",
                description:
                  "Conception et intégration de bases de données, d'API REST et d'outils internes pour améliorer les flux de travail et la fonctionnalité.",
              },
              support: {
                title: "Support informatique",
                description:
                  "Fournir un support technique, maintenir les applications internes et assurer le bon fonctionnement entre les équipes.",
              },
            },
          },
          projects: {
            title: { main: "Projets", highlight: "Personnels" },
            description: "Voici quelques-uns de mes projets personnels.",
            checkGithub: "Voir mon Github",
            list: [
              {
                title: "Site personnel",
                description:
                  "Ceci est mon portfolio que j'ai construit avec React, TailwindCSS et Vite. Il présente mes projets, mes compétences et mes coordonnées avec des animations fluides et un design clair et convivial.",
              },
              {
                title: "Projet #2",
                description: "En construction...",
              },
              {
                title: "Projet #3",
                description: "En construction...",
              },
            ],
          },
          skills: {
            title: {
              main: "Mes",
              highlight: "Compétences"
            },
            categories: {
              all: "Tous",
              frontend: "Frontend",
              backend: "Backend",
              tools: "Outils"
            }
          },
          contact: {
            title: { main: "Entrer en", highlight: "contact" },
            description:
              "Que vous ayez une idée de projet, besoin d'aide pour le développement logiciel ou que vous souhaitiez simplement entrer en contact, n'hésitez pas à me joindre. Je suis toujours enthousiaste à l'idée de discuter de nouvelles opportunités, collaborations ou postes potentiels.",
            contactInfoTitle: "Informations de contact",
            email: "nyhanjara.randria@gmail.com",
            location: "Montréal, QC, Canada",
            connectTitle: "Connectez avec moi",
          },
          footer: {
            rights: "Tous droits réservés."
          },
        },
      },
    },
    lng: "ENG", // default language
    fallbackLng: "ENG",
    interpolation: { escapeValue: false },
  });

export default i18n;
