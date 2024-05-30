import React, { useState } from "react";
import axios from "axios"

function loginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/login', {username, password})
        .then(resp=>{
            console.log('Принято')
            if (resp.status==200){
                console.log(resp.data)
            }
        })
        .catch(e=>console.log('АШИБКА'))
        
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