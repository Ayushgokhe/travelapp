// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//               {/* <li class="nav-item" style={{marginTop:'7px'}}>
//                 <NavLink class="nav-link" to='/fillform' style={{textDecoration:'none', color:'black'}}>
//                   Fill Form
//                 </NavLink>
//               </li> */}
//             </ul>
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom_ml">
//               <li class="nav-item">
//                 <NavLink class="nav-link" to="/login" style={{textDecoration:'none', color:'black'}}>
//                   Login
//                 </NavLink>
//               </li>
//               <li class="nav-item">
//                 <NavLink class="nav-link" to="/register" style={{textDecoration:'none', color:'black'}}>
//                   Register
//                 </NavLink>
//               </li>
//               <li class="nav-item">
//                 <NavLink class="nav-link" to="/" style={{textDecoration:'none', color:'black'}}>
//                   Logout
//                 </NavLink>
//               </li>
//             </ul>
//             <form class="d-flex" role="search">
//               <input
//                 class="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button class="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const isLoggedIn = localStorage.getItem("token")!== null; // check if token exists in local storage

//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//               {/* <li class="nav-item" style={{marginTop:'7px'}}>
//                 <NavLink class="nav-link" to='/fillform' style={{textDecoration:'none', color:'black'}}>
//                   Fill Form
//                 </NavLink>
//               </li> */}
//             </ul>
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0 custom_ml">
//               {isLoggedIn? (
//                 <li class="nav-item">
//                   <NavLink class="nav-link" to="/" style={{ textDecoration: "none", color: "black" }}>
//                     Logout
//                   </NavLink>
//                 </li>
//               ) : (
//                 <>
//                   <li class="nav-item">
//                     <NavLink class="nav-link" to="/login" style={{ textDecoration: "none", color: "black" }}>
//                       Login
//                     </NavLink>
//                   </li>
//                   <li class="nav-item">
//                     <NavLink class="nav-link" to="/register" style={{ textDecoration: "none", color: "black" }}>
//                       Register
//                     </NavLink>
//                   </li>
//                 </>
//               )}
//             </ul>
//             <form class="d-flex" role="search">
//               <input
//                 class="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button class="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const isLoggedIn = localStorage.getItem("token") !== null;
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           Navbar
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom_ml">
//             {isLoggedIn ? (
//               <li className="nav-item">
//                 <button className="nav-link btn btn-link" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/login">
//                     Login
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/register">
//                     Register
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Contact
                </NavLink>
              </li>
              {/* {isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/fillform"
                    activeClassName="active"
                  >
                    Fill Form
                  </NavLink>
                </li>
              )} */}
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 custom_ml">
              {isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => localStorage.removeItem("token")}
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  {location.pathname !== "/login" && (
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/login"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Login
                      </NavLink>
                    </li>
                  )}
                  {location.pathname !== "/register" && (
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/register"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Register
                      </NavLink>
                    </li>
                  )}
                </>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
