import React from "react";
import Form from "./conponents/Form";
import RecipeList from './conponents/RecipeList'
import UploadRecipe from "./conponents/UploadRecipe";
// 
function App() {
  return (
    <div className="App">
        <Form/>
        <p></p>
        <UploadRecipe/>
        <p></p>
        <RecipeList/>
        
    </div>
  );
}

export default App;
