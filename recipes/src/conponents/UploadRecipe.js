
import { useState } from "react";
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";

export default function UploadRecipe(){
    const dispatch = useDispatch();
    const [file, setFile] = useState();

    const uploadFile = (e) =>{
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            // this will then display a text file
            let strings = reader.result.split("\n");
            let res = {}
            strings.forEach((string)=>{
                string.trim();
                let temp = string.split(":");
                res[temp[0].toLowerCase()] = temp[1].trim();
            })
            setFile(res);
            dispatch({type:"addRecipe",
            data:{
                title:res.title,
                ingredient:res.ingredient,
                instruction:res.instruction,
            }})
          }, false);
        reader.readAsText(e.target.files[0])
    }


    return (
        <div>
            <Button
            variant="contained"
            component="label"
            
            >
            Upload File
            <input
                type="file"
                style={{ display: "none" }}
                onChange={(e)=>{uploadFile(e)}}
            />
            </Button>
        </div>
    )
}