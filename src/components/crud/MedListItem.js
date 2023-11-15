import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react';
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
import "./MedListItemStyle.css";

function MedListItem(props) {
    
    var user = useSelector(store => store.auth.user);
    function deleteMed() {
        axios.delete('http://127.0.0.1:8000/deleteapi1/'+props.med.id+'/',
        {
            headers: 
                {'Authorization': user?.token ? 'Token ' + user.token : null}
        }
        ).then(response=>{
            
            
            props.refresh()
        })
    
    }

    return <div className="card">
    <div className="card-body">
        {props.med.name}
        <button className="btn btn-primary float-right" onClick={deleteMed}>Delete</button>
        <Link to={"/crud/meds/"+props.med.id+"/edit"} className="btn btn-primary float-right">Edit</Link>
        <Link to={"/crud/meds/"+props.med.id} className="btn btn-info float-right">View</Link>
    </div>
</div>
}
  
export default checkAuth(MedListItem);