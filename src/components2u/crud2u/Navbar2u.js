// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

// import { NavLink, useNavigate } from "react-router-dom";
// import { removeUser } from "../../store/authSlice";


// function Navbar2u() {
//     var user = useSelector(store=>store.auth.user);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     function logout(){
//         if(user){
//             axios.post('https://medicalstore.mashupstack.com/api/logout',{},{
//                headers:{'Authorization': user?.token ? 'Bearer ' + user.token : null}
//             });
//             dispatch(removeUser());
//             navigate('/');
//         }
//     }
//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top ">
//             <div className="navbar-brand d-flex justify-content-center w-100">
//                 <h4>Medical Store Management System</h4>
//             </div>
//             <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//                 className="collapse navbar-collapse mr-auto"
//                 id="navbarNav"
//                 style={{ float: "left" }}
//             >
//                 <ul className="navbar-nav ml-auto" style={{ color: "#f0f5f1" }}>
                   
//                         <li className="nav-item">
//                             <span className="nav-link" onClick={logout} >Logout</span>
//                         </li>
                    
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar2u;
