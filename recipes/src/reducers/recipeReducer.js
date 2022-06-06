import {initialState} from "../initialState";

const recipeReducer = (state=initialState, action) =>{
    switch(action.type){
        case "addRecipe":
            return {
                ...state,
                recipeList: [...state.recipeList, action.data],
            }
        default:
            return state;
    }
}

export default recipeReducer;