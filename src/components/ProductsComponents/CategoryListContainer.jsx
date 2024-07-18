import "./ItemListContainer.css";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getProducts } from "../../firebase";
import CardProducts from "./CardProducts";
import { useParams } from "react-router-dom";

  export default function CategoryListContainer() { 
    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect( () =>{

      getProducts().then((data) => setProducts(data));
      
    }, []);

    return (
      <>
          <div className="card-instrument-tienda">
            {products
            .filter((product) => product.category === id)
            .map((product) => (
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

  
  CategoryListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
  };