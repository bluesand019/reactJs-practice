import { useState } from "react";

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());

    const carsList = cars.map((car, index) => {
        return <li onClick={() => removeCarHandler(index)} key={index}>{car.make} {car.model} {car.year}</li>
    })

    const carMakeHandler = (e) => {
        setMake(m => e.target.value);
    }
    const carModelHandler = (e) => {
        setModel(m => e.target.value);
    }
    const carYearHandler = (e) => {
        setYear(y => e.target.value);
    }
    const addCarHandler = () => {
        const newCar = {make:make, model:model, year:year};
        setCars(c => [...c, newCar]);
        setMake("");
        setModel("");
        setYear(new Date().getFullYear());
    }
    const removeCarHandler = (index) => {
        setCars(c => c.filter((_,i) => {
            return i!==index;
        }))
    }


    return (
        <>
            <h2>List of cars:</h2>
            <ol>
                {carsList}
            </ol>
            <input type="text" placeholder="Enter car make" 
                value={make} onChange={(e) => carMakeHandler(e)}/> <br />
            <input type="text" placeholder="Enter car model"
                value={model} onChange={(e) => carModelHandler(e)}/> <br />
            <input type="number" placeholder="Enter car year" min={1}
                value={year} onChange={(e) => carYearHandler(e)}/> <br />
            <button onClick={addCarHandler}>Add car</button>
        </>
    )
};
export default MyComponent;