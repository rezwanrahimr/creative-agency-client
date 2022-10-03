import React from 'react';
import Signup from './Signup.css'

const SignUp = () => {
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
                            <Button onClick={() => createUserWithEmailAndPassword(email, password)} className='px-5' variant="outline-primary">CREATE</Button>{' '}
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