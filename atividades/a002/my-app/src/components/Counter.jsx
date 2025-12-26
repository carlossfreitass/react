import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={incrementCount}>Incrementar</button>
        </div>
    )
}

export default Counter