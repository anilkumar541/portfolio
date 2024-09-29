import care24 from "../src/assets/care24.jpeg"
import swiggy from "../src/assets/swiggy.png"
import amazon from "../src/assets/amazon.jpg"

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
        description: "this is the project description",
        isLive: true,
        image: care24,
        technologies: ["Python", "Django", "React", "Postgresql", "Django rest framework"],
        link: "https://care24.co.in/",
        github: "https://github.com/anilkumar541/data_table"
    },
    {
        title: "Swiggy Clone",
        description: "this is the project description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debi",
        isLive: false,
        image: swiggy,
        technologies: ["Python", "Django", "React", "Postgresql"],
        link: "https://care24.co.in/",
        github: "https://github.com/anilkumar541/data_table"
    },
    {
        title: "Amazon Clone",
        description: "this is the project description",
        isLive: false,
        image: amazon,
        technologies: ["Python", "Django", "React", "Postgresql"],
        link: "https://care24.co.in/",
        github: "https://github.com/anilkumar541/data_table"
    },
    {
        title: "Amazon Clone",
        description: "this is the project description",
        isLive: false,
        image: amazon,
        technologies: ["Python", "Django", "DRF", "React", "Postgresql", "API", "Postman"],
        link: "https://care24.co.in/",
        github: "https://github.com/anilkumar541/data_table"
    },
]



const experiencInfo= [
    {
        role: "Full Stack Developer",
        company: "On Demand GMBH",
        remote: true,
        location: "Austria",
        date: "Jan 2024 - Present",
        description: "As a full stack developer, I design and build scalable web applications, focusing on API development and integration. I specialize in both front-end and back-end development, using frameworks like React and Django. My work includes consuming third-party APIs, ensuring seamless functionality, and optimizing applications for performance and security.",
        tech_stack: ["Django", "DRF", "ReactJS", "Tailwind", "PostgresSQL"]
    },
    {
        role: "Full Stack Developer",
        company: "Care24",
        remote: false,
        location: "Mumbai",
        date: "June 2023 - Oct 2023",
        description: "As a full stack developer, I design and build scalable web applications, focusing on API development and integration. I specialize in both front-end and back-end development, using frameworks like React and Django. My work includes consuming third-party APIs, ensuring seamless functionality, and optimizing applications for performance and security.",
        tech_stack: ["Django", "DRF", "ReactJS", "Tailwind", "PostgresSQL"]
    },
    {
        role: "Full Stack Developer",
        company: "Cloudstrats",
        remote: false,
        location: "Mumbai",
        date: "May 2022 - June 2023",
        description: "As a full stack developer, I design and build scalable web applications, focusing on API development and integration. I specialize in both front-end and back-end development, using frameworks like React and Django. My work includes consuming third-party APIs, ensuring seamless functionality, and optimizing applications for performance and security.",
        tech_stack: ["Django", "DRF", "ReactJS", "Tailwind", "PostgresSQL"]
    },
]

export {projectsInfo, skill_info, experiencInfo};
export default userInfo;



