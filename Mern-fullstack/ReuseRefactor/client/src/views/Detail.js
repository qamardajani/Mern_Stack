import React ,  { useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div>
            {
                product ? 
                <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Descreption: {product.desc}</p> 
                </div>
                : <p>Loading</p>
            }
            <Link to={"/product/update/"+product._id}>
    Edit
</Link>

        </div>
    )
}

export default Detail
