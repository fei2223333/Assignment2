import { createStore, combineReducers, applyMiddleware } from 'redux'
import recipeReducer from './reducers/recipeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState } from './initialState'


const reducer = combineReducers({
    recipeReducer,
})



export const store = createStore(
    recipeReducer,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
)
