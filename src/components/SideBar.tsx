import React, { useState, useReducer} from "react";
import { useInput } from './../customHook/useInput';
import useInputReducer from './../customHook/useInputReducer';


interface initialState {
    budget: string;
    noOfKids: number;
    noOfAdults: number;
    confirm: boolean
}

const initialState:initialState = {
        budget:'',
        noOfKids:0, 
        noOfAdults: 0,
        confirm: false
    }

export const SideBar = ():JSX.Element =>{
    
    const handleSummit = (e:any) => {
        e.preventDefault()
        console.log()
    }

    const {formState,handleChange} = useInputReducer(initialState);
    
    const {budget, noOfKids, noOfAdults, confirm} = formState

return(
    <nav className="w3-sidebar w3-light-grey w3-collapse w3-top"  id="mySidebar">
            <div className="w3-container w3-display-container w3-padding-16">
                <i  className="fa fa-remove w3-hide-large w3-button w3-transparent w3-display-topright"></i>
                <h3>Decorate</h3>
                <h3>from $99</h3>
                <hr/>
                <form  onSubmit={handleSummit}>
               
                <p><label><i className="fa fa-money"></i> Your budget</label></p>
                    <input 
                        value={budget}
                        className="w3-input w3-border" 
                        type="number" placeholder="Your budget for decoration" 
                        name="budget" 
                        required 
                        onChange={handleChange}
                    />          
                <p><label><i className="fa fa-male"></i> Adults</label></p>
                    <input 
                        value={noOfAdults}
                        title="Number adults in the house" 
                        className="w3-input w3-border" 
                        type="number" 
                        name="noOfAdults" 
                        min="1" 
                        max="100" 
                        onChange={handleChange}
                    />              
                <p><label><i className="fa fa-child"></i> Kids</label></p>
                    <input 
                        title="Number kids in the house" 
                        className="w3-input w3-border" 
                        type="number" 
                        value={noOfKids}
                        name="noOfKids" 
                        min="0" 
                        max="100"
                        onChange={handleChange}
                        />  
                <p>

                    <button title="Set filter values" className="w3-button w3-block w3-green w3-left-align" type="submit"><i className="fa fa-search w3-margin-right"></i> Set filter</button></p>
                </form>
            </div>
        <div className="w3-bar-block">
            <a href="#apartment" className="w3-bar-item w3-button w3-padding-16"><i className="fa fa-building"></i> House Class</a>
            <a href="#contact" className="w3-bar-item w3-button w3-padding-16"><i className="fa fa-envelope"></i> Contact</a>
        </div>
    </nav>
)}