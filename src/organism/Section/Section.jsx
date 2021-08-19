import React from 'react'
import ImageVaccine from '../../assets/vaksin_logo.png'
import './Section.css'

const Section = (props) => {
    return (
        <div className="col col-2">
            <div className="">
                <h1>{props.title}</h1>
                <p>
                   { props.desc }
                </p>
            </div>
            <div className="">
                <img className="img-section" src={ImageVaccine} alt="img-section"></img>
            </div>
        </div>
    )
}

export default Section