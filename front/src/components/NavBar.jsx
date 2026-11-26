import { useState } from "react";
import { NavLink } from "react-router-dom";
import { loginUser } from "../utils/api";

function NavBar({ currentUser, setCurrentUser}) {
    const [userName, setUserName] = useState('');
    const login = async () => {
        try {
            if (!userName.trim()) {
                alert('plase enter a userName');
                return;
            }
            const user = await loginUser(userName);
            setCurrentUser(userName);
            setUserName('');
        }
        catch (err) {
            alert(err.message);
        }
    }
    const logout = () => {
        setCurrentUser(null);
    } 

    return <>
        <header className="site-header">
            <nav className="main-nav">
                <NavLink to="/" className="button">Home</NavLink>
                <NavLink to="/gallery" className="button">Gallery</NavLink>
                <NavLink to="/favorites" className="button">Favorites</NavLink>
                <NavLink to="/users" className="button">Users</NavLink>
            {currentUser && (
                <div>
                <NavLink to={`/users/${currentUser._id}`} className="button">
                    My Profile
                </NavLink>
                <button className="button" onClick={logout}>LogOut</button>
                </div>
            )
            }
            </nav>
            <nav className="auth-nav">
            {!currentUser &&  (
                <div>
                    <input 
                        className="login-input"
                        value={userName}
                        placeholder="enter a userName" 
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                        <button  className="button login-button" onClick={login}>
                            Login
                        </button>
                </div>
            )}
            </nav>
        </header>
    </>
}

export default NavBar;

