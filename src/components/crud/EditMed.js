import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import React from 'react';
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";



function EditMed() {
    
    const {medId} = useParams();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry_date, setExpiry_Date] = useState('');
    const [description, setDescription] = useState('');
    var user = useSelector((store) => store.auth.user);
    var navigate = useNavigate();
    
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/view/'+medId+'/',{
              headers:{'Authorization': user?.token ? 'Token ' + user.token : null},
    })
        .then((response)=>{
            setName(response.data.name);
            setCompany(response.data.company);
            setPrice(response.data.price);
            setQuantity(response.data.quantity);
            setExpiry_Date(response.data.expiry_date);
            setDescription(response.data.description);
        });
    
    },[medId]);
   
    function updateMed(){
        axios.put('http://127.0.0.1:8000/updateapi1/'+medId+'/',
        {
            name: name,
            company: company,
            price: price,
            quantity: quantity,
            expiry_date:expiry_date,
            description:description,
    },
      {
        headers:{'Authorization': user?.token ? 'Token ' + user.token : null },
      }
    )
    
    .then((response)=>{
            navigate('/crud/meds');
        });
    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Medicine</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={e=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input
                        type="text"
                        className="form-control" 
                        value={company} 
                        onChange={e=>{setCompany(e.target.value)}}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price:</label>
                        <input
                        type="text"
                        className="form-control" 
                        value={price} 
                        onChange={e=>{setPrice(e.target.value)}}
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity:</label>
                        <input
                        type="text"
                        className="form-control" 
                        value={quantity} 
                        onChange={e=>{setQuantity(e.target.value)}}
                        />
                    </div>


                    <div className="form-group">
                    <label>Expiry Date:</label>
                        <textarea
                        
                        className="form-control"
                        value={expiry_date}
                        onChange={e => { setExpiry_Date(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                    <label>Description:</label>
                        <textarea
                        
                        className="form-control"
                        value={description}
                        onChange={e => { setDescription(e.target.value) }}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updateMed}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default checkAuth(EditMed);


