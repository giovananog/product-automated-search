import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import GenericCard from "./Card";
import Typography from '@mui/material/Typography';


function Result(props) {

  return (
    <div>
    
        <Header />

        <div className="title-allProducts">
        <Typography
            component="h2"
            variant="h2"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Here's all&nbsp;
            <Typography
              component="span"
              variant="h2"
              sx={{
                color: 'primary.main'
              }}
            >
              searched products
            </Typography>
          </Typography>
        </div>
        
        <div className="allStore-cards">
          {props.products.map(item => 
            <GenericCard key={item.name} name={item.name} image={`images/Store ${item.store}.avif`} sales={`${item.sales}`} price={`$${item.price}`}/>
          )}
        </div>
        

        <Footer />

    </div>
  );
}

export default Result;
