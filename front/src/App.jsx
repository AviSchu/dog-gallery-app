import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import NavBar from './components/NavBar';
import DogCard from './components/DogCard'

import './App.css'

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    return <>
        <BrowserRouter>
            <NavBar currentUser={currentUser}
                    setCurrentUser={setCurrentUser}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/gallery/:breed" element={<Gallery/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/:user_id" element={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default App;
