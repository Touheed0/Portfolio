import blogApplication from "../assets/Projects/Blog Application.png";
import flipKart from "../assets/Projects/FlipKart.png";
import whatsApp from "../assets/Projects/WhatsApp.png";
import portfolio from "../assets/Projects/Portfolio.png";

const projects = [
    { id: 1, picture: blogApplication, title: "Blog Application", description: "The MERN Stack Blog Application is a fully responsive blogging platform with login/signup, blog creation, editing, deletion, and comment management. Built with MongoDB, Express.js, React.js, and Node.js, it uses JWT authentication and RESTful APIs for secure and efficient performance.", gitHub: "https://github.com/Touheed0/Blog-Application", demo: "https://blog-application-fron.onrender.com/" },

    { id: 2, picture: flipKart, title: "FlipKart Clone", description: "The MERN Stack Flipkart Clone is a fully responsive e-commerce application with login/signup, product search and filtering, and cart management. Built using MongoDB, Express.js, React.js, and Node.js, it uses RESTful APIs for seamless integration and delivers a smooth, modern shopping experience.", gitHub: "https://github.com/Touheed0/Flipkart-Clone", demo: "https://flipkart-clone-frontend-d3je.onrender.com/" },

    { id: 3, picture: whatsApp, title: "WhatsApp Clone", description: "The MERN Stack WhatsApp Clone is a fully responsive real-time chat application built with MongoDB, Express.js, React.js, and Node.js. It features Google authentication for secure login and supports one-to-one real-time messaging using Socket.io for instant communication.", gitHub: "https://github.com/Touheed0/WhatsApp-Clone", demo: "https://whatsapp-clone-frontend-tqbv.onrender.com" },

    { id: 4, picture: portfolio, title: "Portfolio Website", description: "The React Portfolio Website is a fully responsive personal portfolio showcasing Home, About, Projects, Resume, and other sections. Built with React.js, it features a modern UI and smooth navigation to present skills, experience, and projects professionally across all devices.", gitHub: "https://github.com/Touheed0/Portfolio.git", demo: "/" },
]

export default projects;