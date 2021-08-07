import React , {useState}from 'react'

const ProductForm = (props) => {
    const {initTitle,initPrice,initDesc, onSubmitProp } = props;
    const [title, setTitle] = useState(initTitle)
    const [price, setPrice] = useState(initPrice)
    const [desc, setDesc] = useState(initDesc)

    
    const onSubmitHandler = e => {
     
        e.preventDefault();
        onSubmitProp({title,price,desc});
            setTitle("");
            setPrice(0);
            setDesc("");
        }

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
