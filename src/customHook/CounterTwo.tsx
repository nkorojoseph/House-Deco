
/*

*/



/*
create initialState of object type
the whole state is called count
the actions are also an object
action is full object with property type

*/

import React , {useReducer} from "react";

const initialstate = {
    firstCountValue:0,
    secondCountValue:0
}

const reducer =(state:any, action:any) => {
    console.log(state)
    switch (action.type) {
        case "increment":
            return {...state, firstCountValue: state.firstCountValue + action.value}
        case "decrement": 
            return {...state, firstCountValue: state.firstCountValue - action.value}
        case "increment2":
            return {...state, secondCountValue: state.secondCountValue + action.value}
        case "decrement2": 
            return {...state, secondCountValue: state.secondCountValue - action.value}
        case "reset" :
            return initialstate
        default:
            return state;
    }
}

export const Counter2 = () => {

    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <br/><hr/>
            <div>Counter 2- {count.firstCountValue} </div>
            <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
            <button onClick={()=>dispatch({type: 'decrement', value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            
            <div>Counter 2- {count.secondCountValue} </div>
            <button onClick={()=>dispatch({type:'increment2', value:1})}>Increment</button>
            <button onClick={()=>dispatch({type: 'decrement2', value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
        
    )
}