import "./Header.css"

const Header = () => {

//make sure tht the log out button logs the user out
    return (
        <div className="header-container"  >
            <div className="logo-container">
                <h1 className="app-name-left">NOTEAPP</h1>
            <img alt="logo" id="logo-header" src="https://www.svgrepo.com/show/95757/note.svg" />
            </div>
            <input className="search-bar" type="text" placeholder="Search" />
            <img src="https://www.svgrepo.com/show/347126/logout-box-r.svg" alt="logout" id="logout-icon" />
        </div>
    )
}

export default Header