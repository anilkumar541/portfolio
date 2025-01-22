import care24 from "../src/assets/care24.jpg"
import amazon from "../src/assets/amazon.jpg"
import one from "../src/assets/one.png"

const userInfo= {
    name: "Anil Kumar",
    bio: "I’m a full-stack developer specializing in Django and React, dedicated to building efficient, scalable solutions. I deliver high-quality applications and offer freelance services that consistently exceed client expectations. Let’s connect and bring your vision to to real world!",
    stack: ["Full stack web developer", "Freelancer", "Software engineer"]
}


const skill_info= [
    {
        title: "Backend",
        skills: ["Python", "Django", "Django rest framework", "PostgresSQL", "Mysql"]
    },
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "Javascript", "ReactJS", "HTMX", "Tailwind", "Bootstrap"],
    },
]
const projectsInfo= [
    {
        title: "Care24",
        description: "Care24 is a leading home healthcare provider in India, offering a range of services such as nursing care, attendant care, elderly care, and physiotherapy",
        isLive: true,
        image: care24,
        technologies: ["Python", "Django", "React", "Postgresql", "Django rest framework", "SQL"],
        link: "https://care24.co.in/",
        github: ""
    },
    // {
    //     title: "Amazon Clone",
    //     description: "Coming soon... This is going to be a full stack project(Django and React).",
    //     isLive: false,
    //     image: amazon,
    //     technologies: ["Python", "Django", "React", "Postgresql", "Tailwind"],
    //     link: "",
    //     github: ""
    // },
    {
        title: "Online Forum Platform",
        description: "The Online Forum Platform is designed to deliver an engaging and dynamic user experience. It features tags and questions, interactive Q&A with likes and dislikes, and real-time updates powered by WebSockets. The platform ensures security with user authentication and includes search by tags and pagination for efficient content navigation. Built using Django for the backend and ReactJS for the frontend, this project provides a seamless experience for users.",
        isLive: true,
        image: one, 
        technologies: ["Django", "ReactJS", "WebSockets"],
        link: "https://classy-nasturtium-fcfe26.netlify.app/",
        github: "https://github.com/anilkumar541?tab=repositories"
      }
   
]



const experiencInfo= [
    {
        role: "Full Stack Developer",
        company: "On Demand GMBH",
        remote: true,
        location: "Austria",
        date: "Jan 2024 - Present",
        description: "Developed a robust chat system incorporating complex logic to enhance user interaction and real-time communication. Built a fully functional help center using ReactJS, integrating seamless API consumption for dynamic content. Additionally, implemented features for private posts and user management, ensuring privacy and security for sensitive user data and etc...",
        tech_stack: ["Django", "DRF", "ReactJS", "Tailwind", "PostgresSQL"]
    },
    {
        role: "Full Stack Developer",
        company: "Care24",
        remote: false,
        location: "Mumbai",
        date: "June 2023 - Oct 2023",
        description: "Redesigned and updated user profiles in ReactJS, improving the user interface and integrating profile management features on the frontend. Played a key role in enhancing the caretaker booking system to streamline user experience. Fixed critical bugs in the daily report generation system, ensuring accurate and timely data delivery. Additionally, developed a message status tracking feature, enabling functionalities such as read/unread status, read time, and reply tracking for better communication monitoring and etc...",
        tech_stack: ["Django", "DRF", "ReactJS", "Tailwind", "PostgresSQL"]
    },
    {
        role: "Full Stack Developer",
        company: "Cloudstrats",
        remote: false,
        location: "Mumbai",
        date: "May 2022 - June 2023",
        description: "Contributed to building a hiring portal for the company's HR team, with a primary focus on backend API development to manage recruitment workflows. Played a key role in a healthcare project by developing an online doctor appointment system, integrating a chatbot that collects preliminary information from users before sending it to the doctor for review, ensuring a seamless booking experience.",
        tech_stack: ["Django", "DRF", "ReactJS", "Tailwind", "Bootstrap", "PostgresSQL"]
    },
]

export {projectsInfo, skill_info, experiencInfo};
export default userInfo;



