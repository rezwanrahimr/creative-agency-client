import Signup from './Signup.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../src/firebase.init'


const SignUp = () => {

    const navigate = useNavigate();

    // Sign Up with Google.
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    // create user with Email and Password.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    // Sign up with Facebook.
    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
   


    if (error) {
        toast.error(error.message);
    }
    if (loading || Gloading || Floading) {
        return 
    }
    if (user || Guser || Fuser) {
        navigate('/Home')
    }
    return (
        <div>
        <div className='row'>
            <div className='col-lg-6 col-sm-12 Image d-flex justify-content-center'>
                {/* <img src={registarImg} alt="" /> */}
            </div>
            <div className='col-lg-6 col-sm-12'>
                <div className="forms-container mt-5">
                    <div className="signin-signup">
                        <form action="#" className="formControl sign-in-form">
                            <h2 className="title">REGISTER</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            </div>
                            {
                                error || Gerror || Ferror ? <p className='text-danger'>{error.message || Gerror.message || Ferror.message}</p> : ''
                            }
                            <button onClick={() => createUserWithEmailAndPassword(email, password)} className='px-5' variant="outline-primary">CREATE</button>{' '}
                            <p className="social-text">Already Have a Account <Link to={'/Login'}>Login</Link></p>
                            <div className="social-media">
                                <a href="#" onClick={() => signInWithFacebook(email, password)} className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" onClick={() => signInWithGoogle(email, password)} className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;