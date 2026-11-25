import { NavLink } from "react-router-dom";

function NavBar () {
    return <> 
    <header>
        <h1></h1>
        <nav>
            <NavLink to="" className='button'>Home</NavLink>
            <NavLink to="/gallery:breed?" className='button'>Gallery</NavLink>
            <NavLink to="/favorites" className="button">Favorites</NavLink>
            <NavLink to="/userProfile" className="button">My Profile</NavLink>
            <NavLink to="/users" className='button'>Gallery</NavLink>
        </nav>
    </header>
    </>
}
export default NavBar;