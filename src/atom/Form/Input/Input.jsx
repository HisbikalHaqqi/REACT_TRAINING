import React from 'react'

const Input = (props) => {
    return (
        <div className="form-group">
            <label>{ props.label }</label>
            <input type={ props.type } className="form-control" placeholder= { props.placeholder}></input>
        </div>   
    )
}

export default Input