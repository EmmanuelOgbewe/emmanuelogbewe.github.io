import React from 'react'
import '../showcase/css/Item.css'

export default function Item({image,url, width, backgroundColor}){
    console.log(`${image}`)
    
    return (
        <div className ="item-wrapper" style={{
            backgroundColor,
            width,
            padding : '3.0em',
        }}>
            <div id="image-wrapper"><img alt={image} src={image}></img></div>
        </div>

    )
    
}