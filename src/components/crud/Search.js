// import React, { useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import checkAuth from "../auth/checkAuth";
// import "./SearchStyle.css";

// function Search() {
//   const user = useSelector((store) => store.auth.user);
//   const [searchResults, setSearchResults] = useState([]);
//   const [keyword, setKeyword] = useState("");
//   const [notFound, setNotFound] = useState(false);
//   const head = {
//     headers: { Authorization: user?.token ? 'Token ' + user.token : null },
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (keyword !== ""&& user) {
//       axios
//         .get(
//           `http://127.0.0.1:8000/search1/medicine1/${keyword}/`,
//           head
//         )
//         .then((response) => {
//           // Filter results to include only items that start with the keyword
//           const filteredResults = response.data.filter((item) =>
//             item.name.toLowerCase().startsWith(keyword.toLowerCase())
//           );

//           setSearchResults(filteredResults);
//           setNotFound(filteredResults.length === 0);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     }
//   };

//   const handleChange = (event) => {
//     setKeyword(event.target.value);
//     setNotFound(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           className="search"
//           type="text"
//           placeholder="Search here"
//           value={keyword}
//           onChange={handleChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {notFound ? (
//           <p className="name">Oops!!! Not Found</p>
//         ) : (
//           searchResults.map((item) => (
//             <div key={item.id}>
//               <h3 className="name">{item.name}</h3>
//               <p className="company">Company: {item.company}</p>
//               <p className="price">Price: {item.price}</p>
//               <p className="quantity">Quantity: {item.quantity}</p>
//               <p className="expiry">Expiry date: {item.expiry_date}</p>
//               <p className="description">Description: {item.description}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default checkAuth(Search);


import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";
import "./SearchStyle.css";

function Search() {
  const user = useSelector((store) => store.auth.user);
  const [searchResults, setSearchResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false); // Add notFound state

  const head = {
    headers: { Authorization: user?.token ? 'Token ' + user.token : null },
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (keyword !== "" && user) {
      const searchURL = `http://127.0.0.1:8000/search1/medicine1/${keyword}/`;

      axios
        .get(searchURL, head)
        .then((response) => {
          setError(null);
          const filteredResults = response.data.filter((item) =>
            item.name.toLowerCase().startsWith(keyword.toLowerCase())
          );

          setSearchResults(filteredResults);

          // Check if there are no search results
          if (filteredResults.length === 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
          }
        })
        .catch((error) => {
          setError("Error fetching data. Please try again.");
          setSearchResults([]);
        });
    }
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
    setNotFound(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="search"
          type="text"
          placeholder="Search here"
          value={keyword}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {error && <p className="error">{error}</p>}
        {notFound ? (
          <p className="name">Oops!!! Not Found</p>
        ) : (
          searchResults.map((item) => (
            <div key={item.id}>
              <h3 className="name">{item.name}</h3>
              <p className="company">Company: {item.company}</p>
              <p className="price">Price: {item.price}</p>
              <p className="quantity">Quantity: {item.quantity}</p>
              <p className="expiry">Expiry date: {item.expiry_date}</p>
              <p className="description">Description: {item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default checkAuth(Search);
