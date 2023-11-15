import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar";
import React from 'react';
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function ViewMed() {
    const {medId} = useParams();
    const user = useSelector(store => store.auth.user);
    const [med,setMed] = useState({name:'',company:'',price:'',quantity:'',expiry_date:'',description:''});
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/view/'+medId+'/',{
            headers: { 'Authorization': user?.token ? 'Token ' + user.token : null },
  })
        .then((response)=>{
            setMed(response.data)
        })
    },[medId, user.token]);


    

    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"><h3 style={{ color: "#f5425a", textAlign: "center" }}>Name: {med.name}</h3></div>
                        <div className="card-body" style={{  textAlign: "center" }}>Company: {med.company}</div>
                        <div  className="card-body"  style={{  textAlign: "center"}}>Price :{med.price}</div>
                        <div  className="card-body"  style={{  textAlign: "center"}}>Quantity :{med.quantity}</div>
                        <div  className="card-body"  style={{  textAlign: "center"}}>Expiry Date :{med.expiry_date}</div>
                        <div className="card-body" style={{ textAlign: "center" }}>Description :{med.description}</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default checkAuth(ViewMed);
