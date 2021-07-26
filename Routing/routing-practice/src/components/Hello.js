import React from 'react'

const Hello = (props) => {
    let isNum = true;
    if (isNaN(+props.id)) {
        isNum = false ;
    }
    return (
        <div>
            { isNum ? <h1> This Number is : {props.id}  </h1> : <h1> This word is : {props.id}</h1> }

        
        </div>
    )
}

export default Hello
