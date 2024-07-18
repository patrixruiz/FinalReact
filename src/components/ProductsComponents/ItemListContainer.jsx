import "./ItemListContainer.css";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getProducts } from "../../firebase";
import CardProducts from "./CardProducts";

  export default function ItemListContainer({ greeting }) { 
    const [products, setProducts] = useState([]);
    
    useEffect( () =>{

      getProducts().then((data) => setProducts(data));
      
    }, []);

    return (
      <>
      <h2 className="texto">{greeting}</h2>
          <div className="card-instrument-tienda">
            {products.map((product) => (
              <CardProducts 
                key = {product.id}
                title = {product.title}  
                img = {product.img}
                price = {product.price}
                idItem = {product.id}
               />
            ))}
          </div>
      </>
    );
  }

  
  ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
  };