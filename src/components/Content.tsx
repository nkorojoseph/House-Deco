import React, { useEffect, useState } from "react";
import livingroom from '../images/livingroom.jpg'
import dinningroom from '../images/diningroom.jpg'
import bedroom from '../images/bedroom.jpg'
import livingroom2 from '../images/livingroom2.jpg'

const logo = require('../images/livingroom2.jpg');



export const Content = ():JSX.Element => {

    const [houseClass, setHouseClass] = useState('')

    const getHouseTitle = (event:any)=>{
        const {title} = event.target
        
        setHouseClass(title)
    }

    return (
        <>
     
            <div className="w3-overlay w3-hide-large"   title="close side menu" id="myOverlay">
            </div>
            
    
            <div className="w3-main w3-white">
    
            <div className="w3-hide-large" ></div>
    
                <div className="w3-container" id="apartment">
                    <h2 className="w3-text-green">House Type</h2>
                </div>
                
                <div className="w3-row-padding w3-section">
                    <div className="w3-col s3">
                    <img onClick={getHouseTitle} className="demo  w3-opacity w3-hover-opacity-off" src={livingroom} style={{width:"100%",cursor:"pointer"}} title="Standard Living room"/>
                    </div>                                               
                    <div className="w3-col s3">
                    <img onClick={getHouseTitle} className="demo w3-opacity w3-hover-opacity-off" src={dinningroom} style={{width:"100%",cursor:"pointer"}}  title="Standard Dining room"/>
                    </div>
                    <div className="w3-col s3">
                    <img onClick={getHouseTitle} className="demo w3-opacity w3-hover-opacity-off" src={bedroom} style={{width:"100%",cursor:"pointer"}}  title="Standard Bedroom"/>
                    </div>
                    <div className="w3-col s3">
                    <img onClick={getHouseTitle} className="demo w3-opacity w3-hover-opacity-off" src={livingroom2} style={{width:"100%",cursor:"pointer"}}  title="Penthouses"/>
                    </div>
                </div>
    
    
            <div className="w3-row-padding">
                
            <h2 className=" w3-text-blue">{houseClass ? houseClass : 'House Grade'}</h2>
             
                    <div className="w3-col m4">
                        <div className="w3-card w3-hover-shadow" style={{width:"100%"}}>
                            <img src={require('../images/livingroom2.jpg').default} alt="Alps" style={{width:"100%"}}/>
                            <div className="w3-container w3-center">
                            <p>The Italian / Austrian Alps</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="w3-col m4">
                        <div className="w3-card w3-hover-shadow" style={{width:"100%"}}>
                            <img src={require('../images/livingroom2.jpg').default} alt="Alps" style={{width:"100%"}}/>
                            <div className="w3-container w3-center">
                            <p>The Italian / Austrian Alps</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="w3-col m4">
                        <div className="w3-card w3-hover-shadow" style={{width:"100%"}}>
                            <img src={require('../images/livingroom2.jpg').default} alt="Alps" style={{width:"100%"}}/>
                            <div className="w3-container w3-center">
                            <p>The Italian / Austrian Alps</p>
                            </div>
                        </div>
                    </div>
                    
    
                  
    
            
            </div>
    
            </div>
            
            </>
     )
}

