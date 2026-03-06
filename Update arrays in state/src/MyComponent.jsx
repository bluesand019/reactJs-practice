import { use, useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const [newFood, setNewFood] = useState("");

    const foodsList  = foods.map((food, index) => {
        return <li key={index} onClick={() => removeFoodHandler(index)}>{food}</li>
    })

    const newFoodHandler = (e) => {
        setNewFood(n => e.target.value);
    }

    const addFoodHandler = () => {
        if(newFood.trim() === "") return;
        setFoods(f => [...f, newFood]);
        setNewFood(n => "");
    }

    const removeFoodHandler = (index) => {
        setFoods(foods.filter((_,i) => {
            return i!==index;
        }))
    }
    return (
        <>
            <h2>List of foods:</h2>
            <ol>{foodsList}</ol>
            <input type="text" value={newFood} onChange={(e) => newFoodHandler(e)} placeholder="Enter food name" />
            <button onClick={addFoodHandler}>Add food</button>
        </>
    )
};

export default MyComponent;