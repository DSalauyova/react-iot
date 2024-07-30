import React from 'react';
import Button from '../components/Button/Button';
import style from './Log_in.module.css';

const Login = () => {
    return (
        <div className={style.form_container}>
            <div>
                <input className={style.fixe} placeholder='Email' />
            </div>
            <div>
                <input className={style.fixe} placeholder='Password' />
            </div>
            <Button
                label="Se connecter"
            />
        </div >
    );
}

export default Login;