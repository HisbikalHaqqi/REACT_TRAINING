import React from 'react'

const Label = (props) => {
    return (
        <div>
            <div className="Comment-text">
            {
                props.type === "title" ? <h3>{props.children} </h3> : <p>{props.children} </p>
            }
            </div>
        </div>
    )
}

export default Label