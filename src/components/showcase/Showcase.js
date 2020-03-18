import React from 'react'
import Item from './Item'
import '../showcase/css/Showcase.css'
export default function Showcase(){

    const items = [
        {color:"black", image: require("../../assets/project_nxtgame@3x.png")},
        {color:"#626262", image: require("../../assets/nxtgame_landing@3x.png")},
        // {color:"black", image:require("../../assets/project_nxtgame@3x.png")},
        // {color:"#626262", image:require("../../assets/project_nxtgame@3x.png")}
    ]
    
    const gridItems = items.map((item) => (
        <Item key={items.indexOf(item)} image={item.image} backgroundColor={item.color}></Item>
    ));

    return (
        <div className="showcase-wrapper" id="section2">
            {gridItems}
            
        </div>
    )
}