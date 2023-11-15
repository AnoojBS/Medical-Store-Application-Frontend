import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import React from 'react';
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";


function AddMed() {
    const user = useSelector(store => store.auth.user);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry_date, setExpiry_Date] = useState('');
    const [description, setDescription] = useState('');
    var navigate = useNavigate()
    const head = {
        headers: { 'Authorization': user?.token ? 'Token ' + user.token : null }
    };
    
    const body ={
      name: name,
      company: company,
      price: price,
      quantity: quantity,
      expiry_date:expiry_date,
      description: description
   }


    function addMed() {
        axios.post('http://127.0.0.1:8000/createapi1/',body,head)
             .then(response=>{
                navigate('/crud/meds')
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
        
    }

    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Add Medicine</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input
                        type="text" 
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price:</label>
                        <input
                        type="text" 
                        className="form-control" 
                        value={price} 
                        onChange={(event)=>{setPrice(event.target.value)}}
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity:</label>
                        <input
                        type="text" 
                        className="form-control" 
                        value={quantity} 
                        onChange={(event)=>{setQuantity(event.target.value)}}
                        />
                    </div>


                    <div className="form-group">
                            <label >Expiry Date:</label>
                            <textarea
                                className="form-control"
                                placeholder="YYYY-DD-MM"
                                value={expiry_date}
                                onChange={(event) => {setExpiry_Date(event.target.value) }}
                            />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                        type="text" 
                        className="form-control" 
                        value={description} 
                        onChange={(event)=>{setDescription(event.target.value)}}
                        />
                    </div>

                    
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={addMed}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default checkAuth(AddMed);