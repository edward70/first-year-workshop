import { useState, useEffect } from "react";
import Header from "../components/Header";
import RecipeForm from "../components/RecipeForm";
import RecipeLists from "../components/RecipeLists";
export default function MyApp() {
  const [recipes, setRecipes] = useState([]);

  // By using this Hook, you tell React that your component needs to do something after render
  useEffect(() => {
    //this code will be run for first render
    fetchRecipes();
  }, []);

  //get data from server
  const fetchRecipes = async () => {
    // fetch server from backend
    const response = await fetch("http://127.0.0.1:8000/listrecipes");
    const data = await response.json();

    //dummy data, remove this after backend is ready
    //   const data = [
    //     {
    //       name: "Pizza",
    //       ingredients: "Pepperoni, Bread, Tomato",
    //       method: "baked",
    //     },
    //     {
    //       name: "Rice",
    //       ingredients: "rice",
    //       method: "cooked",
    //     },
    //   ];
    setRecipes(data);
  };
  //submit a new recipe
  const onSubmitRecipe = async (recipe) => {
    try {
      await fetch("http://127.0.0.1:8000/addrecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      fetchRecipes();
    } catch (error) {
      console.log(error);
    }
    //remove this after backend is set up
    // setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = async (name) => {
    try {
      await fetch("http://127.0.0.1:8000/deleterecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
	body: JSON.stringify({name: name}),
      });
      fetchRecipes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="app-container">
        <RecipeLists recipes={recipes} onDelete={deleteRecipe} />
        <RecipeForm onSubmit={onSubmitRecipe} />
      </div>
    </div>
  );
}
