import { useState, useEffect } from "react";

//useEffect hook is used for:
    // 1. setInterval
    // 2. setTimeout
    // 3. API calls
    // 4. Event listeners
    // 5. Subscriptions
    // 6. manual DOM operations

// ask yourself: "should I run on every render or only once?"
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(t => new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours%12!==0? hours=hours%12 : hours = 12;

    const padZeros = (number) => {
        if(number<10) {
           return number = "0"+number;
        }
        return number;
    }
    return (
        <span>{padZeros(hours)}:{padZeros(minutes)}:{padZeros(seconds)} {meridiem}</span>
    )
}
export default Clock;