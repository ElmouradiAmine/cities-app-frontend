import React from 'react'

import './Info.css'

const Info = ({color, text}) => {
    return (
        <div className={`info info--${color}`}>
            {text}
        </div>
    )
}

export default Info
