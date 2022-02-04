import { createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './cart'
import userReducer from './user'
import quotesReducer from './quotes'
import itemsReducer from './items'

export const reducer=combineReducers({
    cartState:cartReducer,
    userState:userReducer,
    quoteState:quotesReducer,
    itemsState:itemsReducer,
    
})


const store=createStore(reducer,applyMiddleware(thunk));
export default store;

