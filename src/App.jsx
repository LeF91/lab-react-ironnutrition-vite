import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/AddFoodForm";

function App() {
  const [listFoods, setListFoods] = useState(foods);
  // console.log(listFoods);
  const deleteFood = (id) => {
    const updateFoods = listFoods.filter((food) => food.id !== id);
    setListFoods(updateFoods);
  };

  const handleAddFood = (food) => {
    setListFoods([...listFoods, food]);
  };

  // const mockFood = {
  //   name: "Orange",
  //   calories: 85,
  //   image: "https://i.imgur.com/abKGOcv.jpg",
  //   servings: 1,
  // };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <FoodForm handleAddFood={handleAddFood} />
      {/* <Divider>Food List</Divider> */}

      {listFoods.map((oneFood, index) => (
        <FoodBox key={index} food={oneFood} onDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
