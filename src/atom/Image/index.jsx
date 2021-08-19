import React from 'react'

const Image =  (props) => {
    return (
        <div className="UserInfo">
            <img className="Avatar" src={props.src} alt="avatar"/>
        </div>
    )
}

export default Image;