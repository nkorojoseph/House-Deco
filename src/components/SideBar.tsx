import React from "react";

export const SideBar = ():JSX.Element => (
    <nav className="w3-sidebar w3-light-grey w3-collapse w3-top"  id="mySidebar">
            <div className="w3-container w3-display-container w3-padding-16">
                <i  className="fa fa-remove w3-hide-large w3-button w3-transparent w3-display-topright"></i>
                <h3>Decorate</h3>
                <h3>from $99</h3>
                <hr/>
                <form target="_blank">
                <p><label><i className="fa fa-money"></i> Your budget</label></p>
                <input className="w3-input w3-border" type="text" placeholder="Your budget for decoration" name="CheckIn" required />          
                <p><label><i className="fa fa-male"></i> Adults</label></p>
                <input title="Number adults in the house" className="w3-input w3-border" type="number" value="1" name="Adults" min="1" max="6" />              
                <p><label><i className="fa fa-child"></i> Kids</label></p>
                <input title="Number adults in the house" className="w3-input w3-border" type="number" value="0" name="Kids" min="0" max="6" />
                <p><button className="w3-button w3-block w3-green w3-left-align" type="submit"><i className="fa fa-search w3-margin-right"></i> Search availability</button></p>
                </form>
            </div>
        <div className="w3-bar-block">
            <a href="#apartment" className="w3-bar-item w3-button w3-padding-16"><i className="fa fa-building"></i> Apartment</a>
            <a href="#contact" className="w3-bar-item w3-button w3-padding-16"><i className="fa fa-envelope"></i> Contact</a>
        </div>
    </nav>
)