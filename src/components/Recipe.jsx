import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Recipe({ recipe, onDelete }) {
  const deleteRecipe = () => {
	console.log(recipe.name);
	onDelete(recipe.name);
  }
  return (
    <Card className="recipe-container">
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.name}
        </Typography>
        <Typography variant="body2">{recipe.ingredients}</Typography>
        <Typography variant="body2">{recipe.method}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteRecipe}>Delete</Button>
      </CardActions>
    </Card>
  );
}
