import { useState } from "react";

function MyComponent() {
    
    let [name, setName] = useState("Guest");
    let [age, setAge] = useState(0);
    let [isEmployed, setIsEmployed] = useState(true);

    const nameHandler = () => {
        setName("Kowsor");
    }
    const ageIncrementHandler = () => {
        setAge(age+1);
    }
    const isEmployedHandler = () => {
        isEmployed? setIsEmployed(false) : setIsEmployed(true);
    }

    return(
        <>
        <p>Name: {name}</p>
        <button onClick={nameHandler}>Set name</button>
        <p>Age: {age}</p>
        <button onClick={ageIncrementHandler}>Increment age</button>
        <p>Is employed: {isEmployed ? "Yes":"No"}</p>
        <button onClick={isEmployedHandler}>Toggle status</button>
        </>
    )
}

export default MyComponent;