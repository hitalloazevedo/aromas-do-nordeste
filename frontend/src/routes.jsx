import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Cardapio from "./pages/cardapio";
import Dashboard from "./pages/dashboard";
import EditPlate from './pages/editPlate'
import NewPlate from "./pages/newPlate";

const router = createBrowserRouter([
    {
        path: '/aromas-do-nordeste',
        element: <Home/>,
    },
    {
        path: '/aromas-do-nordeste/cardapio',
        element: <Cardapio/>
    },
    {
        path: '/aromas-do-nordeste/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/aromas-do-nordeste/dashboard/edit/:id',
        element: <EditPlate/>
    },
    {
        path: '/aromas-do-nordeste/dashboard/new',
        element: <NewPlate/>
    }
])

export default router;