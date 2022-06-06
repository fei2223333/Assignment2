import React from "react";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function InstructionDialog(props){

    const [open, setOpen] = useState(false);
    const [title] = useState(props.recipe.title);
    const [ingredient] = useState(props.recipe.ingredient);
    const [instruction] = useState(props.recipe.instruction);

    const openDialog = () =>{
        setOpen(true);
    }

    const closeDialog = () =>{
        setOpen(false);
    }

    

    return (
        (
            <Item >
            <p>
                Title: {title}
            </p>
            <p>
                Ingredients {ingredient}
            </p>
            <Button variant="outlined" onClick={openDialog}>View</Button>
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>Instruction: {instruction}</DialogTitle>
            </Dialog>
            </Item>
            
        )
    )
}