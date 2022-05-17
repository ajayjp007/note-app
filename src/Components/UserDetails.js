import "./UserDetails.css"
import {useState} from "react"

const UserDetails = () => {

    const [online, setOnline] = useState(false)
    const changeOnlineHandler = () => {
        setOnline(!online)
    }

    return (
        <div className="user-details-container">
            <img src="https://www.svgrepo.com/show/4529/user.svg" id="user-image" />
            <p>Ajay Jayaprakash </p> <p className="status" onClick={changeOnlineHandler}> {online? "Online" : "Offline"}<img id="online-logo" src={online? "https://img.icons8.com/emoji/344/green-circle-emoji.png" : "http://svgur.com/i/AaW.svg"} /></p>
        </div>
    )
}

export default UserDetails