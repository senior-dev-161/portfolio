import { PageMeta } from "@lib/types"

const myImage = "/images/logo.png"

const pageMeta: PageMeta = {
  home: {
    title: "Cooper Witzberger",
    description: "Hello, I am Cooper Witzberger. I'm an AI & Full-Stack Developer who helps businesses launch scalable web applications and integrate AI solutions.",
    image: myImage,
    keywords: "Cooper Witzberger's Portfolio, Cooper's blog, top blog sites, top 10 blog sites, best blog sites, best portfolio template, best programming blogs",
  },
  projects: {
    title: "Projects",
    description: "I've been making various types of projects some of them were basics and some of them were complicated.",
    image: myImage,
    keywords: "projects, work, side project",
  },
  about: {
    title: "About",
    description: "Hello, I am Cooper Witzberger. Experienced professional AI &Full Stack Developer who enjoys developing innovative software solutions that are tailored to customer desirability and usability.",
    image: myImage,
    keywords: "about, about me, about Cooper, who is Cooper, Cooper, about Cooper, portfolio about page",
  },

  contact: {
    title: "Contact",
    description: "Do you have something on your mind that you'd like to discuss? Whether it's work-related or simply a casual conversation, I'm here and eager to lend an ear. Please don't hesitate to get in touch with me at any time.",
    image: myImage,
    keywords: "contact, contact page, Cooper Witzberger Contact, contact Cooper",
  },
}

export default pageMeta
