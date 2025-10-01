import React from 'react';
import spotifyAuth from '../Services/spotifyAuth';
import './Login.css';

const Login = () => {
    const hangleLogin = () => {
        spotifyAuth.login();
    }



}