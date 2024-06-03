import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

function loginForm(){
    const navigate = useNavigate()
    const { setIsAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/login', {username, password})
        .then(resp=>{
            if (resp.status==200){
              const { username, accessToken, expire} = resp.data
              localStorage.setItem('username', username);
              localStorage.setItem('accessToken', accessToken);
              localStorage.setItem('expire', expire);
              setIsAuthenticated(true)
              navigate('/')
            }
        })
        .catch(e=>{
          if (e.code=="ERR_NETWORK"){
            console.log('Нет соединения с сервером')
          }
          else if (e.response.status==401){
            console.log('Неправильный логин или пароль!')
          }
        })
    }
    return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Войти</button>
    </form>)
}

export default loginForm