import { About, Booking, Contact, Homepage, Services, Success } from "../views";
import { LandingPage } from "../views/Homepage";

const viewsUrls: any[] = [
    {
        path: "/",
        exact: true,
        component: LandingPage,
        type: "public",
        id: '1'
    },
    {
        path: "/:lang/novatascrystal",
        exact: true,
        component: Homepage,
        type: "public",
        id: '1'
    },
    {
        path: "/:lang/about",
        exact: true,
        component: About,
        type: "public",
        id: '2'
    },
    {
        path: "/:lang/novatascrystal/about",
        exact: true,
        component: About,
        type: "public",
        id: '2'
    },
    {
        path: "/:lang/services",
        exact: true,
        component: Services,
        type: "public",
        id: '3'
    },
    {
        path: "/:lang/contact",
        exact: true,
        component: Contact,
        type: "public",
        id: '4'
    },
    {
        path: "/:lang/booking",
        exact: true,
        component: Booking,
        type: "public",
        id: '5'
    },
    {
        path: "/:lang/novatascrystal/thank-you",
        exact: true,
        component: Success,
        type: "public",
        id: '6'
    }
];

export default viewsUrls;