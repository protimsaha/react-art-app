import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Authentication/Firebase';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const displayName = user?.displayName
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-warning fw-bold"> <h3>ART APP</h3></Link>
                <div className="d-flex align-items-center">
                    <h5 className='mt-2'>{displayName}</h5>
                    {
                        user ? <button onClick={() => signOut(auth)} className='ms-2 btn'>Logout</button> : <Link to='login'><button>Login</button></Link>
                    }


                </div>
            </div>
        </nav>
    );
};

export default Navbar;