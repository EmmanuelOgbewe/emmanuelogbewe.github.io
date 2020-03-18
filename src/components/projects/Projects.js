import React, {useState} from 'react'
import LargeProjectContainer from './LargeContainer.js'
import Button from '../../common/button/Button'
import {smallProjectsData,data} from './Data.js'
import './css/Projects.css'
import Description from './Description.js'

export default function Projects() {

    const [currentlyShowing, updateCurrentlyShowing] = useState([smallProjectsData[0],smallProjectsData[1]]) 
    const [isHidden, setHidden] = useState(false)

    function addToShowing() {
        var newArr = currentlyShowing

        if (smallProjectsData.length > currentlyShowing.length) {
            const offset = smallProjectsData.length - currentlyShowing.length >= 2 ? 2 : 1
            newArr = currentlyShowing.concat(smallProjectsData.slice((currentlyShowing.length), currentlyShowing.length + offset))
        }
        if (newArr.length === smallProjectsData.length){
            setHidden(true)
        }
        return newArr
    }

    const listItems = data.map((project) => (
        <LargeProjectContainer
            image={project.image}
            imageBackgroundColor={project.imageBackgroundColor}
            imageDirection={project.imageDirection}
            marginTop={project.marginTop}
            url={project.url}
            title={project.title}
            year={project.year}
            descript={project.descript}
            languages={project.languages}
        />
    ))

    function createSmallProjectsItem(data){
        console.log(data)
        return data.map((project) => (
            <Description 
                alignItems={"left"}
                margin={"0px 0px 6em 0px"}
                padding={"0em 0 0 6.2em"}
                labelWidth={"70%"}
                descriptWidth={"80%"}
                descriptHeight={"50%"}
                title={project.title}
                year={project.year}
                descript={project.descript}
                languages={project.languages}
                url={project.url}
            />
        ))
    }
    
    const showButton = smallProjectsData.length > 2 && !isHidden ? 
    <Button
        height={'2.4em'}
        width={"11em"}
        fontSize={'1.2em'}
        textColor={'black'}
        marginTop={'4em'}
        borderWidth={1}
        borderColor={'black'}
        buttonText={'VIEW MORE'}
        backgroundColor={'transparent'}
        fontWeight={600}
        onTap={() => updateCurrentlyShowing(addToShowing())}
        padding={'1em 2em'}
    /> : null


    return (
        <div className="projects-wrapper">
            {listItems}
            <div id="minor-projects-wrapper">{createSmallProjectsItem(currentlyShowing)}</div>
            {showButton}

        </div>
    )
}