import BookDetail from "../../pages/BookDetail";
import Homepage from "../../pages/Homepage";
import Layout from "../../pages/Layout";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index: true, element: <Homepage/>
            },
            {
                path:"books/:id", element:<BookDetail/>
            }
        ]
    }
])
export default router;