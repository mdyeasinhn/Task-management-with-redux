
import App from "../App";
import User from "../pages/Users/Users";
import Task from "../pages/task/Task";
import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                index : true,
                element : <Task/>
            },
            {
                path: "users",
                element : <User/>
            }
        ]
    }
]);


export default routes;