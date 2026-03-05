//onChange = event handler used primarily with form elements
            // ex. <input>, <textarea>, <select>, <radio>
            //triggers a function every time the value of the input changes


import { useState } from "react";

function MyComponent() {
    let [name, setName] = useState("Guest");
    let [quantity, setQuantity] = useState(1);
    let [comment, setComment] = useState("");
    let [payment, setPayment] = useState("Visa");
    let [shipping, setShipping] = useState("");


    function setNameHandler(e) {
        setName(e.target.value);
    }

    function setQuantityHandler(e) {
        setQuantity(e.target.value);
    }

    function setCommentHandler(e) {
        setComment(e.target.value);
    }
    function setPaymentHandler(e) {
        setPayment(e.target.value);
    }
    function setShippingHandler(e) {
        setShipping(e.target.value);
    }

    return(
    <>
        <input value={name} type="text" onChange={(e)=>setNameHandler(e)}/>
        <p>Name: {name}</p>
        <input value={quantity} type="number" min="0" onChange={(e)=>setQuantityHandler(e)}/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} placeholder="Leave a comment" onChange={(e)=>setCommentHandler(e)}/>
        <p>Comment: {comment}</p>

        <label>Select a payment method: </label>
        <select value={payment} onChange={(e)=>setPaymentHandler(e)}>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
        </select>
        <p>Paying with: {payment}</p>

        <label>
            <input type="radio" value="Pick up" checked={shipping==="Pick up"}
                    onChange={(e)=>setShippingHandler(e)}/>
            Pick up
        </label>
        <br />
        <label>
            <input type="radio" value="Delivery" checked={shipping==="Delivery"}
                    onChange={(e)=>setShippingHandler(e)}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </>)
}

export default MyComponent;