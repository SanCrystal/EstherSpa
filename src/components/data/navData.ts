import { navitem } from "../../interfaces/ui_interface";

export const navDataMain:navitem[] = [
    {
        title: 'Home',
        id: 1,
        link:"/"
    },
    {
        title: 'Services',
        id: 2,
        link:"/services",
        subLink:[
            {
                title: 'Massage Theraphy',
                id: 7,
                link:"/massage-theraphy",
            },
            {
                title: 'Facial Treatments',
                id: 8,
                link:"/facial-treatments",
            },
            {
                title: 'Body Treatments',
                id: 9,
                link:"/body-treatments",
            },
            {
                title: 'Nail Care',
                id: 11,
                link:"/care-treatments",
            },
            {
                title: 'Wellness Classes',
                id: 12,
                link:"/wellness-classes",
            },
            {
                title: 'hair care',
                id: 13,
                link:"/hair-care",
            },
        ]
    },
    {
        title: 'Shop',
        id: 3,
        link:"/shop"
    },
    {
        title: 'About Us',
        id: 4,
        link:"/about-us"
    },
    {
        title: 'Contact',
        id: 5,
        link:"/contact",
        subLink:[
            {
                title: 'Bookings',
                id: 6,
                link:"/booking",
            }
        ]
    },
    {
        title: 'Blog',
        id: 5,
        link:"/blog"
    },
]