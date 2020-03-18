import React from 'react'

export default ({
    textColor, 
    backgroundColor, 
    height, 
    width, 
    href,
    buttonText, 
    borderColor, 
    borderWidth,
    padding,
    margin,
    fontSize,
    fontWeight,
    onTap,
    position,
    paddingTop,
    paddingRight,
    paddingLeft,
    paddingBottom,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop
}) => {

    return (
        <button type="button" href={href} onClick={onTap} style={{
            width,
            height,
            borderWidth,
            borderColor,
            color: textColor,
            backgroundColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            padding,
            margin,
            position,
            fontSize,
            fontWeight,
            marginTop,
            marginBottom,
            marginRight,
            marginLeft,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom
        }}>
            {buttonText}
        </button>
    )
}





