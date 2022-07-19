import React from 'react'
import './Button.css'

const Button = ({ title }: {title: string}) => {
    const handleClick = (): any => {
        console.log("Button Clicked!!")
    }
    
    return (
        <button className="UI-Button" onClick={() => handleClick()}>{title}</button>
    )
}

export default Button