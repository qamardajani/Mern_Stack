import React ,{useState} from 'react'
import axios from  'axios'

const Product = (props) => {
const [title, settitle] = useState("")
const [price, setprice] = useState(0)
const [description, setdescription] = useState("")

const showProcuct  = e=>{
e.preventDefault();
axios.post('http://localhost:8000/api/products/new',{
    title,price,description ,
})

.then(res=>console.log(res))
.catch(err=>console.log(err));
settitle("");
setprice("");
setdescription("");


}

    return (
        <div>
            <form>
            <label>Title</label>
            <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}></input>
            <label>Price</label>
            <input type="text" onChange={(e)=>setprice(e.target.value)} value={price}></input>
            <label>Description</label>
            <input type="text" onChange={(e)=>setdescription(e.target.value)} value={description}></input>
            <button onClick={showProcuct}>Create</button>
            </form>
            
        </div>
    )
}

export default Product
