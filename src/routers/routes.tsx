import { About, Contact, Homepage, Services } from "../views";

const viewsUrls: any[] = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        type: "public",
        id: '1'
    },
    {
        path: "/about",
        exact: true,
        component: About,
        type: "public",
        id: '2'
    },
    {
        path: "/services",
        exact: true,
        component: Services,
        type: "public",
        id: '3'
    },
    {
        path: "/contact",
        exact: true,
        component: Contact,
        type: "public",
        id: '4'
    }
];

export default viewsUrls;