import { useState } from "react";
import foods from "../foods.json";
const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings, id } = food;
  const totalCalories = servings * calories;
  console.log(food);

  //Delete List

  // const handleFoodDelete = () => {
  //   return onDelete(id);
  // };

  return (
    <div>
      <p>{name}</p>

      <img src={image} alt={name} />

      <p>Calories {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default FoodBox;
