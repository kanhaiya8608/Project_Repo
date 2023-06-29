const projects = [
    {
        id: 1,
        name: "CL 1.5",
        image: "cl",
        technologies: [
            { name: "React", image: "react" },
            { name: "javascript", image: "javascript" }, { name: "HTML", image: "html" },

            { name: "TailwindCSS", image: "tailwind" },
        ],
        description: "CL 1.5 is a basic template design created using React, HTML, tailwind CSS and other popular libraries.",
        repoLink: "https://github.com/kanhaiya8608/CL1.5",
        liveLink: "https://kanhaiya-five.vercel.app/",
    },
     {
        id: 2,
        name: "Kanban Dashboard",
        image: "Kanban",
        technologies: [
            { name: "React", image: "react" },
            { name: "javascript", image: "javascript" }, { name: "HTML", image: "html" },

            { name: "TailwindCSS", image: "tailwind" }
        ],
        description: "The React Kanban project description utilizing react-beautiful-dnd is a powerful and intuitive project management tool with drag-and-drop functionality, making task organization effortless and efficient.",
        repoLink: "https://github.com/kanhaiya8608/Mercor",
        liveLink: "https://mercor-rho.vercel.app/",
    },
    {
        id: 3,
        name: "React Quiz Game",
        image: "reactquiz",
        technologies: [
            { name: "React", image: "react" },
            { name: "javascript", image: "javascript" }, { name: "HTML", image: "html" },

            { name: "TailwindCSS", image: "tailwind" }
        ],
        description: "This app allows users to answer multiple-choice questions and provides instant feedback on their responses.",
        repoLink: "https://github.com/kanhaiya8608/Merchify_assess",
        liveLink: "https://merchify-assess.vercel.app/",
    },
    {
        id: 4,
        name: "KMDB",
        image: "kmdb",
        technologies: [
            { name: "node", image: "node" }
            ,
            { name: "javascript", image: "javascript" }, ,

            { name: "css", image: "css" }
        ],
        description: "A node.js-based website that uses the TMDB API to display movie search results, including data such as date and rating.",
        repoLink: "https://github.com/kanhaiya8608/KMDb",
        liveLink: "https://kmdb-cx58.onrender.com/",
    },
    {
        id: 5,
        name: "Vertocity-Learn",
        image: "vertocity",
        technologies: [
            { name: "wordpress", image: "wordpress" }
            ,
            { name: "elementor", image: "elementor" }, ,

            { name: "css", image: "css" },
            { name: "webflow", image: "webflow" }
        ],
        description: "This app allows users to take courses to study & as per assigned course and admin can assign courses and monitor progress.",
        repoLink: "/",
        liveLink: "https://vertocity.in",
    },
    {
        id: 6,
        name: "Hulu 2.0",
        image: "hulu",
        technologies: [
            { name: "next", image: "next" }
            ,
            { name: "react", image: "react" }, ,

            { name: "tailwind", image: "tailwind" },
        ],
        description: "This app allows user to filter movies and tv series based on different filters such as horror, comedy, romance etc.  ",
        repoLink: "https://github.com/kanhaiya8608/Hulu-2.0",
        liveLink: "https://hulu-clone-2-0.vercel.app/",
    },
    {
        id: 7,
        name: "ARK Enterprise",
        image: "ark",
        technologies: [
            { name: "laravel", image: "laravel" }
            ,
            { name: "php", image: "php" }, ,

            { name: "mysql", image: "mysql" },
            { name: "html", image: "html" },
            { name: "css", image: "css" },
        ],
        description: "Revamped property management site with modern design and Laravel, Bootstrap4, and responsive design technologies.   ",
        repoLink: "https://github.com/kanhaiya8608/Laravel-Project-ARK-enterprise",
        liveLink: "https://laravel-project-ark-enterprise-nuth-bwi08sj59-kanhaiya8608.vercel.app/",
    },
    {
        id: 8,
        name: "Password gen",
        image: "pass",
        technologies: [
            { name: "react", image: "react" }
            ,
            { name: "html", image: "html" },
            { name: "css", image: "css" },
        ],
        description: "Creates random password using various settings such as include uppercase, lowercase, symbols and shows strength.   ",
        repoLink: "https://github.com/kanhaiya8608/Password_gen",
        liveLink: "https://passgen24.netlify.app/",
    },
    {
        id: 9,
        name: "Drum Kit",
        image: "drum",
        technologies: [
            { name: "javascript", image: "javascript" }
            ,
            { name: "html", image: "html" },
            { name: "css", image: "css" },
        ],
        description: "A basic drum kit application which uses HTML, CSS, Javascript and functionalities of Document Object Model manipulation.   ",
        repoLink: "https://github.com/kanhaiya8608/Drum-Kit",
        liveLink: "https://drumo2.netlify.app/",
    },
    {
        id: 10,
        name: "Simon Game",
        image: "simon",
        technologies: [
            { name: "javascript", image: "javascript" }
            ,
            { name: "html", image: "html" },
            { name: "css", image: "css" },
        ],
        description: "A basic Simon gaame application which uses HTML, CSS, Javascript, jQuery & and functionalities of Document Object Model manipulation .   ",
        repoLink: "https://github.com/kanhaiya8608/SimonGame",
        liveLink: "https://simongame003.netlify.app/",
    },
    {
        id: 11,
        name: "Kanhaiya-Portfolio",
        image: "kanhaiyap",
        technologies: [
            { name: "html", image: "html" },
            { name: "css", image: "css" },
        ],
        description: "A basic portfolio website based on basic html, css and fundamentals of web development such as responsive designing, positioning etc. ",
        repoLink: "https://github.com/kanhaiya8608/SimonGame",
        liveLink: "https://kanhaiyafort.netlify.app/",
    },
    {
        id: 12,
        name: "Tin dog",
        image: "tindog",
        technologies: [
            { name: "bootstrap", image: "bs" }
            ,
            { name: "html", image: "html" },
            { name: "css", image: "css" },
        ],
        description: "A basic one page application that uses basic implementations of web development such as HTML, CSS, Bootstrap and responsive design.   ",
        repoLink: "https://github.com/kanhaiya8608/TinDog",
        liveLink: "https://tindog82.netlify.app/",
    },
    {
        id: 13,
        name: "The Beast website",
        image: "beast",
        technologies: [
            { name: "html", image: "html" },
            { name: "css", image: "css" },
        ],
        description: "A basic introductory gym website made using html, css specificaaly focussed on marketing and create customers.   ",
        repoLink: "hhttps://github.com/kanhaiya8608/The-Beast-Factory",
        liveLink: "https://thebeastfactory.netlify.app/"
    }


];

export default projects;
