import { useState, useContext } from "react"
import "./CheckoutComponent.css";
import { addOrder } from "../../firebase";
import { CartContextComponent} from '../CartContextComponent/CartContextComponent';
import PropTypes from "prop-types";
import Swal from 'sweetalert2';

export default function CheckoutComponent(){
    const [formInputs, setFormInputs] = useState({ name:"", lastName:"", email:"", phone:"", confirmEmail:"" })
    const {cart, vaciarCarrito, calcularTotal} = useContext(CartContextComponent)
    const totalPrice = calcularTotal().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });


    //Manejo de los inputs
    const handleinputs = (e) => {
        const {name, value} = e.target;
        setFormInputs({
            ...formInputs, [name]: value
        });
    };

    //Manejo del envio del formulario a firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
        //validaciones de los campos
        if(!formInputs.name || !formInputs.lastName || !formInputs.phone || !formInputs.email){
            alert("¡Favor de llenar todos los campos!")
            return;
        }
        if (formInputs.email !== formInputs.confirmEmail){
            alert("¡Los correos no coinciden!")
            return;
        } 

        //Para guardar toda la info del formulario sin confirmEmail
        // eslint-disable-next-line no-unused-vars
        const { confirmEmail, ...orderData } = formInputs;

        // Para guardar toda la info de cart en una nueva lista pero sin la propiedad img
        // eslint-disable-next-line no-unused-vars
        const cartItems = cart.map(({img, ...item}) => item)

        //Envio de los datos del formulario y carrito para la Base de datos
       await addOrder(orderData, cartItems, totalPrice).then((id) => {

            Swal.fire({
                title: "¡Orden generada con éxito!",
                text: `Su pedido estara listo en minutos, Orden ID: ${id}`,
                icon: 'success',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'Ver productos'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigir a la página de productos
                    window.location.href = "/";
                }
            });

            vaciarCarrito();

            //Para redirigir o limpiar el formulario
            setFormInputs({ name: "", lastName: "", email: "", phone: "", confirmEmail:"" });

        });
    }

    return(
        <>
        <main className="mainForm">
            <div className="formularioContenedor">
                <form onSubmit={handleSubmit}>
                    <div className="formulario">
                    <h2 >Datos para completar su pedido</h2>
                        <div className="form-floating mb-1">
                            <label htmlFor="name" >Nombres:</label>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                id="name"
                                name="name"
                                value={formInputs.name}
                                onChange={handleinputs}
                            />
                        </div>
                        <div className="form-floating mb-1">
                            <label htmlFor="lastName">Apellidos:</label>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formInputs.lastName}
                                onChange={handleinputs}
                            />
                        </div>
                        <div className="form-floating mb-1">
                            <label htmlFor="phone">Telefono o celular:</label>
                            <br />
                            <input
                                className="form-control"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formInputs.phone}
                                onChange={handleinputs}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="849-123-4567"
                                required
                            />
                        </div>
                        <div className="form-floating mb-1">
                            <label htmlFor="email">Correo:</label>
                            <br />
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={formInputs.email}
                                onChange={handleinputs}
                                placeholder="correo@correo.com"
                            />
                        </div>
                        <div className="form-floating mb-1">
                            <label htmlFor="confirmEmail">Confirmar Correo:</label>
                            <br />
                            <input
                                className="form-control"
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={formInputs.confirmEmail}
                                onChange={handleinputs}
                            />
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Enviar nueva orden</button>

                    </div>
                </form>
            </div>
        </main>
        </>
    )

}

CheckoutComponent.propTypes = {
    confirmEmail: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };