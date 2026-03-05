function List() {
  const fruits = ["apple", "mango", "banana", "pineapple", "orange"];
  const fruitsList = fruits.map((fruit) => {
    return <li key={fruit}>{fruit}</li>;
  });

  const fastFoods = [
                {id: 1, name: "Burger", calorie: 100},
                {id: 2, name: "Pizza", calorie: 57},
                {id: 3, name: "Fries", calorie: 98},
                {id: 4, name: "Sandwich", calorie: 120},
  ];
  //sorting in lexicographical order
  fastFoods.sort((a,b) => {
    return a.name.localeCompare(b.name);
  })

  const lowCalFastFoods = fastFoods.filter((fastFood) => {
    return fastFood.calorie < 100;
  })

  const fastFoodsList = fastFoods.map((fastFood) => {
    return <li key={fastFood.id}><b>Name:</b> {fastFood.name}, <b>Calorie:</b> {fastFood.calorie}</li>
  })
  const lowCalFastFoodsList = lowCalFastFoods.map((fastFood) => {
    return <li key={fastFood.id}><b>Name:</b> {fastFood.name}, <b>Calorie:</b> {fastFood.calorie}</li>
  })
  
  return (
    <>
        <h2>Fruits:</h2>
      <ul>{fruitsList}</ul>
      <h2>Fast foods:</h2>
      <ol>{fastFoodsList}</ol>
      <h2>Low calorie fast foods:</h2>
      <ol>{lowCalFastFoodsList}</ol>
    </>
  );
}

export default List;