import { useState } from "react";

function FoodForm({ addFood }) {
  const [names, setNames] = useState("");
  const [images, setImages] = useState("");
  const [calories, setCalories] = useState("0");
  const [servings, setServings] = useState("0");

  const handleNames = (event) => setNames(event.target.value);
  const handleImages = (event) => setImages(event.target.value);
  const handleCalories = (event) => setCalories(event.target.valueAsNumber);
  const handleServings = (event) => setServings(event.target.valueAsNumber);

  const resetImputs = () => {
    setNames("");
    setImages("");
    setCalories(0);
    setServings(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const states = { names, images, calories, servings };
    const response = [];
    for (const key in states) {
      if (!states[key] || states[key] === "default") {
        response.push(<p>Error on {key}</p>);
      }
    }
    const oneFood = {
      names,
      images,
      calories,
      servings,
    };

    addFood(oneFood);
    resetImputs();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={names}
            // value={formData.name}
            onChange={handleNames}
          />
        </div>

        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="url"
            id="image"
            value={images}
            // value={formData.image}
            onChange={handleImages}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            value={calories}
            // value={formData.calories}
            onChange={handleCalories}
          />
        </div>
        <div>
          <label htmlFor="servings">Servings</label>
          <input
            type="number"
            id="servings"
            value={servings}
            //value={formData.servings}
            onChange={handleServings}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default FoodForm;
