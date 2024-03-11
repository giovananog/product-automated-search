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
            <GenericCard name='Store 1' image='images/Store 1.jpg' />
            <GenericCard name='Store 2' image='images/Store 2.jpg'/>
            <GenericCard name='Store 3' image='images/Store 3.jpg'/>
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
