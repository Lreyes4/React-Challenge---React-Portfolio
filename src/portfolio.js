import aboutpic from "./components/Access/IMG_2317-modified.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Lreyes4.github.io/React-Challenge---React-Portfolio/',
  title: 'Liliana Projects Portfolio',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'LILIANA REYES',
  role: 'Dental Hygienist',
  description:
    'Dental hygienist aspiring to be a software engineer.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/liliana-reyes-b67357237',
    github: 'https://github.com/Lreyes4',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Movie Tracker',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://mike-c-sanders.github.io/Movie-Tracker/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'liliana_reyes0814@yahoo.com',
}

export { header, about, projects, skills, contact }
