
const ACTIONS={
    TOGGLE_CART:"toggle_cart",
    ADD_TO_CART:"add_to_cart",
    REMOVE_FROM_CART:'remove_from_cart',
    COUNT:'count'
}

export const incrementCount=(value)=>{
   return(
       {
           type:ACTIONS.COUNT,
           payload:value
       }
   )
}


export const toggleCart=(value)=>{
    return({
        type:ACTIONS.TOGGLE_CART,
        payload:value
    })
}

export const addToCart=(item)=>{
    return({
        type:ACTIONS.ADD_TO_CART,
        payload:item
    })
}
export const removeFromCart=(item)=>{
    return({
        type:ACTIONS.REMOVE_FROM_CART,
        payload:item
    })
}


export default function cart(state={isOpen:false,
                                    items:{},
                                    totalPrice:0,
                                    count:0
}, action){
        switch(action.type){
           case ACTIONS.TOGGLE_CART:{
               return{...state, isOpen:action.payload}
           }

           case ACTIONS.ADD_TO_CART:{
               
               let {id,price}=action.payload;
               let item=state.items[id]
               
               if(item){
                   item.quantity+=1;
                   return {...state,totalPrice:(state.totalPrice+price)};
               } 

               else{
                  item=action.payload 
                  item.quantity=1;
                  return {...state, items:{...state.items, [id]:item},totalPrice:(state.totalPrice+price)}
               }
                
               }
            case ACTIONS.REMOVE_FROM_CART:{
    
                let {id,price}=action.payload;
                let item=state.items[id];
                if(item.quantity-1){
                    item.quantity-=1;
                    return {...state,totalPrice:(state.totalPrice-price)};
                }
                else{
                    delete (state.items)[id];
                    return {...state,totalPrice:(state.totalPrice-price)} 
                }
               
            }   
            case ACTIONS.COUNT:{
                console.log("The message is receieved in tHe Cart")
                state.count=action.payload;
                return{...state}
            }
            default:
             return state
           }
           
                   
}
 
