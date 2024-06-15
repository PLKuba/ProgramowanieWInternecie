export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        img: "/p1.svg",
        iconLists: ["/python.svg", "/blob.svg", "/linux.svg", "/flutter.svg", "/dock.svg"],
        link: "https://github.com/LogopediaNLP/LogopediaMobileApp",
    },
    {
        id: 2,
        img: "/p2.svg",
        iconLists: ["/python.svg", "/fastapi.svg", "/psql.svg", "/linux.svg", "/dock.svg"],
        link: "https://app.cryptosearch.tools/",
    },
    {
        id: 3,
        img: "/p3.svg",
        iconLists: ["/flutter.svg"],
        link: "https://github.com/PLKuba/PrezentApp",
    },
    {
        id: 4,
        img: "/p4.svg",
        iconLists: ["/react.svg", "/dock.svg", "/ts.svg", "/vite.svg"],
        link: "https://github.com/PLKuba/SpotkanieCounter",
    },
];

export interface ProjectProp {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
}

export const testimonials = [
    {
        name: "MajaFedorko",
        image: "/maja.svg"
    },
    {
        name: "EliasHohl",
        image: "/elias.svg"
    }
];

export const companies = [
    {
        id: 1,
        name: "Google",
        img: "/google.svg",
        nameImg: "/googleName.svg",
    },
    {
        id: 2,
        name: "PwC",
        img: "/pwc.svg",
        nameImg: "/pwcName.svg",
    },
    {
        id: 3,
        name: "CryptoSearchTools",
        img: "/cst.svg",
        nameImg: "/cstName.svg",
    }
];

export const workExperience = [
    {
        id: 1,
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/PLKuba"
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/jakub-niewczas-75280a220"
    },
];

export const approach = [
    {
        id: 1,
        animationSpeed: 5.1,
        containerClassName: "bg-emerald-900",
        colors: [[0, 255, 255]],
        dotSize: 3
    },
    {
        id: 2,
        animationSpeed: 4.1,
        containerClassName: "bg-black",
        colors: [
            [236, 72, 153],
            [232, 121, 249],
        ],
        dotSize: 4
    },
    {
        id: 3,
        animationSpeed: 5.1,
        containerClassName: "bg-sky-600",
        colors: [[125, 211, 252]],
        dotSize: 5
    }
]