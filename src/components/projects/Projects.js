import React, {useState} from 'react'
import LargeProjectContainer from './LargeContainer.js'
import Button from '../../common/button/Button'
import './css/Projects.css'
import Description from './Description.js'

export default function Projects() {

    const data = [
        {
            title: 'NxtGame',
            year: '2017',
            descript: 'Revolutionary sports app connecting people to local pick up games near them.',
            languages: 'Flutter',
            image: require('../../assets/project_nxtgame@3x.png'),
            imageBackgroundColor: 'black',
            url: '',
            imageDirection: 'left'
        },
        {
            title: 'NxtGame Landing Page',
            year: '2019',
            descript: 'Beautifully sleek landing page for the NxtGame app. Sign up for the beta today!',
            languages: 'Next/Mailchimp',
            image: require('../../assets/nxtgame_landing_page.png'),
            imageBackgroundColor: '#626262',
            marginTop: '5em',
            url: '',
            imageDirection: ''
        }
    ]
    const smallProjectsData = [
        {
            title: 'CAMR1',
            year: '2019',
            descript: 'CAMR1 is an IOS mobile application that recognizes dominant objects with the phone\'s camera using machine learning.',
            languages: 'See Project',
            url: 'https://github.com/EmmanuelOgbewe/CAMR1',
        },
        {
            title: 'Neural Network',
            year: '2019',
            descript: 'Two layer neural network built in python. Takes in input data and determines a optimal output.',
            languages: 'See Project',
            
            url: 'https://github.com/EmmanuelOgbewe/NeuralNet',
        },  
    ]

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