import Home from "../views/Home";
import CreateEvent from "../views/CreateEvent";
import CreateUser from "../views/CreateUser";

export const baseUrl = {
    home: '/home',
    createUser: '/create-user',
    createEvent: '/create-event',
};

export const paths = [
    {
        path: baseUrl.home,
        component:  Home
    },
    {
        path: baseUrl.createEvent,
        component:  CreateEvent
    },
    {
        path: baseUrl.createUser,
        component:  CreateUser
    }
]