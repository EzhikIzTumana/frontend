import React, { useState } from 'react';
import  title from './LoginTitleText.module.css';
import '../jeneralStyles/FieldStyle.css';
import '../jeneralStyles/ButtonStyle.css';
import '../jeneralStyles/textsStyles/Label.css';
import '../jeneralStyles/textsStyles/AlignText.css';
import { NavLink } from 'react-router-dom';
import FormInput from '../FormInput.jsx';

const LoginPage = () => {
    const [values, setValues] = useState({
        nickname: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const inputs = [
        {
            id:'nickname',
            type: 'text',
            name: 'nickname',
            placeholder:'Введите имя пользователя',
            errorMessage: 'Данное поле должно быть заполнено',
            pattern:'[a-zA-Z]+',
            minLength:'4',
            required: true
        },
        {
            id:'password',
            type: 'password',
            name: 'password',
            errorMessage: 'Данное поле должно быть заполнено',
            placeholder:'Введите пароль',
            minLength:'6',
            required: true
        }
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value});
    }

    return (
        <div> 
            <form>
                <h1 className={title.loginTitle}>
                    Вход
                </h1>

                {inputs.map((input) => (
                    <FormInput 
                        className="field" 
                        key = {input.id} 
                        {...input} 
                        value = {values[input.name]}
                        onChange = {onChange}
                    />
                ))}

                <button className="margins" type='submit' variant="contained">
                <p className="button"> Войти </p>
                </button>

                <label className="label"> Еще нет аккаунта?⠀
                    <NavLink to = "/register" className="alignText"> Зарегестрироваться</NavLink>   
                </label>
            </form>
        </div>
    )
}

export default LoginPage