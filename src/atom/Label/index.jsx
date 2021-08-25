import React from 'react'

const Label = (props) => {
    return (
        <div>
            <div className="Comment-text">
            {
                props.type === "title" ? <h6>{props.children} </h6> : <p>{props.children} </p>
            }
            </div>
        </div>
    )
}

export default Label