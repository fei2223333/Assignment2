import {initialState} from "../initialState";

const recipeReducer = (state=initialState, action) =>{
    switch(action.type){
        case "addRecipe":
            return {
                ...state,
                recipeList: [...state.recipeList, action.data],
            }
        case "ADDRECIPE_SUCCESS":
            return {
                ...state,
                recipeList: action.data,
            }
        case "FETCHRECIPE_SUCCESS":
            return {
                ...state,
                recipeList: action.data,
            }
        case "DELETERECIPE_SUCCESS":
            return {
                ...state,
                recipeList: action.data,
            }
        case "UPDATERECIPE_SUCCESS":  
            return {
                ...state,
                recipeList: action.data,
            }
        default:
            return state;
    }
}

export default recipeReducer;