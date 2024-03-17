import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";
import api from '../api'
import GenericCard from "./Card";
import Typography from '@mui/material/Typography';


function Result() {

  // const [products, setProducts] = React.useState([]);
  
  const {product} = useParams()

  const products = (
     [
      {
        "name": "TWS Wireless Game Fones De Ouvido Com Microfone, Fones De Ouvido Bluetooth Fones De Alta Fidelidade Baixo, Redu\u00e7\u00e3o De Ru\u00eddo, Original, X15 Pro",
        "price": "15,99",
        "sales": "10,000",
        "store": 1
      },
      {
        "name": "Lenovo-GM2 Pro Sem Fio In-Ear Bluetooth 5.3 Fones De Ouvido, Auriculares Esportivos, Jogos, Baixa Lat\u00eancia, Modo Duplo, Auscultadores De M\u00fasica, Novo",
        "price": "12,29",
        "sales": "10,000",
        "store": 1
      },
      {
        "name": "F9 Fones De Ouvido Bluetooth Sem Fio Com Display LED, Auricular Binaural, Chamada HD \u00c0 Prova D' \u00c1gua, Fones De Ouvido De Redu\u00e7\u00e3o De Ru\u00eddo, CVC 8.0, TWS",
        "price": "15,99",
        "sales": "100k ",
        "store": 1
      },
      {
        "name": "Fone de Ouvido Sem Fio Lenovo LP40 Bluetooth 5.0",
        "price": "96,90",
        "sales": "136",
        "store": 2
      },
      {
        "name": "Fone De Ouvido Via Bluetooth Sem Fio",
        "price": "36,47",
        "sales": "63",
        "store": 2
      },
      {
        "name": "Fone de ouvido Headphone Mondial HP03 Bluetooth Sound Bivolt",
        "price": "65,27",
        "sales": "62",
        "store": 2
      },
      {
        "name": "Fone De Ouvido Bluetooth Sem Fio Tws Microfone Todos Celular",
        "price": "43.39",
        "sales": "17117",
        "store": 3
      },
      {
        "name": "Fone De Ouvido Taue101bk/00 Com Microfone Philips Cor Preto",
        "price": "26.84",
        "sales": "1322",
        "store": 3
      },
      {
        "name": "Fone de ouvido in-ear Samsung EG920 EO-EG920 white",
        "price": "22.07",
        "sales": "2086",
        "store": 3
      }
    ]
  )

  // React.useEffect(() => {
  //   api.get(`/${product}`) 
  //     .then(response => setProducts(response.data.results))
  //     .catch(error => console.error("Error:", error));
  // }, []);

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
            Se all&nbsp;
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
          {products.map(item => 
            <GenericCard key={item.name} name={item.name} image={`images/Store ${item.store}.avif`} />
          )}
        </div>
        
        

        <Footer />

    </div>
  );
}

export default Result;
