import React, {useState} from 'react'

const ToDo = () => {
    const [list, setList] = useState([])
    const [name, setName] = useState("")

    const formHandel = (e) =>{
        e.preventDefault();
    setList(list.concat({name:name,checked:false}))
    setName("")

    }

const ckickhandler =(k)=>{
const arr=[...list]
arr[k].checked=!arr[k].checked
setList(arr)



}

const del=(i)=>{
    const arr=[...list]
    arr.splice(i, 1)
    setList(arr)

}

    return (
        <>
        <div>
            <textarea onChange = {(e)=> setName(e.target.value)} value={name}></textarea>
            <button onClick = {formHandel}>Add</button>
            
        </div>
        {list.map((item,i)=>{
            return <div key={i}>
                <p style={{textDecoration:  item.checked ? "line-through":"none"}}> {item.name} </p>
                <input type="checkbox" onClick={()=>ckickhandler(i)} />
                <button onClick={()=> del(i) } >delete</button>
            </div>

        })}
        </>
        
        
    
    )
}

export default ToDo