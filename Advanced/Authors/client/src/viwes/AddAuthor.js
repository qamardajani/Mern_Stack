import React, {useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import AuthForm from '../components/AuthForm';

const AddAuthor = () => {

    const [author, setAuthor] = useState([])
    const [errors, setErrors] = useState([])
    

    const addNewAuth = (newAuth) =>{

        axios.post("http://localhost:8000/authors/new",newAuth)
        .then(res => {
            setAuthor([...author,res.data]);
            navigate("/");
          })
          .catch(err => {
            const errorResponse = err.response.data.errors;
            const newArr = [];
            for (const key of Object.keys(errorResponse)){
              newArr.push(errorResponse[key].message);
            }
            setErrors(newArr);
      
          });

    }



    return (
        <div>
            <Link to ="/">Home</Link>
            <p>add new Author:</p>
            <AuthForm onSubmitProp = { addNewAuth } initName = { "" } errors = { errors } />
               
        </div>
    )
}

export default AddAuthor
