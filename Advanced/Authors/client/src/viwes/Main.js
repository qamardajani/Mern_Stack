import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AuthList from '../components/AuthList';


const Main = () => {
    
    const [ authors, setAuthors ] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const deleteAuthor = (authorId) =>{
        axios.delete("http://localhost:8000/authors/delete/" + authorId)
        .then(removeFromDom(authorId)
        );
    }

    const removeFromDom = authorId => {
        setAuthors(authors.filter(authors => authors._id !== authorId))
      }

    useEffect(()=>{
    axios.get("http://localhost:8000/authors")
    .then(res =>{

        setAuthors(res.data);
        setLoaded(true);
        console.log(res.data)

    });
    },[])



    return (
        <div>
            <Link to = {"/new"}>Add an Author</Link>
           { loaded && <AuthList authors ={authors} deleteAuthor={deleteAuthor}/>}
            
        </div>
    )
}

export default Main
