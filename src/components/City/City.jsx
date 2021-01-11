import React from 'react'
import "./City.css"

const City = ({name, postalCode}) => {
    return (
        <div className="city">
            <span className="city__name">{name}</span>
            <span className="city__postal-code">{postalCode}</span>
        </div>
    )
}

export default City
