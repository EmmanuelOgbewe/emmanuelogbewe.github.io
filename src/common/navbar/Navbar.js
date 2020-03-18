import React from 'react'
import '../navbar/Navbar.css'

export default function NavBar() {
    const [showNavMenu, showNavMenuFunc] = React.useState('nav-small-screen-hide')
    const [firstBar, rotateFirstBar] = React.useState('top-bar')
    const [secondBar, rotateSecondBar] = React.useState('bottom-bar')


    return (
        <header id="nav-header">
            <h1>EOGBEWE.</h1>
            <nav id="nav-large-screen">
                <ul className="nav_items">
                    <li><a href="/#">HOME</a></li>
                    <li><a href="#section1">ABOUT</a></li>
                    <li><a href="#section2">PROJECTS</a></li>
                    <li><a target='_blank' rel="noopener noreferrer" href="mailto:emmanuel.ogbewe12@gmail.com">CONTACT</a></li>
                </ul>
            </nav>
            <div id="nav-hamburger-icon" 
                onClick={() => {
                    if (showNavMenu === 'nav-small-screen-open') {
                        showNavMenuFunc('nav-small-screen-close')
                        rotateFirstBar('rotate-up-right')
                        rotateSecondBar('rotate-up-left')
                    } else {
                        showNavMenuFunc('nav-small-screen-open')

                        rotateFirstBar('rotate-down-right')
                        rotateSecondBar('rotate-down-left')
                    }
                    
                }}
            >
                <div id={firstBar}></div>
                <div id={secondBar}></div>
            </div>

            <nav id={showNavMenu} className="nav-small-screen">
                <ul className="nav_items">
                    <li><a href="/#">HOME</a></li>
                    <li><a href="#section1">ABOUT</a></li>
                    <li><a href="#section2">PROJECTS</a></li>
                    <li><a target='_blank' rel="noopener noreferrer" href="mailto:emmanuel.ogbewe12@gmail.com">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}