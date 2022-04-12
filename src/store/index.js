import { createStore } from "vuex"

export default createStore({
  state: {
    profile: {
      name: "M'HAMMED",
      surname: "TALHAOUY",
      birthDay: new Date(1997, 5, 27),
      startDescription: "Hello I’m M'hammed",
      description:
        ", a Full Stack PHP developer, Morocco.  #OpenSource enthusiast with industry experience building websites and web applications. I specialize in Laravel, Vue.js & Tailwind.css! ",
    },
    technologies: {
      programming: [
        { name: "HTML & (S)CSS", level: 95 },
        { name: "Javascript (ES5+)", level: 90 },
        { name: "Typescript", level: 80 },
        { name: "PHP", level: 90 },
        { name: "C", level: 60 },
        { name: "Vuex", level: 90 },
        { name: "Redux", level: 70 },
      ],
      frameworks: [
        { name: "Laravel", level: 80 },
        { name: "Vue.js", level: 95 },
        { name: "React.js", level: 80 },
        { name: "Tailwind.css", level: 90 },
        { name: "Bootstrap", level: 80 },
        { name: "Jquery", level: 70 },
        { name: "PHPUnit", level: 70 },
      ],
      tools: [
        { name: "git(hub)" },
        { name: "UML" },
        { name: "Mysql" },
        { name: "Docker" },
      ],
    },
    projects: [
      {
        name: "distance routing",
        description: "React and TOM_TOM_API",
        link: "https://github.com/tal7aouy/distance-routing",
        startDate: "JUL 15 ,2021",
        endDate: "JUL 17 ,2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#React" },
          { name: "#web" },
          { name: "#delivery" },
        ],
      },
      {
        name: "Formation App",
        description: "Laravel 8 & jetstream laravel",
        link: "https://github.com/tal7aouy/formation-app",

        startDate: "JUN 1 ,2021",
        endDate: "JUN 15 ,2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#course" },
          { name: "#Laravel" },
          { name: "#vue" },
          { name: "#Inertia" },
          { name: "#tailwind.css" },
        ],
      },
      {
        name: "Management Employees",
        description:
          "A web application help you manage employees, cities, states, departments ...",
        link: "https://github.com/tal7aouy/employees-management",
        startDate: "AUG 4,2021",
        endDate: "AUG 17,2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#Laravel" },
          { name: "#vue" },
          { name: "#Inertia" },
          { name: "#tailwind.css" },
        ],
      },

      {
        name: "MVC Framework",
        description:
          "A mini framework by php language to improve my skills on PHP",
        link: "https://github.com/tal7aouy/php-framework",
        startDate: "Apr 10, 2021",
        endDate: "Apr 15, 2021",
        developer: "tal7aouy",
        tags: [{ name: "#opensource" }, { name: "#PHP" }],
      },
      {
        name: "Slide Stories",
        description: "A slide stories using Vue.js 3 and Tailwind.css",
        link: "https://github.com/tal7aouy/slide-stories",
        startDate: "Oct 27, 2021",
        endDate: "Oct 27, 2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#Vue.js" },
          { name: "#Tailwind.css" },
        ],
      },
      {
        name: "Theme",
        description:
          "A Visual Studio Code theme for those of us who like to code late into the night!",
        link: "https://github.com/tal7aouy/theme",
        startDate: "Oct 8, 2021",
        endDate: "Oct 12, 2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#Theme" },
          { name: "#Vscode" },
        ],
      },
      {
        name: "Cart",
        description:
          " A simple PHP shopping cart library to use in ecommerce web applications ",
        link: "https://github.com/tal7aouy/Cart",
        startDate: "Nov 17, 2021",
        endDate: "Nov 19, 2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#PHP" },
          { name: "#Vscode" },
          { name: "#Cart-PHP" },
          { name: "#Shopping Cart" },
        ],
      },
      {
        name: "Lara-settings",
        description:
          " 💥 laravel settings is a Laravel package that allow you to add settings to your application. ",
        link: "https://github.com/tal7aouy/lara-settings",
        startDate: "Nov 19, 2021",
        endDate: "Nov 21, 2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#PHP" },
          { name: "#Vscode" },
          { name: "#Laravel settings" },
          { name: "#Laravel" },
          { name: "#Settings" },
        ],
      },
      {
        name: "Memory Cart Game",
        description: " Memory game is a game built for fun, using Vue.js 3 ",
        link: "https://github.com/tal7aouy/memory-card-vue",
        startDate: "Mar 7, 2021",
        endDate: "Mar 7, 2021",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#Vuejs3" },
          { name: "#Vscode" },
          { name: "#Composition Api" },
          { name: "#VueJs" },
        ],
      },
      {
        name: "Aveta",
        description:
          "Convert long numbers into abbreviated and human-readable strings on an easy way.",
        link: "https://github.com/tal7aouy/aveta",
        startDate: "Jan 10, 2022",
        endDate: "Jan 28, 2022",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#Ts" },
          { name: "#Typescript" },
          { name: "#Long Numbers" },
          { name: "#convert" },
          { name: "#human-readable" },
        ],
      },
      {
        name: "vscode-icons",
        description:
          "This icon theme is made to be used with Visual Studio Code.",
        link: "https://github.com/tal7aouy/vscode-icons",
        startDate: "Jan 20, 2022",
        endDate: "Jan 25, 2022",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#Ts" },
          { name: "#Typescript" },
          { name: "#vscode icons" },
          { name: "#icons" },
          { name: "#visual studio code" },
        ],
      },
      {
        name: "Vue Dashboard",
        description:
          "VueBoard - Admin dashboard built Vue 3, Tailwind CSS and TypeScript .",
        link: "https://github.com/tal7aouy/vue-board",
        startDate: "Mar 01, 2022",
        endDate: "Mar 09, 2022",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#typescript" },
          { name: "#Vuejs" },
          { name: "#Tailwind.css" },
        ],
      },
      {
        name: "Vuetify Dashboard",
        description: "An Admin Dashboard based on Vuetify material ",
        link: "https://github.com/vision-ui/beautify",
        startDate: "Mar 18, 2022",
        endDate: "Apr 04, 2022",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#Vuetify" },
          { name: "#Dashboard" },
          { name: "#Vuejs" },
          { name: "#admin dashboard" },
        ],
      },
      {
        name: "Larastream",
        description:
          "easiest way to implement Socialite for Laravel Jetstream. ",
        link: "https://github.com/tal7aouy/larastream",
        startDate: "Apr 01, 2022",
        endDate: "Apr 12, 2022",
        developer: "tal7aouy",
        tags: [
          { name: "#opensource" },
          { name: "#php" },
          { name: "#Laravel" },
          { name: "#Jetstream" },
          { name: "#Socialite" },
          { name: "#Tailwind.css" },
        ],
      },
    ],
    events: [
      {
        name: "ChickenSpot ",
        description:
          "I work in this company as a Full Stack developer, I mostly use  Bootstrap & Laravel!",
        role: "Full Stack Developer ",
        type: "Work",
        startDate: "Jan 2020",
        endDate: "Jun 2020",
        roles: [
          {
            description: "Developed and maintained restaurant web application.",
          },
          {
            description:
              "Developed,tested and maintained web applications that work on various devices and browsers.",
          },
        ],
      },
      {
        name: "fiverr & Khmasat",
        description: "I working as a  PHP developer!",
        role: "Full Stack Developer ",
        type: "Freelance",
        startDate: "Jan 2022",
        endDate: "Present",
        roles: [
          {
            description:
              "Developed and maintained many website for customerss.",
          },
          {
            description:
              "Developed,tested and maintained web applications that work on various devices and browsers.",
          },
        ],
      },
    ],
    socials: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/tal7aouy/",
        icon: "fab fa-linkedin",
      },
      {
        name: "Github",
        link: "https://github.com/tal7aouy",
        icon: "fab fa-github",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/tal7aouy",
        icon: "fab fa-twitter",
      },
      {
        name: "stack",
        link: "https://stackoverflow.com/users/14920101/mhammed-talhaouy",
        icon: "fab fa-stack-overflow",
      },
      // stack
    ],
  },

  getters: {
    age: (state) => {
      let ageDiff = Date.now() - state.profile.birthDay
      let ageDate = new Date(ageDiff)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    },
    profile: (state) => state.profile,
    projects: (state) => state.projects,
    technologies: (state) => state.technologies,
    events: (state) => state.events,
    socials: (state) => state.socials,
  },
  mutations: {},
  actions: {},
})
