import './App.css';
import List from './List';
import ListProps from './ListProps';

function App() {
      const vegetables = [
          {id: 1, name:"potato", calorie:120},
          {id: 2, name:"tomato", calorie:142},
          {id: 3, name:"cabbage", calorie:90},
          {id: 4, name:"carrots", calorie:185},
          {id: 5, name:"Beans", calorie:56}
      ]
      const cuisins = [
          {id: 1, name:"fish", calorie:150},
          {id: 2, name:"lentils", calorie:110},
          {id: 3, name:"khichuri", calorie:187},
          {id: 4, name:"parota", calorie:70},
          {id: 5, name:"egg curry", calorie:126}
      ]

  return (
    <>
        <List />
        <ListProps
            list = {vegetables}
            category = "Vegetables"        
        />
        <ListProps
            list = {cuisins}
            category = "Cuisins"        
        />
    </>
  );
}

export default App;
