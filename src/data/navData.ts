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
        name: "About Us",
    },
    // {
    //     key: "projects",
    //     name: "Projects",
    //     children: [
    //         {
    //             key: "project-1",
    //             name: "Project 1",
    //             url: "/projects/project-1/",
    //         },
    //         {
    //             key: "project-2",
    //             name: "Project 2",
    //             url: "/projects/project-2/",
    //         },
    //     ],
    // },
    {
        key: "services",
        name: "Services",
        children: [
            {
                key: "web-design",
                name: "Web Design",
                url: "/services/web-design",
            },
            {
                key: "custom-software",
                name: "Custom Software Solutions",
                url: "/services/custom-software/",
            },
            {
                key: "tool-integrations",
                name: "Tool Integrations",
                url: "/services/tool-integrations/",
            },
            {
                key: "process-automations",
                name: "Process Automations",
                url: "/services/process-automations/",
            },
        ],
    },
    // {
    //     key: "blog",
    //     url: "/blog",
    //     category: "info",
    //     name: "Blog",
    // },
    {
        key: "contact",
        url: "/contact",
        name: "Contact",
        category: "info",
    },
];
