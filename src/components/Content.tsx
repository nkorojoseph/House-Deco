import React, { useEffect } from "react";
import livingroom from '../images/livingroom.jpg'
import dinningroom from '../images/diningroom.jpg'
import bedroom from '../images/bedroom.jpg'
import livingroom2 from '../images/livingroom2.jpg'



export const Content = ():JSX.Element => (
    <>
 
        <div className="w3-overlay w3-hide-large"   title="close side menu" id="myOverlay">
        </div>
        

        <div className="w3-main w3-white">

        <div className="w3-hide-large" ></div>

            <div className="w3-container" id="apartment">
                <h2 className="w3-text-green">House Type</h2>
                {/* <div className="w3-display-container mySlides">
                <img src={livingroom} />
                <div className="w3-display-bottomleft w3-container w3-black">
                    <p>Living Room</p>
                </div>
                </div> */}
            </div>
            
            <div className="w3-row-padding w3-section">
                <div className="w3-col s3">
                <img className="demo w3-opacity w3-hover-opacity-off" src={livingroom} style={{width:"100%",cursor:"pointer"}} onClick={()=>"currentDiv(1)"} title="Standard Living room"/>
                </div>                                               
                <div className="w3-col s3">
                <img className="demo w3-opacity w3-hover-opacity-off" src={dinningroom} style={{width:"100%",cursor:"pointer"}} onClick={()=>"currentDiv(2)"} title="Standard Dining room"/>
                </div>
                <div className="w3-col s3">
                <img className="demo w3-opacity w3-hover-opacity-off" src={bedroom} style={{width:"100%",cursor:"pointer"}} onClick={()=>"currentDiv(3)"} title="Standard Bedroom"/>
                </div>
                <div className="w3-col s3">
                <img className="demo w3-opacity w3-hover-opacity-off" src={livingroom2} style={{width:"100%",cursor:"pointer"}} onClick={()=>"currentDiv(4)"} title="Second Living Room"/>
                </div>
            </div>

        </div>
        
        </>
 )