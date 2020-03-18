import React from 'react'
import '../footer/Footer.css'
export default function Footer() {
    return (
        <div id="footer-wrapper" >
            <div id='footer'>
                <ul className="footerListItems">
                    <li><a id="name" href="/#">EOGBEWE.</a></li>
                    <li><a target= '_blank' rel="noopener noreferrer" href="https://www.instagram.com/emmanuelogbewe/">INSTAGRAM</a></li>
                    <li><a target= '_blank' rel="noopener noreferrer" href="https://twitter.com/emmanuelogbewe">TWITTER</a></li>
                    <li><a target= '_blank' rel="noopener noreferrer" href="https://github.com/EmmanuelOgbewe">GITHUB</a></li>
                    <li><a target= '_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/emmanuel-ogbewe-b23196127/">LINKEDIN</a></li>
                    <li><a target='_blank' rel="noopener noreferrer" href="mailto:emmanuel.ogbewe12@gmail.com">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}