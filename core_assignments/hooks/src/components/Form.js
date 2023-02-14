import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const checkFirstName=(e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 1){
            setFirstNameError("First Name is required")
        } else if(e.target.value.length < 3){
            setFirstNameError("First Name must be more than 2 characters")
        } else {
            setFirstNameError("")
        }
    }
    const checkLastName=(e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 1){
            setLastNameError("Last Name is required")
        } else if(e.target.value.length < 3){
            setLastNameError("Last Name must be more than 2 characters")
        } else {
            setLastNameError("")
        }
    }
    const checkEmail=(e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 1){
            setEmailError("Email is required")
        } else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError("")
        }
    }
    const checkPassword=(e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 1){
            setPasswordError("Password is required")
        } else if(e.target.value.length < 8){
            setPasswordError("Password must be more than 8 characters")
        } else {
            setPasswordError("")
        }
    }
    const checkConfirm=(e) => {
        setConfirm(e.target.value)
        if(e.target.value !== password){
            setConfirmError("Passwords must match")
        } else {
            setConfirmError("")
        }
    }
    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ checkFirstName }/>
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={checkLastName}/>
                    {
                        lastNameError ?
                        <p>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ checkEmail}/>
                    {
                        emailError ?
                        <p>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ checkPassword}/>
                    {
                        passwordError ?
                        <p>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ checkConfirm}/>
                    {
                        confirmError ?
                        <p>{confirmError}</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>confirm: {confirm}</p>
            </div>
        </div>
    )
}

export default Form;