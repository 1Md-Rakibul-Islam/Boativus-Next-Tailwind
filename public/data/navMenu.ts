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
            },
            {
                id: 101.3,
                name: "Home 3",
                link: "/home-three",
            },
            {
                id: 101.4,
                name: "Home 4",
                link: "/home-four",
            },
            {
                id: 101.5,
                name: "Home 5",
                link: "/home-five",
            },
            {
                id: 101.6,
                name: "Home 6",
                link: "/home-six",
            },
        ],
    },
    {
        id: 102,
        name: "Yacht",
        isSubMenu: false,
        link: "/yacht",
    },
    {
        id: 103,
        name: "About",
        isSubMenu: false,
        link: "/about",
    },
    {
        id: 104,
        name: "Services",
        isSubMenu: false,
        link: "/services",
    },
    {
        id: 105,
        name: "Shop",
        isSubMenu: true,
        subMenu: [
            {
                id: 105.1,
                name: "Shop - 01",
                link: "/shop-one",
            },
            {
                id: 105.2,
                name: "Shop - 02",
                link: "/shop-two",
            },
            {
                id: 105.3,
                name: "Career Details",
                link: "/shop-one/1",
            }
        ],
    },
    {
        id: 106,
        name: "Pages",
        isSubMenu: true,
        subMenu: [
            {
                id: 106.1,
                name: "About Us",
                link: "/about"
            },
            {
                id: 106.2,
                name: "Blogs",
                link: "/blogs"
            },
            {
                id: 106.3,
                name: "Blogs Details",
                link: "/blogs/3"
            },
            {
                id: 106.4,
                name: "Faq",
                link: "/faq"
            },
            {
                id: 106.5,
                name: "Terms",
                link: "/terms-conditions"
            },
            {
                id: 106.6,
                name: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                id: 106.7,
                name: "Error Page",
                link: "/404"
            },
        ],
    },
    {
        id: 107,
        name: "Contact Us",
        isSubMenu: false,
        link: "/contact",
    }
];
