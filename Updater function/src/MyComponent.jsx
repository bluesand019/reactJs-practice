//updater function = a fn passed as an argument to setState() usually
                        //ex. setYear(arro fn)
                        //allow for safe updates based on the previous state used with
                        //multiple state updates and asynchronous functions
                        //Good practice to use updater functions.

import { useState } from "react";
function MyComponent() {
    const [count, setCount] = useState(0);
    const countHandler = () => {
        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);
    }
    return(
        <>
            <p>{count}</p>
            <button onClick={countHandler}>Increase</button>

        </>
    )
};

export default MyComponent;