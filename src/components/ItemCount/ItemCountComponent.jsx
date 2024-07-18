import PropTypes from "prop-types";
import "./ItemCountComponent.css";

export default function ItemCountComponent({count, setCount}){
    
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1){
            setCount(count - 1);
        } 
    };

    return(
        <>
        <div className="count">
            <button onClick={decrement}>-</button>
                <p>{count}</p>
            <button onClick={increment}>+</button> 
        </div>
        </>
    
    );
}

ItemCountComponent.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
};