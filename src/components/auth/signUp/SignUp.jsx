import React, {useState} from 'react';
import {connect} from "react-redux";

import FormField from "../../form-field/form-field";
import Button from "../../button/Button";

import {signUpStart} from '../../../redux/user/actions';

import './signUp.scss';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userCredentials;

    /**
     * Обработчик изменения полей формы
     * @param event
     */
    const handleChange = event => {
        const {name, value} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    };

    /**
     * Обработчик сабмита формы
     * @param event
     */
    const handleSubmit = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password don`t match');
            return;
        }

        signUpStart({displayName, email, password});
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form
                className='sign-up-form'
                onSubmit={handleSubmit}
            >
                <FormField
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormField
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormField
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormField
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm password'
                    required
                />
                <Button type='submit'>SIGN UP</Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SignUp);