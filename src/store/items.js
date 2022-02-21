const ACTIONS={
    SET_PRICE_RANGE:'set_price_range',
    SET_CATEGORY:'set_category',
    SEARCH:'search',
    GET_ITEMS:"get_items"
}


async function fetchItems(){
    let response=await fetch("https://fakestoreapi.com/products");
    response=await response.json();
    return response;
}


export function getItems(){
    return async (dispatch)=>{

        dispatch({type:ACTIONS.GET_ITEMS, payload:fetchItems()});
    }
}




export function setPriceRange(range){
    return async (dispatch)=>{
        let response=await fetchItems()
        let items=response.filter((item)=>{
            return(Math.floor(item.price)>=range.start &&  Math.floor(item.price)<=range.end)
        })
        dispatch({
            type:ACTIONS.SET_PRICE_RANGE,
            payload:items
        })
    }
}

export function setCategory(category){
   return async (dispatch)=>{
   let response=await fetchItems()
    let items=response.filter((item)=>{
        return(item.category===category)
    })
 
    dispatch(
        {
            type:ACTIONS.SET_CATEGORY,
            payload:items
        }
    )
}

    
}

export function searchItems(input){
    return async (dispatch)=>{
       let response=fetchItems()
        let items=await response.filter((item)=>{
            return(item.title.includes(input))
        })
     
        dispatch(
            {
                type:ACTIONS.SET_CATEGORY,
                payload:items
            }
        )
    }
}

export default function Items(state={
    items:null,
},action)

{
    switch(action.type){
        case ACTIONS.SET_PRICE_RANGE:{
          return {items:action.payload} 

        }

        case ACTIONS.SET_CATEGORY:{
            return {items:action.payload} 
        }

        case ACTIONS.SEARCH:{
            return {items:action.payload} 
        }

        case ACTIONS.GET_ITEMS:{
            return {items:action.payload}
        }
    
        default:
          return state
    }

}