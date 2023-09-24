import React from 'react'
import "./style.css"
import { Slide } from 'react-awesome-reveal'

function HeadingOne({ label }) {
    return (<>
        <Slide direction={"up"}>
            {
                label ?
                    <Slide direction={"up"}>
                        <h1 id='headingOne'>
                            {label}
                        </h1> </Slide> : null
            }
        </Slide>
    </>)
}

export default HeadingOne
