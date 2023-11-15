// import { useEffect } from "react";
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom";



// export const checkGuest = (Component)=>{
//     function Wrapper(props){
//         var user = useSelector(store=>store.auth.user);
//         var navigate = useNavigate();
//         useEffect(()=>{
//             if(user){
//                 navigate("crud/meds")
//             }
//         },[user])
//         return <Component{...props}/>
//     }
//     return(Wrapper)
// }
// export default checkGuest;