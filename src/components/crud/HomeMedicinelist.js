import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
// import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
import axios from "axios";

function ListMedicine() {
    var user = useSelector(store=>store.auth.user)
    var [medicines, setMedicines] = useState([]);
    var [search, setSearch] = useState('');

    function searchMedicine(){
        axios.get('https://medicalstore.mashupstack.com/api/medicine/search?keyword',{
            headers:{}
        }).then(response=>{
            setMedicines(response.data)
        })
    }

    useEffect(()=>{
        searchMedicine()
    })
      

    return (
        <>
        <Navbar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-secondary text-center">MEDICINE LIST</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 my-2">
                    <div className="form-group float-right">
                        <div className="row">
                            <div className="col-md-">
                                <input type='text'
                                style={{borderRadius: "15px"}}
                                className="form-control float-right mr-4"
                                placeholder="Search"
                                value={search}
                                onChange={(event)=>setSearch(event.target.value)}/>
                            </div>
                        </div>        
                    </div>
                </div> 
            </div>
        </div>
        <div className="container-fluid">
            <div className="col-md-8 mx-auto">
                <table className="table table-hover">
                    <thead className="bg-info text-white text-center">
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Expiry Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light text-center ">

                    {medicines.filter((medicine)=>{
                        return search.toLowerCase() === '' ? medicine : medicine.name.toLowerCase().includes(search) ||
                        search.toUpperCase() === '' ? medicine : medicine.name.toUpperCase().includes(search)
                    }).map(medicine =>(

                        <tr key={medicine.id}>
                            <td>{medicine.id}</td>
                            <td>{medicine.name}</td>
                            <td>{medicine.company}</td>
                            <td>{medicine.expiry_date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default ListMedicine; 