type NavItem = {
    key: string;
    url?: string;
    children?: NavItem[];
    category?: string;
    name: string;
};

export const navData: NavItem[] = [
    {
        key: "home",
        url: "/",
        category: "info",
        name: "Home",
    },
    {
        key: "about",
        url: "/about",
        category: "info",
        name: "About",
    },
    {
        key: "projects",
        name: "Projects",
        children: [
            {
                key: "project-1",
                name: "Project 1",
                url: "/projects/project-1/",
            },
            {
                key: "project-2",
                name: "Project 2",
                url: "/projects/project-2/",
            },
        ],
    },
    {
        key: "services",
        name: "Services",
        children: [
            {
                key: "service-1",
                name: "Service 1",
                url: "/services/service-1/",
            },
            {
                key: "service-2",
                name: "Service 2",
                url: "/services/service-2/",
            },
        ],
    },
    {
        key: "blog",
        url: "/blog",
        category: "info",
        name: "Blog",
    },
    {
        key: "contact",
        url: "/contact",
        name: "Contact",
        category: "info",
    },
];
