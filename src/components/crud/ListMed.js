import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MedListItem from "./MedListItem";
import checkAuth from "../auth/checkAuth";
import React from 'react';
import { useSelector } from "react-redux";
import "./ListMedStyle.css";
import Footer from "./Footer";


function ListMed() {
    const user = useSelector(store => store.auth.user);
    console.log(user);
    var [meds, setMeds]=useState([]);
    
    const[currentDateTime, setCurrentDateTime] = useState(new Date());
   
    function fetchMeds(){
        if(user){
        axios.get('http://127.0.0.1:8000/get1/',
        {
            headers: 
                {'Authorization': user?.token ? 'Token ' + user.token : null} 
    }
    ).then(response=>{
            setMeds(response.data)
        })
        }

    }
    useEffect(()=>{
        fetchMeds()
    
    },[])

    return (<div>
        <Navbar></Navbar> 
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                {/* {<p style={{ fontSize: '12px',float:"right" }}>Date/Time: {currentDateTime.toLocaleString()}</p>
                 } */}
                    <h3 className="text-center my-4">Medicine List</h3>
                </div>
            </div>
            <div className="row">
                <div className="containeraddsearch col-8 offset-2">
                    <Link to="/crud/meds/add" className="btn btn-info mb-2">Add Medicine</Link>
                    <Link to="/crud/meds/search" className="btn btn-info mb-2 ml-4">Search Medicine</Link> 
                    {meds.map(med =><MedListItem key={med.id} med={med} refresh={fetchMeds}/>)}
                </div>
            </div>

        </div>
        {/* <Footer/> */}



    </div>
    
    )
}

export default checkAuth(ListMed);
