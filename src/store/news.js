// this is to display the news in our page;

const ACTIONS={
   TOGGLE_NEWS:'toggle_news'
}

export const toggleNews=(value)=>{
    return(
        {type:ACTIONS.TOGGLE_NEWS,
         payload:value
        }
        
    )
}



export default function news(state={
    isOpen:'true'
},action){
   switch(action.type){
       case ACTIONS.TOGGLE_NEWS:{
           return ({...state, isOpen:action.payload})
       }
       default:
         return state;
   }
}
