import React , {useReducer} from "react";
/*
1 import the useReducer function from react
2 call the use reducer within the component that needs it with the two parameters- reducer, initial state
3 define the initialstate
4 define the reducer function and takes two parameters- state and action(instruction to the reducer needed to create a new state and trigers the state transition)
    use switch state to change the actions going to be passed
    for each action within the switch, return the updated state
5 destructure point number 2 to get the value(new state) from the reducer and also function to dispatch the right action
return the newState
*/



const initialstate =0

const reducer =(state:any, action:any) => {
    console.log(state)
    switch (action) {
        case "increment":
            return state+1
        case "decrement": 
            return state-1
        case "reset" :
            return initialstate
        default:
            return state;
    }
}

export const CounterThree = ():JSX.Element => {

    const [count, dispatch] = useReducer(reducer, initialstate)
    const [count3, dispatch3] = useReducer(reducer, initialstate)
    
    return (
        <div>
            <br/>
            <hr/>
            <div>Counter 1 -  {`${count}`} </div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>
            <div>Counter 1 -  {`${count3}`} </div>
            <button onClick={()=>dispatch3('increment')}>Increment</button>
            <button onClick={()=>dispatch3('decrement')}>Decrement</button>
            <button onClick={()=>dispatch3('reset')}>Reset</button>
            </div>
        </div>    
           
    )
}