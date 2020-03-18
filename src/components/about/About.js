import React from 'react'
import '../about/About.css'
export default function About() {
    return (
        <div className="about-wrapper" id="section1">
            <p>Hi I’m Emmanuel Ogbewe. I am a full stack developer from Gaithersburg, Maryland. 
                I enjoy designing new ideas and bringing them to life with code.
                 Here’s some of the different languages and frameworks I work with:
            </p>
            <div id="languages">
                <h2>Python</h2>
                <h2>Javascipt</h2>
                <h2>Java</h2>
                <h2>Swift</h2>
            </div>
            <div id="frameworks">
                <h2>React</h2>
                <h2>Next</h2>
                <h2>Flutter</h2>
            </div>
        </div>
    )
}