import React from 'react'
import Item from '../showcase/Item'
import Description from '../projects/Description'
import './css/LargeContainer.css'

export default function LargeProjectContainer({ image, imageBackgroundColor, imageDirection, title, marginTop, year, url, descript, languages }) {
    const item = <div id="project-image-wrapper">
        <Item
            image={image}
            url={url}
            width={'50vw'}
            backgroundColor={imageBackgroundColor}
        ></Item>
    </div>
    const description = 
        <Description 
            title={title} 
            image={image} 
            year={year} 
            descript={descript} 
            descriptWidth={"80%"}
            languages={languages} 
            padding={imageDirection !== 'left' ? '1em 0 0 6.2em' : '1em 0 0 6.2em'} 
        />

    return (
        <div className="large-project-container-wrapper" style={{ marginTop }}>

            {imageDirection === 'left' ? [item, description] : [description, item]}

        </div>
    )
}