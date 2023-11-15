import { createBrowserRouter } from "react-router-dom";


import ListMed from "./components/crud/ListMed";
import AddMed from "./components/crud/AddMed";
import ViewMed from "./components/crud/ViewMed";
import EditMed from "./components/crud/EditMed";
import Search from "./components/crud/Search";


import React from 'react';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/crud/Home";




const router = createBrowserRouter([
    
    
    { path:'auth/register', element:<Register/>},
    { path:'login', element:<Login/>},
    { path: 'crud/meds', element: <ListMed/>},
    { path: 'crud/meds/add', element: <AddMed/>},
    { path: 'crud/meds/:medId', element: <ViewMed/>},
    { path: 'crud/meds/:medId/edit', element: <EditMed/>},
    { path: 'crud/meds/search', element: <Search/>},
    {path:'', element:<Home/>},

    
    


    
    
]);



export default router;