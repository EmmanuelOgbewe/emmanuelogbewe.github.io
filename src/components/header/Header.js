import React from 'react';
import Button from '../../common/button/Button'
import '../header/Header.css'


export default function Header() {

    return (
        <div className="header">
            <div className="col-1">
                <div id="row-1">
                    <div id="text-container"><h1>DESIGNER</h1></div>
                    <div id="text-container-2"><h1>CREATOR</h1></div>
                    <div id="text-container-3"><h1>ENGINEER.</h1></div>
                </div>
                <a href="#section2"><Button
                    height={'2.8em'}
                    width={"11em"}
                    fontSize={'1.2em'}
                    textColor={'white'}
                    borderWidth={1}
                    borderColor={'white'}
                    buttonText={'VIEW MY WORK'}
                    backgroundColor={'transparent'}
                    fontWeight={600}
                    padding={'1em 2em'}
                /></a>
            </div>
            <div className="row-2">
                <a target= '_blank' rel="noopener noreferrer" href="https://twitter.com/emmanuelogbewe"><img id="social-icon" src={require('../../assets/icons8-twitter-90@3x.png')} alt="twitter" /></a>
                <a target= '_blank' rel="noopener noreferrer" href="https://www.instagram.com/emmanuelogbewe/"><img id="social-icon" src={require('../../assets/icons8-instagram-90@3x.png')} alt="instagram" /></a>
                <a target= '_blank' rel="noopener noreferrer" href="https://github.com/EmmanuelOgbewe"><img id="social-icon" src={require('../../assets/GitHub-Mark-Light-120px-plus@3x.png')} alt="Github" /></a>
            </div>
        </div>
    );
}