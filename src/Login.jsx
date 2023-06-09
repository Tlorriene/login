import React, {useState} from "react"

export const Login = (props) => {
    const [email, setEmail ] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log (email);
    }

    return (
        <div className="auth-form-container">
            <h1>Login to your Account</h1>
        <form className="login-form" onSubmit={handleSubmit} >
            <label for="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="your email" id="email" />
            <label for="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="**********" id="password"/>
            <button type="submit">Log in</button> 
        </form>
        
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}> No Account?, Register Here </button>
        </div>
    )
}