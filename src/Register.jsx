import React, {useState} from "react";

export const Register = (props) => {
    const [firstName, setFirstName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [address, setAddress] = useState ('');
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label for ="firstName">First Name</label>
            <input value={firstName} name="First Name" onChange={(e) => setFirstName(e.target.value)} id="FirstName" placeholder="First Name"/>
            <label for ="lastName">Last Name</label>
            <input value ={lastName} name="Last Name" onChange={(e)=> setLastName (e.target.value)} id="LastName" placeholder="Last Name" />
            <label for ="address"> Address</label>
            <input value={address} name="Address" onChange={(e) => setAddress (e.target.value)} id="Address" placeholder="Address"/>
            <label for ="email"> email</label>
            <input value={email} name="email" onChange={(e) => setEmail (e.target.value)} id="Email" placeholder="Email"/> 
            <label for ="pass"> Password</label>
            <input value={pass} name="Password" onChange={(e) => setPass (e.target.value)} id="Password" placeholder="Password"/>
            <button type="submit">Register</button>
        </form>

        <button className="link-btn" onClick={()=> props.onFormSwitch ('login')}> Already a member, sign in! </button>
        

        </div>
    )
}