import React from 'react'

const Label = ({children}) => {
    return (
        <div>
            <div className="Comment-text">
                { children }
            </div>
        </div>
    )
}

export default Label