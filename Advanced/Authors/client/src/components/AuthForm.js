import React,{useState} from 'react'
import { navigate } from '@reach/router';

const AuthForm = (props) => {
    const {initName, onSubmitProp, errors} = props;
    const [name, setName] = useState(initName)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name });
    }
    console.log(initName );

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Name:</label>
                <input type= "text" value = { name } onChange = { e => { setName(e.target.value) } }></input>
                {
                    errors.map((value, key) => 
                        <p key={key}>{value}</p>
                    )
                }
                <button type="submit">Submit</button>
                <button onClick= {() => navigate("/")}>Cancel</button>
            </form>
            
            
        </div>
    )
}

export default AuthForm
