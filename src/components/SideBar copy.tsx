
import React from "react";
// import React, { useState, useReducer} from "react";
// import { useInput } from './../customHook/useInput';
// import useInputReducer from './../customHook/useInputReducer';



// interface initialState {
//     budget: number;
//     adults: number;
//     kids: number;
// }

// const initialState:initialState = {
//     budget:0,
//     adults: 0,
//     kids: 0
// }

// const reducer = (state:any, action:any) => {
//     switch (action.type) {
//         case 'SET_NUMBER_FILTERS':
//             return{
//                 ...state,
//                 budget: action.value,
//                 adults: action.value
//             }
            
//             break;
    
//         default:
//             break;
//     }
// } 


// export const SideBar = ():JSX.Element =>{

//     const [budget, bindBudget, resetBudget] = useInput(0)
//     const [adults, bindAdults, resetAdults] = useInput(0)
//     const [kids, bindKids, resetKids] = useInput(0)
    
//     const handleSummit = (e:any) => {
//         e.preventDefault()
//         console.log()
//         alert(`${budget} ${adults} ${kids}`)
//     }

//     const {formValues,handleChange} = useInputReducer({fname:'',lname:''});
    
//     const {fname, lname} = formValues



// return(
//     <nav className="w3-sidebar w3-light-grey w3-collapse w3-top"  id="mySidebar">
//             <div className="w3-container w3-display-container w3-padding-16">
//                 <i  className="fa fa-remove w3-hide-large w3-button w3-transparent w3-display-topright"></i>
//                 <h3>Decorate</h3>
//                 <h3>from $99</h3>
//                 <hr/>
//                 <form  onSubmit={handleSummit}>
//                 <p><label><i className="fa fa-money"></i> Your budgt</label></p>
//                     <input 
                       
//                         {...fname}
//                         className="w3-input w3-border" 
//                         type="number" 
//                         placeholder="Your budget for decoration" 
//                         name="fname" 
//                         required 
//                         onChange={handleChange}
//                     /> 
//                      <input 
//                         {...lname}
//                         className="w3-input w3-border" 
//                         type="number" 
//                         placeholder="Your budget for decoration" 
//                         name="lname" 
//                         required 
//                         onChange={handleChange}
//                     /> 
//                 <p><label><i className="fa fa-money"></i> Your budget</label></p>
//                     <input 
//                         {...bindBudget}
//                         className="w3-input w3-border" 
//                         type="number" placeholder="Your budget for decoration" 
//                         name="budget" 
//                         required 
//                     />          
//                 <p><label><i className="fa fa-male"></i> Adults</label></p>
//                     <input 
//                         {...bindAdults}
//                         title="Number adults in the house" 
//                         className="w3-input w3-border" 
//                         type="number" 
//                         name="Adults" 
//                         min="1" 
//                         max="6" 
//                     />              
//                 <p><label><i className="fa fa-child"></i> Kids</label></p>
//                     <input 
//                         title="Number kids in the house" 
//                         className="w3-input w3-border" 
//                         type="number" 
//                         {...bindKids}
//                         name="Kids" 
//                         min="0" 
//                         max="6" />
//                 <p>
                    
//                     <button title="Set filter values" className="w3-button w3-block w3-green w3-left-align" type="submit"><i className="fa fa-search w3-margin-right"></i> Set filter</button></p>
//                 </form>
//             </div>
//         <div className="w3-bar-block">
//             <a href="#apartment" className="w3-bar-item w3-button w3-padding-16"><i className="fa fa-building"></i> House Class</a>
//             <a href="#contact" className="w3-bar-item w3-button w3-padding-16"><i className="fa fa-envelope"></i> Contact</a>
//         </div>
//     </nav>
// )}