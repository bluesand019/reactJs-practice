import { useState } from "react";

function MyComponent() {
    const [car, setCar] = useState({make:"Ford",
                                    model: "Mustang",
                                    year: 2025
    });

    const makeChangeHandler = (e) => {
            setCar(c => ({...c, make: e.target.value}));
    }

    const modelChangeHandler = (e) => {
        setCar(c => ({...c, model: e.target.value}));
    }

    const yearChangeHandler = (e) => {
        setCar(c => ({...c, year: e.target.value}));
    }
    return (
        <>
            <p>Your favourite car: {car.make} {car.model} {car.year} </p>
            <label>Make: </label>
            <input type="text" value={car.make} onChange={(e) => makeChangeHandler(e)} /> <br />
            <label>Model: </label>
            <input type="text" value={car.model} onChange={(e)=>modelChangeHandler(e)} /> <br />
            <label>Year: </label>
            <input type="number" value={car.year} onChange={(e)=>yearChangeHandler(e)} />
        </>
    )
}

export default MyComponent;