import { createStore, combineReducers, applyMiddleware } from 'redux'
import recipeReducer from './reducers/recipeReducer'
import thunkMiddleware from 'redux-thunk';
import { initialState } from './initialState'


const composedEnhancer = applyMiddleware(thunkMiddleware);


export const store = createStore(
    recipeReducer,
    composedEnhancer,
    window.devToolsExtension ? window.devToolsExtension() : undefined
)
