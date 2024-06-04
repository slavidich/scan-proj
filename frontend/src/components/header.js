import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

function Header(){
    const [username, setUsername] = useState('');
    const navigate = useNavigate()
    const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext);

    function handleLogout(){
        localStorage.removeItem('username');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expire');
        setIsAuthenticated(false)
        navigate('/')
    }
    
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return <>
        <Link to="/">Главная страница</Link>
        {isAuthenticated? 
            <>
            <div>Добро пожаловать, {username}!</div>
            <button onClick={handleLogout}>Выйти </button>
            </>
            :
            <Link to="/login"><button>Войти</button></Link>}
    </>
}

export default Header
