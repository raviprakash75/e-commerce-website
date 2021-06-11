import React  from 'react'
import './Login.css';
import { Link ,useHistory} from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            History.pushState(('/'))
        })
        .catch(error=>alert(error.massage))
        // firebase
    }
    const register=e=>{
        e.preventDefault();
        auth 
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
        console.log(auth)
        })
        .catch(error=>alert(error.massage))
        // firebase
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    
                    <button type='submit' onClick={signIn}
                    className="login_singInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON-FAKE-CLONE condition of use & Sale. Please see our Privacy
                    Notice,Our Cookies notice and our Interest based Ads Notice.
                </p>
                <button onClick={register}
                className="login_registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}
export default Login;
