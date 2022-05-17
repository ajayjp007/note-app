import "./Login.css"
import { useState } from "react"
import { Redirect } from "react-router-dom"

const Login = () => {

    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)

    const signInHandler = () => {
        setSignIn(true)
        //should validate email and stuff and then redirect
    }

    const SignUpHandler = () => {
        setSignUp(true)
    }

    return (
        <div className="split-container">
            <div className="main">
                {signIn && <Redirect to="/user-notes" />}
                {signUp && <Redirect to="/sign-up" />}
                <h1 className="heading-login">NOTESAPP<img id="logo" src="https://www.svgrepo.com/show/95757/note.svg" /></h1>

                <p className="some-para">Login to Your Account.</p>
                <p className="social-media-links">Login using your social networks.</p>
                <div className="icon-login-container">
                    <img src="https://www.svgrepo.com/show/157815/twitter.svg" alt="twitter" className="social-media-icons" />
                    <img src="https://www.svgrepo.com/show/157818/facebook.svg" alt="facebook" className="social-media-icons" />
                    <img src="https://www.svgrepo.com/show/349378/gmail.svg" alt="gmail" className="social-media-icons" />
                    <img src="https://www.svgrepo.com/show/7385/apple.svg" alt="mac" className="social-media-icons" />
                </div>
                <form className="login-container" onSubmit={signInHandler}>
                    <input className="input-login" type="text" placeholder="Username" />
                    <input className="input-login" type="password" placeholder="Password" />
                    <button className="btn-login" type="submit">Sign In<img src="https://www.svgrepo.com/show/33093/right-arrow.svg" className="right-arrow-login" /></button>
                    <button className="btn-login" type="submit">Forgot Password?</button>
                </form>
            </div>
            <div className="right-half">
                <p className="new-here"><img className="new-here-icon" src="https://www.svgrepo.com/show/100644/new.svg" /> New Here?</p>
                <p className="sign-up-login">Sign up and discover a great amount of opportunities!</p>
                <button className="signup-btn-login" onClick={SignUpHandler}>Sign Up</button>
            </div>
        </div>
    )
}

export default Login