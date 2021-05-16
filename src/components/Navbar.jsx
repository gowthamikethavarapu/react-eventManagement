import React from "react";
import logo from "./logo.png";


function Navbar(){
   return(
    <div className="section1">
      <header>
        
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            
            <img className="Navbar-brand" src={logo} width="250px" height="80px" alt="logo-png" />
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        
           <ul className="navbar-nav ml-auto" style={{fontSize: "20px"}} >
            <li className="nav-item ">
                <a className="nav-link" href="./index.html"><strong>Home</strong></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./price.html"><strong>packages</strong></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./blog.html"><strong>blog</strong></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./about.html"><strong>about us</strong></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./contactus.html"><strong>contact us</strong></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./signup.html"><strong>signup</strong></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./login.html"><strong>login</strong></a>  
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./addtocart.html"><strong>cart</strong></a>  
            </li>
            </ul>
          </div>
          </nav>
       </header>
    </div>
   );
   
 
}

export default Navbar;