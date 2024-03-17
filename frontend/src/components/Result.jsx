import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";
import api from '../api'
import GenericCard from "./Card";


function Result() {

  const [products, setProducts] = React.useState([]);
  
  const {product} = useParams()


  React.useEffect(() => {
    api.get(`/${product}`) 
      .then(response => setProducts(response.data.results))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
    
        <Header />
        

        <div className="stores">
          <div className="store-cards">
            {products.map(item => 
              <GenericCard key={item.name} name={item.name} image={`images/Store ${item.store}.avif`} />
            )}
          </div>

        </div>
        
        

        <Footer />

    </div>
  );
}

export default Result;
