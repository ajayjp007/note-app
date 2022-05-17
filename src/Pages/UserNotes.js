import "./UserNotes.css"
import Left from "../Components/Left"
import Header from "../Components/Header"
import Right from "../Components/Right"



const UserNotes = () => {
    //if we click on the heading to do we should be taken to a user page
    // const [logout, setLogout] = useState(false)
    // const [searchBar, setSearchBar] = useState (false)
    // const [count, setCount] = useState(0);

    // const logOutHandler = () => {
    //     setLogout(true)
    // }

    // // useEffect(() => {
    // //     // Update the document title using the browser API
    // //     document.title = `You clicked ${count} times`;
    // //   })

    // const searchBarHandler = () => {
    //     setSearchBar(true)
    //     //render aa search bar
    // }


    return (
        <div>
            <Header />
            <div className="notes-container">
                <Left />
                <div>
                    <Right />
                </div>
            </div>

        </div>
    )
}

export default UserNotes