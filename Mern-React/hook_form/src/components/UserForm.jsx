import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConPassword] = useState("");
    const [firstnameerror, setFirstNameError] = useState("");
    const [lastnameerror, setLastNameError] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const [confirmpassworderror, setConPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password , confirmpassword };
        console.log("Welcome", newUser);
    };
     const handlefirstname = (e) => {
        setFirstName(e.target.value);

    if(e.target.value.length < 2 ) {
        setFirstNameError(" FIRST NAME MUST BE AT LEAST 2 CHARS!")
}
 else {
    setFirstNameError("");
}
};
const handlelastname = (e) => {
    setLastName(e.target.value);

if(e.target.value.length < 2 ) {
    setLastNameError(" LAST NAME MUST BE AT LEAST 2 CHARS!")
}
else {
setLastNameError("");
}
};
const handleEmail = (e) => {
    setEmail(e.target.value);

if(e.target.value.length < 5 ) {
    setEmailError(" EMAIL MUST BE AT LEAST 5 CHARS!")
}
else {
setEmailError("");
}
};
const handlePassword = (e) => {
    setPassword(e.target.value);

if(e.target.value.length < 8 ) {
    setPasswordError("EMAIL MUST BE AT LEAST 8 CHARS!")
}
else {
setPasswordError("");
}
};
const handleConfirmPassword = (e) => {
    setConPassword(e.target.value);

if(e.target.value  !== password ) {
    setConPasswordError("MUST BE MATCHED !")
}
else {
setConPasswordError("");
}
};
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name : </label> 
                <input type="text" onChange= {handlefirstname} />
                {
                    firstnameerror ?
                    <p style ={{color:"red"}}>{firstnameerror}</p>:
                    ""
                }
            </div>
            <div>
                <label>Last Name : </label> 
                <input type="text" onChange={ handlelastname } />
                {
                    lastnameerror ?
                    <p style ={{color:"red"}}>{lastnameerror}</p>:
                    ""
                }
            </div>
            <div>
                <label>Email : </label> 
                <input type="text" onChange={ handleEmail } />
                { emailerror?
                    <p style ={{color:"red"}}>{emailerror}</p>:
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                { passworderror?
                    <p style ={{color:"red"}}>{passworderror}</p>:
                    ""
                }
            </div>
           
                <label> Confirm Password: </label>
            <input type="text" onChange={ handleConfirmPassword} />
            { confirmpassworderror?
                    <p style ={{color:"red"}}>{confirmpassworderror}</p>:
                    ""
                }
            
            <input type="submit" value="Create User" />
            <h1> Your Form Data</h1>
            <p>First Name : {firstname}</p>
            <p>Last Name : {lastname}</p>
            <p>Email: {email}</p>
            <p>Password : {password}</p>
            <p>Confirm Password : {confirmpassword}</p>

        </form>
    );
};
    
export default UserForm;