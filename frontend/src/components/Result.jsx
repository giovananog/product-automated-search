import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";



function Result() {

    const {product} = useParams()
  return (
    <div>
    
        <Header />
        
        <p>{product}</p>
        

        <Footer />

    </div>
  );
}

export default Result;
