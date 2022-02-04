const ACTIONS={
    GET_QUOTES:'quotes/get_quotes',
    COUNT:'count',

}

export function incCount(value){
    return(
        {
            type:ACTIONS.COUNT,
            payload:value
        }
    )
}

export const getQuotes=()=>{
    return async (dispatch,state)=>{
        console.log(state())
        let response=await fetch("https://type.fit/api/quotes")
        console.log(response)
        let data=await response.json()
        if(response){
            dispatch({type:ACTIONS.GET_QUOTES, payload:data})
        }
    }
}


export default function reducer(state={
    quotes:[],
    count:0,
},action){
    switch(action.type){
        case ACTIONS.GET_QUOTES:{
            return {...state, quotes:action.payload}
        }
        case ACTIONS.COUNT:{
            console.log("The message is receieved in tHe Cart")
            state.count+=1
            return{...state}
        }
        default :
         return state;
    }
}

