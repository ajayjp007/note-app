import "./Settings.css"
import React from "react"
import {useState} from "react"

const Settings = () => {


    //make sure that the name changes as the user does
    //info gets updated from the personal info at signup
    //the place of employment thingy should be name of institution if its a student


    const {edit, setEdit} = useState(false)

    const editHandler = () => {
        setEdit(!edit)
        //edit isnt wok=rking check why
    }

    return (
        <div className="settings-container">
            <div className="left-settings">
                <img src="https://www.svgrepo.com/show/4529/user.svg" className="user-profile-icon" />
                <p className="user-name-settings">Ajay Jayaprakash</p>
                <p className="left-settings-options"><img src="https://www.svgrepo.com/show/101865/personal-configuration.svg" className="icons-settings" />Personal</p>
                <p className="left-settings-options" ><img src="https://www.svgrepo.com/show/24928/activity.svg" className="icons-settings" />Activity</p>
                <p className="left-settings-options" ><img src="https://www.svgrepo.com/show/260679/security-key.svg" className="icons-settings" />Security</p>
                <p className="left-settings-options" ><img src="https://www.svgrepo.com/show/230758/customer-service-help.svg" className="icons-settings" />Help</p>
            </div>
            <div className="right-settings">
                <p className="settings-heading">Settings <img src="https://www.svgrepo.com/show/97419/settings.svg" className="icons-settings" /></p>
                <div>
                    <span className="bio-dob-settings">Bio : </span><select id="Bio" name="Bio" className="bio-select">
                        <option disabled>Choose a Bio</option>
                        <option value="Work">Work</option>
                        <option value="Busy">Busy</option>
                        <option value="Vacation">Vacation</option>
                        <option value="At the gym">At the gym</option>
                    </select>
                </div>

                <div>
                    <p className="bio-dob-settings">Date of Birth: <span id="date-of-birth">07/12/1999 <img className="edit-icon" onClick={editHandler} src={!edit ? "https://www.svgrepo.com/show/6755/edit.svg" : "https://www.svgrepo.com/show/81335/cancel.svg" }/></span></p>
                    
                </div>

                {edit && <input className="input-settings" type="date" />}
                
                <p className="bio-dob-settings"><img src="https://www.svgrepo.com/show/138889/pin.svg" className="right-settings-icons" />Location : Bangalore, Karnataka</p>
                <p className="bio-dob-settings"><img src="https://www.svgrepo.com/show/415566/bag-briefcase-business.svg" className="right-settings-icons" />Occupation: Working</p>
                <p className="bio-dob-settings"><img src="https://www.svgrepo.com/show/202715/workers-work.svg" className="right-settings-icons" />Place of employment: Infosys</p>
                <p className="bio-dob-settings">Description: <input type="text" rows="5"/> </p>
                <button className="btns-settings">Apply Changes</button>

                <button className="btns-settings">Close</button>
            </div>
        </div>
    )
}

export default Settings