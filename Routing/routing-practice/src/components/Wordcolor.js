import React from 'react'

const Wordcolor = (props) => {
    const colors = {
        color : props.color ,
        background : props.bgcolor,
    }
    return (
        <div style = { colors }>
            <h1> The word is : { props.id}</h1>
        </div>
    )
}

export default Wordcolor
