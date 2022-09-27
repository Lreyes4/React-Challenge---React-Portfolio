import aboutpic from "./components/Access/IMG_2317-modified.png"

const header = {
  
  homepage: 'https://github.com/Lreyes4',
  title: 'Liliana Projects Portfolio',
}

const about = {
  photo:aboutpic,
  
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
 
  {
    name: 'New Password Generator',
    description:
      'Prompt user with questions to figure out what kind of password they want',
    sourceCode: 'https://github.com/Lreyes4/new-password-generator',
    livePreview: 'https://github.com/Lreyes4',
  },
  {
    name: 'Weather Forecaster',
    description:
      'Weather_forecaster allows you to look up weather by city name. Can also see weather up to five days out. City name, icon that indicates weather conditions, temperature, humidity, wind speed and UV index are dilpsyed for that city.',
    sourceCode: 'https://github.com/Lreyes4/weather_forcaster',
    livePreview: 'https://github.com/Lreyes4',
  },
  {
    name: 'Hourly Agenda',
    description:
      'A simple agenda that helps you keep track of your daily schedule by the hour. Past events are displayed in grey, red are current hour events, and green are future events.',
    sourceCode: 'https://github.com/Lreyes4/hourly_agenda',
    livePreview: 'https://github.com/Lreyes4',
  },
  {
    name: 'Generate ReadMe',
    description:
      'Creates a readme',
    sourceCode: 'https://github.com/Lreyes4/generate-readme',
    livePreview: 'https://github.com/Lreyes4',
  }
  ,
  {
    name: 'Pantry Pal',
    description:
      'An app that lets you find a recipe with what is already in your pantry',
    sourceCode: 'https://github.com/itsmejustino/Pantry-Pal',
    livePreview: 'https://github.com/Lreyes4',
  }
]

const skills = [
  
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
  
  email: 'liliana_reyes0814@yahoo.com',
}

export { header, about, projects, skills, contact }