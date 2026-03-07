import { useEffect } from "react";

function Navbar(props) {
    useEffect(() => {
        alert("color was changed!");
    }, [props.count])  //will trigger everytime the color changes
    return (
        <p>I am a navbar of {props.color} color</p>
    )
}

export default Navbar;