import  "./NavBar.css";
import BotonNavbar from "./BotonNavbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <>
        <header className="navbarjsx">
        <Link to={"/"}> <img className="logoBateria" src="/logoBateria.jpeg" alt="logoBateria" /> </Link>
        <nav className="navbarCentro">
            <BotonNavbar  nombre="Home" link="/"/>
            <BotonNavbar nombre="Sandwich" link="/category/sandwich"/>
            <BotonNavbar nombre="Empanadas" link="/category/empanadas"/>
            <BotonNavbar nombre="Bebidas" link="/category/bebidas"/>
            <BotonNavbar nombre="Otros" link="/category/otros"/>
            </nav>
            <CartWidget/>
            </header>
        </>
    );
}




