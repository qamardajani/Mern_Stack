import React , {useState}from 'react'
import axios from 'axios';
const ProductForm = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            desc
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update title and price
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title :</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price :</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Descreption :</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm
