import {bronze,gold, silver, wifi} from "./assets/images/index.js"

const logotext = "Personal Trainer";
const meta = {
    title: "Carlos Maccay",
    description: "Desc",
};

const introdata = {
    title: "I’m Carlos Macaay",
    animated: {
        first: "I am a Fintess Trainer",
    },
    description: "dsk.",
    your_img_url: "https://photos.app.goo.gl/57FizjbcZgsW6jXF6",
};

const dataabout = {
    title: "My background",
    aboutme: "Experience.",
};
const worktimeline = [{
    plan: "Plans:",
    details: "Details:",
    cost: "Cost:",
    sessions:"Sessions"
    },
    {
        plan: "Bronze",
        img:[bronze],
        details: "",
        cost: "$50 1/2 Hr.",
        sessions:"Sessions"
    },
    {
        plan: "Silver",
        img:[silver],
        details: "",
        cost: "$75 Hr.",
        sessions:"Sessions"
    },
    {
        plan: "Gold",
        img:[gold],
        details: "I train with you.",
        cost: "$100 Hr.",
        sessions:"Sessions"
    },
    {
        plan: "Online",
        img:[wifi],
        details:"Pdf file with all workouts including Sets, Reps and video guides",
        cost: "$75 Per Course",
        sessions:"Sessions"
    },
];

const skills = [{
        name: "Cardio",
        value: 90,
    },
];

const services = [{
        title: "Placeholder",
        description: "random",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "desk",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};