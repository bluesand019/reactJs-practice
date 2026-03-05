function Button() {
  const clickHandler = () => {
    console.log("clicked!");
  };

  const clickHandler2 = (name) => {
    console.log(`${name} clicked me!`);
  };

  //event parameter in onclick fn
  const clickHandler3 = (e) => {
    console.log(e);
    e.target.textContent = "Ouch!";
  }

  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      {/*if we want to set arguments to onclick fn need to use arrow function */}
      <button onClick={() => clickHandler2("Dip")}>Click me with your name</button>
      <button onClick={(e) => clickHandler3(e)}>Click event</button>
      {/* similarly we have onDoubleClick handler */}
      
    </>
  );
}

export default Button;
