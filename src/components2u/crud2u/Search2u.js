// import React, { useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import checkAuth from "../../components/auth/checkAuth";
// import "./SearchStyle2u.css";

// function Search2u() {
//     const user = useSelector((store) => store.auth.user);
//     const [searchResults, setSearchResults] = useState([]);
//     const [keyword, setKeyword] = useState("");
//     const [notFound, setNotFound] = useState(false);
//     const head = {
//       headers: { Authorization: user?.token ? "Bearer " + user.token : null },
//     };
  
//     const handleSearch = (event) => {
//       event.preventDefault();
//       if (keyword !== "") {
//         axios
//           .get(
//             'https://medicalstore.mashupstack.com/api/medicine/search?keyword=' +
//               keyword,
//             head
//           )
//           .then((response) => {
//             // Filter results to include only items that start with the keyword
//             const filteredResults = response.data.filter((item) =>
//               item.name.toLowerCase().startsWith(keyword.toLowerCase())
//             );
  
//             setSearchResults(filteredResults);
//             setNotFound(filteredResults.length === 0);
//           })
//           .catch((error) => {
//             console.error("Error fetching data:", error);
//           });
//       }
//     };
  
//     const handleChange = (event) => {
//       setKeyword(event.target.value);
//       setNotFound(false);
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleSearch}>
//           <input
//             className="search"
//             type="text"
//             placeholder="Search here"
//             value={keyword}
//             onChange={handleChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//         <div>
//           {notFound ? (
//             <p className="name">Oops!!! Not Found</p>
//           ) : (
//             searchResults.map((item) => (
//               <div key={item.id}>
//                 <h3 className="name">{item.name}</h3>
//                 <p className="company">Company: {item.company}</p>
//                 <p className="price">Price: {item.price}</p>
//                 <p className="quantity">Quantity: {item.quantity}</p>
//                 <p className="expiry">Expiry date: {item.expiry_date}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//   );
// }

// export default checkAuth(Search2u);
