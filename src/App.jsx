import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


function App(){
  return(
    <div>
      <Navbar />
      <Main />
      <Carousel/>
      <Testimonial/> 
      <Footer />
     </div>
  );
}


export default App;
