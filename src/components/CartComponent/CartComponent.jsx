import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContextComponent} from '../CartContextComponent/CartContextComponent';
import "./CartComponent.css"
import EmptyCartComponent from '../EmptyCartComponent/EmptyCartComponent';


function CartComponent() {
    const { cart,  eliminarCarrito, vaciarCarrito, calcularTotal } = useContext(CartContextComponent);

    //Codigo para mostrar informacion cuando el carrito esta vacio
    if(cart.length === 0){
            
        return <EmptyCartComponent/>
    }


    return (
        <div>
            <h2 className='titleCartComponent'>Carrito de Compras</h2>
            <ul className='cartComponent'>
                {cart.map((item) => (
                    <li  key={item.id}>
                        <div className="cartComponentList">
                            <img src={item.img} alt={item.title} /> 
                            <h6>{item.title}</h6>
                            <p>Precio: RD${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>  
                            <p>cantidad: {item.quantity}</p>
                            <button className="cartComponentButton" onClick={() => eliminarCarrito(item.id)}><img src="iconDelete.png" alt={item.title} /> </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='cartComponentTotal'>
                <p>Total: RD${calcularTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <div className='cartComponentButtons'>
                    <Link to="/CheckoutComponent">
                        <button className='cartComponentCheckout'>Continuar con la compra</button>
                    </Link>
                    <button className="cartComponentVaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;