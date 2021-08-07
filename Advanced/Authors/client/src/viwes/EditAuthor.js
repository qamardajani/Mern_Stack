import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link,navigate } from '@reach/router';
import AuthForm from '../components/AuthForm';



const EditAuthor = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded , setLoaded] = useState(false);
    const [errors, setErrors] = useState([])


    useEffect(() =>{

        axios.get("http://localhost:8000/authors/"+ props.id)
        .then(res =>{
            setAuthor(res.data);
            setLoaded(true);

        })
    },[props.id])

    const editAuthor = (author) =>{
        axios.put("http://localhost:8000/authors/edit/"+props.id ,  author)
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err=> {
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
            <p>Edit this Author:</p>
            {loaded && <AuthForm onSubmitProp ={editAuthor} initName={author.author.name} errors = { errors }/> }
    
        </div>
    )
}

export default EditAuthor
