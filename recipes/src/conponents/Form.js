import {useMemo, useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import '../style/form.css';

export default function Form(){
    //recipe title, ingredients, and instructions
    const [title,setTitle] = useState("");
    const [ingredient,setIngredient] = useState("");
    const [instruction,setInstruction] = useState("");
    const dispatch = useDispatch();

    const addRecipe = () =>{
        dispatch({
            type:"addRecipe",
            data:{
                title,
                ingredient,
                instruction,
            }
        });
        resetForm();
    }

    const resetForm = () =>{
        setTitle("");
        setIngredient("");
        setInstruction("");
    }

    return (
        <div class="factory">
        <form class="form" action="" id="recipeSubmit" >
            <p>
            <label>
                Title:
                <input type="text" name="name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </label>
            </p>
            <p>
            <label>
                Ingredient:
                <input type="text" name="name" value={ingredient} onChange={(e)=>setIngredient(e.target.value)}/>
            </label>
            </p>
            <p>
            <label>
                Instruction:
                <input type="text" name="name" value={instruction} onChange={(e)=>setInstruction(e.target.value)}/>
            </label>
            </p>
            <input type="button" value="Add" onClick={addRecipe}/>
            <input type="reset" value="Reset" onClick={resetForm}/>
        </form>
    </div>
    )
}
