//weird bug where it needs to be a small t
import Timer from "../pages/timer.jsx";
import Settings from "../pages/Settings.jsx";

export const ROUTES = [
    {

        //defualt path location when app.jsx starts
        path: "/",
        element: <Timer/>,
    },

    {
        path: "/Settings",
        element: <Settings/>,
    },
];