export const navMenu = [
    {
        id: 101,
        name: "Home",
        isSubMenu: true,
        subMenu: [
            {
                id: 101.1,
                name: "Home 1",
                link: "/",
            },
            {
                id: 101.2,
                name: "Home 2",
                link: "/home-two",
            }
        ],
    },
    {
        id: 102,
        name: "Games",
        isSubMenu: true,
        subMenu: [
            {
                id: 102.1,
                name: "Games",
                link: "/games",
            },
            {
                id: 102.2,
                name: "Games Details",
                link: "/games/1",
            }
        ],
    },
    {
        id: 103,
        name: "Careers",
        isSubMenu: true,
        subMenu: [
            {
                id: 103.1,
                name: "Careers - 01",
                link: "/careers-one",
            },
            {
                id: 103.2,
                name: "Careers - 02",
                link: "/careers-two",
            },
            {
                id: 103.3,
                name: "Career Details",
                link: "/careers-one/1",
            }
        ],
    },
    {
        id: 104,
        name: "Pages",
        isSubMenu: true,
        subMenu: [
            {
                id: 104.1,
                name: "About Us",
                link: "/about"
            },
            {
                id: 104.2,
                name: "Blogs",
                link: "/blogs"
            },
            {
                id: 104.3,
                name: "Blogs Details",
                link: "/blogs/3"
            },
            {
                id: 104.4,
                name: "Faq",
                link: "/faq"
            },
            {
                id: 104.5,
                name: "Terms",
                link: "/terms-conditions"
            },
            {
                id: 104.6,
                name: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                id: 104.7,
                name: "Error Page",
                link: "/404"
            },
        ],
    },
    {
        id: 105,
        name: "Contact Us",
        isSubMenu: false,
        link: "/contact",
    }
];
