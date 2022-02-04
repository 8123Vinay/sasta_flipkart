import data from '../dummy/data.json'
import { getItems,getSearchItems } from '../dummy'
const allItems=data.items;

const ACTIONS={
    SET_PRICE_RANGE:'set_price_range',
    SET_CATEGORY:'set_categoty',
    SEARCH:'search'
}


export function setPriceRange(range){
    return{
        type:ACTIONS.SET_PRICE_RANGE,
        payload:range
    }
}

export function setCategory(category){
    return(
        {
            type:ACTIONS.SET_CATEGORY,
            payload:category
        }
    )
}

export function searchItems(input){
    return(
        {
            type:ACTIONS.SEARCH,
            payload:input
        }
    )
}

export default function Items(state={
    items:allItems,
    categoryName:undefined,
    price_range:{start:0,end:10000}

},action)

{
    switch(action.type){

        case ACTIONS.SET_PRICE_RANGE:{
          const range=action.payload;
          let newItems=getItems(state.categoryName, range)
          console.log(state.categoryName , range)
          console.log(newItems)
          return {...state, items:newItems, price_range:range} 

        }

        case ACTIONS.SET_CATEGORY:{
              const categoryName=action.payload;
              let newItems=getItems(categoryName,undefined);
              return {...state, categoryName:categoryName,items:newItems,range:{start:0,end:10000}}
        }

        case ACTIONS.SEARCH:{
           let newItems=getSearchItems(action.payload);
           return{...state,categoryName:undefined, items:newItems,range:{start:0,end:10000}}
        }

        default:
          return state
    }

}