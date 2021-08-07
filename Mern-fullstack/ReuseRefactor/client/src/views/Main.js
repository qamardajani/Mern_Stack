import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

import axios from 'axios';


const Main = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
            .then(res=>{
                setProduct(res.data.products);
                setLoaded(true);
            });
    },[])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    const createNewProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res=>{
                setProduct([...product, res.data]);
            })
    }
    return (
        <div>
           <ProductForm onSubmitProp={createNewProduct} initTitle="" initPrice="" initDesc="" />
           <hr/>
           {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main

