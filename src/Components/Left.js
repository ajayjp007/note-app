import "./Left.css"
import Important from "./Important"
import Birthday from "./Birthdays"
import UserDetails from "./UserDetails"
import Inbox from "./Inbox"
import HealthAndFitness from "./HealthAndFitness"
import Meetings from "./Meetings"
import FamilyEvents from "./FamilyEvents"

const Left = () => {


    return (
        <div className="left-sidebar-container">
            <UserDetails />
            <Inbox />
            <Meetings />
            <FamilyEvents />
            <Important />
            <Birthday />
            <HealthAndFitness />
        </div>
    )
}

export default Left