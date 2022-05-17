import "./SignUp.css"
import { useState, useRef } from "react"
import React from "react"
import { Redirect } from "react-router-dom"

const SignUp = () => {

    const [goBack, setGoBack] = useState(false)
    const [checker, setChecker] = useState(false)
    const [signUpClick, setsignUpClick] = useState(false)
    const [personalDetails, setPersonalDetails] = useState(false)
    const [showError, setshowError] = useState("")
    let enteredValues
    const nameEntered = useRef("")
    const userNameEntered = useRef("")
    const passwordEntered = useRef("")
    const passwordConfirm = useRef("")

    //should check form and register user before redirecting.

    const goBackHandler = () => {
        setGoBack(true)
    }

    const checkingHandler = () => {
        setChecker(!checker)
    }

    const registerValues = () => {
        enteredValues = {
            name: nameEntered.current.value,
            password: passwordEntered.current.value,
            passwordSecond: passwordConfirm.current.value,
            username: userNameEntered.current.value
        }

        if (enteredValues.name.trim().length === 0) {
            setshowError("Name cannot be empty")
        }
        if (enteredValues.password.length < 6) {
            setshowError("Password is too short")
        }
        if (enteredValues.password !== enteredValues.passwordSecond) {
            setshowError("Passowords don't match")
        }
        if (enteredValues.username.trim().length === 0) {
            setshowError("Username cannot be left empty")
        }
        if (enteredValues.password !== "" && enteredValues.password === enteredValues.passwordSecond && enteredValues.name.trim().length !== 0 && enteredValues.username.trim().length !== 0 && checker) {
            setshowError("Looks Good!")
        }
    }


    const registerUserHandler = () => {


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: nameEntered.current.value,
            password: passwordEntered.current.value,
            username: userNameEntered.current.value
        });

        const username = userNameEntered.current.value
        var requestOptions = {
            method: 'POST',
            headers: username,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://tasks-6757e-default-rtdb.firebaseio.com/tasks.json", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        setPersonalDetails(true)
    }

    // inputEntered.current.value

    const personalDetailHandler = () => {
        setsignUpClick(true)
        //should collect personal information and send it to the backend that should save it to database
    }


    return (
        <React.Fragment>
            {signUpClick && <Redirect to="/user-notes" />}
            {goBack && <Redirect to="/login-page" />}
            <div className="sign-up-container">
                <div className="left-signup">
                    <h2 className="welcome-back">Welcome Back!</h2>
                    <p className="existing-user">If you are an existing user.</p>
                    <button className="back-btn" type="submit"><img src="https://www.svgrepo.com/show/324205/back-arrow-navigation.svg" alt="back-arrow" className="arrow-icon" onClick={goBackHandler} /> Go back</button>
                </div>
                <div className="right-signup">
                    <h1 className="heading-signup">NOTEAPP<img id="logo-signup" src="https://www.svgrepo.com/show/95757/note.svg" /></h1>
                    {!personalDetails && <form className="form-signup" onSubmit={registerUserHandler}>
                        <input className="input-signup" onKeyUp={registerValues} ref={nameEntered} type="text" placeholder="Name" />
                        <input className="input-signup" onKeyUp={registerValues} ref={userNameEntered} type="text" placeholder="Username" />
                        <input className="input-signup" onKeyUp={registerValues} ref={passwordEntered} type="password" placeholder="Password" />
                        <input className="input-signup" onKeyUp={registerValues} ref={passwordConfirm} type="password" placeholder="Confirm Password" />
                        <div className="t-c">
                            <img id="check-box" src={!checker ? "https://www.svgrepo.com/show/286496/cross.svg" : "https://www.svgrepo.com/show/54262/checked.svg"} onClick={checkingHandler} />
                            <p>By clicking this you agree to all our terms and conditions.</p>
                        </div>
                        <p>{showError}</p>
                        <button type="submit" className={!checker ? "confirm-btn-disable" : "confirm-signup-btn"} >Next<img className="arrow-icon" src="https://www.svgrepo.com/show/33093/right-arrow.svg" alt="right arrow" /></button>
                    </form>}
                    {personalDetails &&
                        <div className="personal-info-container">
                            <p className="personal-info-heading">Personal Information</p>
                            <form className="personal-details-signup" onSubmit={personalDetailHandler}>
                                <div>
                                    <select id="Occupation" name="occupation" className="occupation-location-select">
                                        <option disabled>Choose an Occupation</option>
                                        <option value="Student">Student</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Mechanical Engineer">Mechanical Engineer</option>
                                        <option value="Civil Engineer">Civil Engineer</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Lawyer">Lawyer</option>
                                        <option value="CA">C.A</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Business">Business</option>
                                        <option value="Designer">Designer</option>
                                        
                                    </select>
                                </div>

                                <input placeholder="Institution Name" className="input-signup"></input>
                                <select id="Location" name="Location" className="occupation-location-select">
                                    <option disabled>Place of residence</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option><option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                                <input className="input-signup-dob" type="date" placeholder="Date of Birth" />
                                <button type="submit" className="confirm-signup-btn">Confirm<img className="arrow-icon" src="https://www.svgrepo.com/show/4291/right-arrow.svg" /></button>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignUp