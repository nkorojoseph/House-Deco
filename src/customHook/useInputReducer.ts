import React, {useReducer} from "react";


 const useInputReducer = (initialValues:{}) => {

    //write the reducer function to update the values and return a single value
    const reducer = (curVals:any,newVals:any)=>({...curVals, ...newVals});

    const [formState,dispatch] = useReducer(reducer, initialValues );

    //This function 
    const handleChange = (event:any) =>{
        const {name, value, type} = event.target;
      

        if (type=="checkbox"){
            dispatch({
                [name]: !value
            })  
            console.log(Object.entries(formState))
        }
        else{
            dispatch({
                [name]: value
            }) 
        }
        
   
    }

    //use the preventDefault to prevent the form from reloading the whole page
    const handleSubmit =(event:any) => {
        if(event){
            event.preventDefault()
        }
    }

    return {formState,handleChange,handleSubmit}
    
}

export default useInputReducer