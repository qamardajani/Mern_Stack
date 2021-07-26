import React , { useState }from 'react'
import { navigate } from '@reach/router';
const Search = (props) => {
    const [option, setOption] = useState("people");
    const [id, setId] = useState(1);

 const showSearch = (e) =>
 {
      e.preventDefault();
      navigate(`/${option}/${id}`)

      
 }

    return (
        <div>
            <form>
           <label> Search for :</label>
            <select onChange ={(e)=>setOption(e.target.value)}> 
                <option value ="people" > people</option>
                <option value ="planets" > planets</option> 
            </select > 
                <label> Id :</label>
                <input type = "number" onChange ={(e)=>setId(e.target.value)} />
                <button onClick={showSearch}> Search </button>
            </form>
        </div>
    )
}

export default Search
