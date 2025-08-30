export type PricingItem = {
    packageName: string;
    price: string;
    priceSubtext: string;
    shortDesc: string;
    features: { text: string; disabled: boolean }[];
    highlighted?: boolean;
};

export const websitePricingItems: PricingItem[] = [
    {
        packageName: "Lump Sum",
        price: "$3500",
        priceSubtext: "Up Front",
        shortDesc: "Standard 5 page website package",
        features: [
            {
                text: "Custom built 5 page website, no page builders.",
                disabled: false,
            },
            { text: "$25/month hosting", disabled: false },
            { text: "$100 fee for every page after 5.", disabled: false },
            {
                text: "$50/month unlimited edits add-on (yearly subscription).",
                disabled: false,
            },
            { text: "$250 to add a blog.", disabled: false },
            {
                text: "Free or low-cost integrations available for embedding widgets (depending on scope of work).",
                disabled: false,
            },
            { text: "24/7 support.", disabled: true },
        ],
    },
    {
        packageName: "Monthly",
        price: "$200",
        priceSubtext: "per month",
        shortDesc: "Standard 5 page website package",
        highlighted: true,
        features: [
            {
                text: "Custom built 5 page website, no page builders.",
                disabled: false,
            },
            { text: "Hosting included.", disabled: false },
            { text: "Unlimited edits.", disabled: false },
            { text: "24/7 support.", disabled: false },
            { text: "$100 fee for every page after 5.", disabled: false },
            { text: "$250 to add a blog.", disabled: false },
            {
                text: "Free or low-cost integrations available for embedding widgets (depending on scope of work).",
                disabled: false,
            },
        ],
    },
    {
        packageName: "eCommerce",
        price: "$8,000",
        priceSubtext: "and up",
        shortDesc: "Custom Shopify Store",
        features: [
            {
                text: "Configure your store and requisite apps.",
                disabled: false,
            },
            { text: "Hosting included.", disabled: false },
            { text: "Integrated shipping.", disabled: false },
            {
                text: "Shopify Content Management System interface.",
                disabled: false,
            },
            {
                text: "Free or low-cost integrations available for embedding widgets (depending on scope of work).",
                disabled: false,
            },
        ],
    },
];

export const customSoftwareItems: PricingItem[] = [
    {
        packageName: "Process Automations",
        price: "Call Us",
        priceSubtext: "",
        shortDesc:
            "Automate the tedious parts of your business and focus on what matters. We can write anything from one-off scripts, scheduled processes, to full blown web applications to level up your business.",
        features: [
            {
                text: "In-depth consultation to understand your needs.",
                disabled: false,
            },
            {
                text: "Custom software development from the ground up.",
                disabled: false,
            },
            {
                text: "Security first mindset. We prioritize security at every stage from development to deployment.",
                disabled: false,
            },
            { text: "Integration with existing systems.", disabled: false },
            { text: "Ongoing support and maintenance.", disabled: false },
            {
                text: "Flexible pricing models (fixed, hourly, retainer).",
                disabled: false,
            },
        ],
    },
    {
        packageName: "Tool Integrations",
        price: "Call Us",
        priceSubtext:
            "Have multiple systems that you move data between between endlessly? Let us help you streamline your processes to save time and reduce errors.",
        shortDesc: ".",
        features: [
            {
                text: "In-depth consultation to understand your needs.",
                disabled: false,
            },
            {
                text: "Custom software development from the ground up.",
                disabled: false,
            },
            {
                text: "Security first mindset. We prioritize security at every stage from development to deployment.",
                disabled: false,
            },
            { text: "Integration with existing systems.", disabled: false },
            { text: "Ongoing support and maintenance.", disabled: false },
            {
                text: "Flexible pricing models (fixed, hourly, retainer).",
                disabled: false,
            },
        ],
    },
    {
        packageName: "Custom Solutions",
        price: "Call Us",
        priceSubtext:
            "Have a bespoke project in mind? We have experience building enterprise web applications and cloud solutions. Give us a call and let's discuss your project. No strings attached.",
        shortDesc: ".",
        features: [
            {
                text: "In-depth consultation to understand your needs.",
                disabled: false,
            },
            {
                text: "Custom software development from the ground up.",
                disabled: false,
            },
            {
                text: "Security first mindset. We prioritize security at every stage from development to deployment.",
                disabled: false,
            },
            { text: "Integration with existing systems.", disabled: false },
            { text: "Ongoing support and maintenance.", disabled: false },
            {
                text: "Flexible pricing models (fixed, hourly, retainer).",
                disabled: false,
            },
        ],
    },
];
