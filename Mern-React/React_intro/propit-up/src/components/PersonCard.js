import React, { Component } from 'react';
    
    class PersonCard extends Component {
        render() {
            const {firstName,lastName,age,hairColor}= this.props;
            return(
                <>
                <h1> {lastName},{firstName}</h1>
                <p> Age : {age}</p>
                <p> Hair color : {hairColor}</p>
                </>
            );

            
        }
    }
    export default PersonCard;