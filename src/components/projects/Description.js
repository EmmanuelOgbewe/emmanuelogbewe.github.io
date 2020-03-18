import React from 'react'
import './css/Description.css'

export default function Description(
    {padding, 
    height, 
    margin,
    labelWidth,
    descriptWidth, 
    descriptHeight,
    alignItems, 
    titleSize, 
    yearSize, 
    descriptSize, 
    languagesSize, 
    title, 
    year,
    url, 
    descript, 
    languages}) {
    return (
        <div id="description-wrapper" 
        style={{padding: padding, alignItems: alignItems, margin : margin}}>
        <h1 style={{fontSize : titleSize, width: '100%'}} id="project-title">{title}</h1>
        <h1 style={{fontSize: yearSize, width: labelWidth}} id="year">{year}</h1>
        <p style={{fontSize: descriptSize, height: descriptHeight, width: descriptWidth}} id="descript">{descript}</p>
        <a id="languages-wrapper" style={{margin : '0px', width: labelWidth}} target= '_blank' rel="noopener noreferrer" href={url}><p style={{fontSize: languagesSize }} id="l">{languages}</p></a>
    </div>
    )
}