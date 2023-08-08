import {bronze,
    gold,
    silver,
    wifi,
    mainimg,
    progress1,
    progress2,
    progress3,
    progress4
} from "./assets/images/index.js"

const logotext = "Personal Trainer";
const meta = {
    title: "Mac Method",
    description: "Desc",
};

const introdata = {
    title: "I’m Carlos Macaay",
    animated: {
        first: "Are you ready for the MacMethod?",
    },
    description: "I am an inspiring fitness influencer that started my fitness journey in 2017. Over the years I have grown an extreme passion for fitness, and I strive to aspire others to start their own journey.",
    your_img_url: [mainimg],
};

const dataabout = {
    title: "My background",
    aboutme: "Experience.",
};
const worktimeline = [{
    plan: "",
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

// const skills = [{
//         name: "Cardio",
//         value: 90,
//     },
// ];

const services = [{
    img: [bronze],
    title: "Bronze",
    description: "Details on bronze plan",
    sessions:"amount of sessions",
    timePerSession:"1/2 Hour",
    cost:"$70",
    },
    {
    img: [silver],
    title: "Silver",
    description: "Details on bronze plan",
    sessions:"amount of sessions",
    timePerSession:"1/2 Hour",
    cost:"$70",
    },
    {
    img: [gold],
    title: "Gold",
    description: "Details on bronze plan",
    sessions:"amount of sessions",
    timePerSession:"1/2 Hour",
    cost:"$70",
    },
    {
    img: [wifi],
    title: "Online",
    description: "Details on bronze plan",
    sessions:"amount of sessions",
    timePerSession:"1/2 Hour",
    cost:"$70",
    },
];

const dataportfolio = [{
        img: [progress1],
        description: "Description",
        link: "#",
    },
    {
        img: [progress2],
        description: "Description",
        link: "#",
    },
    {
        img: [progress3],
        description: "Description",
        link: "#",
    },
    {
        img: [progress4],
        description: "Description",
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
    instagram: "https://www.instagram.com/macmethod_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    tiktok: "https://www.tiktok.com/@macmethodlifts?_t=8ecuMCwMNFy&_r=1",
    youtube:"https://www.youtube.com/@Mac_Method",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    // skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};