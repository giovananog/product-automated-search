import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import GenericCard from "./Card";
import SearchField from "./Search";



function Home() {

  return (
    <div>
    
        <Header />
        
        <div className="stores">
          <div className="store-cards">
             <>{["Store 1", "Store 2", "Store 3"].map((store, index) => <GenericCard key={index} name={store} image={`images/Store ${index + 1}.avif`} />)}</>
          </div>

        </div>

        <div className="search-field-div">
          <SearchField />
        </div>
        

        <Footer />

    </div>
  );
}

export default Home;
