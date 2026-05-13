import { useState } from "react";
import "./count.css"

export const Count = () => {
    const [count, setCount] = useState(0);
    // Funcion incrementar 
    const increment = () => {
        setCount(count + 1);
    };
    // Funcion decrementar
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }        
    };

    return (
        <div className="counter-container">
            <button className="" onClick={decrement} disabled={count === 0}> - </button>
            <p>Cantidad</p>
            <button className="" onClick={increment}> + </button>
        </div>
    );
};
