import React from 'react';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
import auth from './Firebase';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
    }

    const navigate = useNavigate()

    if (gUser || user) {
        navigate('/')
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='login-form mx-auto shadow mt-5'>
            <h2 className='text-center'>Please Login</h2>
            <form className='d-flex flex-column ' onSubmit={handleLogin}>
                <input className='form-in' type="email" name="email" id="" placeholder='Your Email' required />
                <input className='form-in' type="password" name="password" id="" placeholder='Password' required />
                <input className='btn btn-info sub-btn' type="submit" value="Login" />
                <p className='mt-3 text-center'>Don't have any account? <Link to='/signup'>Signup </Link> </p>
            </form>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='or-sec'></div>
                <p className='mt-3 mx-3'>or</p>
                <div className='or-sec'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='g-btn mx-auto'>
                <img className='icon' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                <p className='pt-2'>GOOGLE</p>
            </button>
        </div>
    );
};

export default Login;