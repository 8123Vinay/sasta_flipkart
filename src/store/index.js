import { createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './cart'
import userReducer from './user'
import quotesReducer from './quotes'
import itemsReducer from './items'
import newsReducer from './news'

const reducer=combineReducers({
    cartState:cartReducer,
    userState:userReducer,
    quoteState:quotesReducer,
    itemsState:itemsReducer,
    newsState:newsReducer,
    
})


const store=createStore(reducer,applyMiddleware(thunk));
export default store;

