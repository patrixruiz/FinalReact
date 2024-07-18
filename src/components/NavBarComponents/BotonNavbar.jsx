import PropTypes from 'prop-types';
import "./BotonNavbar.css";
import { Link } from 'react-router-dom';

export default function BotonNavbar({ nombre, link }) {
    return (
        <Link to={link}>
            <button className='botonNavbar'>
                {nombre}
            </button>
        </Link>
    );
  }


BotonNavbar.propTypes = {
    nombre: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired 
};