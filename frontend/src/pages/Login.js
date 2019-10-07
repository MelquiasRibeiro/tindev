import React, {useState} from 'react';
import './Login.css';

import api from '../services/Api';

import logo from  '../assets/logo.svg';


export default function login({history}){
    const [username, setUsername] = useState('');

async function handleSubmit(e){
        e.preventDefault();

        const response= await api.post('/devs',{
            username,
        });
        const{ _id }= response.data;

        history.push(`/dev/${_id}`);

}

    return(

        <div className= "login-countainer">
            <form onSubmit={handleSubmit}>

                <img src={logo}  alt ="Tindev" />

                <input 
                    placeholder= "Digite seu usário no GitHub"
                    value={username}
                    onChange={e =>setUsername(e.target.value)}//preenche a variavel "user name com o valor digitado no campo"
                /> 

                <button type="submit"> Enviar </button>
            </form>
        </div>
    );
} 


