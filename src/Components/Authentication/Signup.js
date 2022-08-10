import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom'
import Loading from '../Shared/Loading';
import auth from './Firebase';
import './Login.css'

const Signup = () => {
    const navigate = useNavigate()


    const [signInWithGoogle, user, gLoading] = useSignInWithGoogle(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        emailUser,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);


    if (user || emailUser) {
        navigate('/')
        console.log(user, emailUser)
    }
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value;
        const displayName = e.target.name.value
        createUserWithEmailAndPassword(email, password)
        await updateProfile(displayName)
    }

    return (
        <div>
            <div className='login-form mx-auto shadow mt-5'>
                <h2 className='text-center'>Please Sign Up</h2>
                <form className='d-flex flex-column ' onSubmit={handleSignUp}>
                    <input className='form-in' name='name' type="text" placeholder='Your Name' />
                    <input className='form-in' type="email" name="email" id="" placeholder='Your Email' required />
                    <input className='form-in' type="password" name="password" id="" placeholder='Password' required />
                    <input className='btn btn-info sub-btn' type="submit" value="Sign Up" />
                    <p className='mt-3 text-center'>Already have an account?<Link to='/login'>Login</Link> </p>
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
        </div>
    );
};

export default Signup;