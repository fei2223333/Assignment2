import React from "react";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import InstructionDialog from "./InstructionDialog";
import fetchRecipe from '../actions/fetchRecipes.js';




export default function RecipeList(){
    const recipeList = useSelector((state)=>state.recipeList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipe())
    }, []);

    return(
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        recipeList?recipeList.map((recipe, index)=>{
                            return (
                                <Grid key={index} xs={4} item>
                                    <InstructionDialog recipe={recipe} ></InstructionDialog>
                                </Grid>)
                        }):null
                    }
                </Grid>
            </Box>
        </div>
    )
}