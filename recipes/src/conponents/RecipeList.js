import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import InstructionDialog from "./InstructionDialog";




export default function RecipeList(){
    const recipeList = useSelector((state)=>state.recipeList);

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
                    {/* <Grid item xs={8}>
                    <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                    <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                    <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                    <Item>xs=8</Item>
                    </Grid> */}
                </Grid>
            </Box>
        </div>
        // <div onClick={openDialog} >
        //     <ul>
        //         {
        //             recipeList?recipeList.map((recipe, index)=>{
        //                 return (<li key={index}>
        //                     <p>
        //                         {recipe.title}
        //                     </p>
        //                     <p>
        //                         {recipe.ingredient}
        //                     </p>
        //                     <p>
        //                         {recipe.instruction}
        //                     </p>
                            
        //                 </li>)
        //             }):null
        //         }
        //     </ul>
        //     <Dialog open={open} onClose={closeDialog}>
        //         <DialogTitle>Set backup account</DialogTitle>
        //     </Dialog>
        // </div>
    )
}