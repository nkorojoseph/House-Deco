import React, { useState } from "react";
import { number } from "yargs";

//1 declare a value variable and the place holder to set the values
//2  bind the use input to the value and return an object for the onChange event and the Value
//3 reset the form

interface returnValue {
    bindValue: { value: string | number | boolean;onchange: (e: any) => void};
    value: string | number | boolean;
    reset: (e: any) => void
}

interface returnValueList extends Array<returnValue>{

}

export const useInput = (initialValue:any)  => {
    //1
    const [value, setValue] = useState(initialValue)

    //2
    const bind =  {
        value,
        onChange: (e:any) => {
            setValue(e.target.value)
        }
    }

    //3
    const reset=(e:any)=>{
        setValue(initialValue)
    }

    return [value, bind, reset]
  

}