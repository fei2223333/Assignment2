import React from "react";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import deleteRecipe from '../actions/deleteRecipe';
import updateRecipe from '../actions/updateRecipe';
// import fetchRecipe from '../actions/fetchRecipe';
import { useSelector,useDispatch } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function InstructionDialog(props){

    const [open, setOpen] = useState(false);
    const [title,setTitle] = useState(props.recipe.title);
    const [ingredient,setIngredient] = useState(props.recipe.ingredient);
    const [instruction,setInstruction] = useState(props.recipe.instruction);
    const dispatch = useDispatch();

    const openDialog = () =>{
        setOpen(true);
    }

    const closeDialog = () =>{
        setOpen(false);
    }

    const deleteR = () =>{
        dispatch(deleteRecipe(props.recipe));
    }

    const updateR = () =>{
        dispatch(updateRecipe({
            title,
            ingredient,
            instruction,
            id:props.recipe.id,
        }));
    }
    

    return (
        (
            <Item >
            <TextField id="outlined-1"  variant="outlined" onChange={(e)=>setTitle(e.target.value)} defaultValue={title} />
            <TextField id="outlined-2" variant="outlined" onChange={(e)=>setIngredient(e.target.value)} defaultValue={ingredient}/>
            <Button variant="outlined" onClick={openDialog}>View</Button>
            <Button variant="outlined" onClick={deleteR}>Delete</Button>
            <Button variant="outlined" onClick={updateR}>Update</Button>
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>Instruction: {instruction}</DialogTitle>
            </Dialog>
            </Item>
            
        )
    )
}