import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
   
    const updateExistingProduct = product => {
       
        axios.put('http://localhost:8000/api/products/update'+ id, product)
    
            .then(res => console.log(res));
    }
    return (
        <div>
            {product.title}
    {loaded && (
        <>
        <ProductForm 
        onSubmitProp={updateExistingProduct}
        initTitle={product.title}
        initPrice={product.price}
        initDesc={product.desc}
        />
         <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
        </>
    )}
        </div>
    )


}

export default Update
