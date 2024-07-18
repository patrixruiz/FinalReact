import { useContext } from "react"
import "./EmptyCartComponent.css"
import { CartContextComponent } from "../CartContextComponent/CartContextComponent"
import { Link } from "react-router-dom"

export default function EmptyCartComponent(){

    const {cart} = useContext (CartContextComponent)

    if ( cart.length === 0){

        return(
            <>
                <section className="sectionCartVacio">
                    <div className="cartVacio">
                        <h2>El carrito esta vacío...😢</h2>
                        <Link to="/">
                            <button>Ver productos</button>
                        </Link>
                    </div>
                </section>
            </>
    
        )

    }
    return null;
}