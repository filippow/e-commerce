import React, {useState} from 'react';
import {connect} from 'react-redux';

import './signIn.scss';

import FormField from '../../form-field/form-field';
import Button from '../../button/Button';

import {
    googleSignInStart,
    emailSignInStart
} from '../../../redux/user/actions';


const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });
    const {email, password} = userCredentials;

    /**
     * Обрабочик события изменения полей формы
     * Устанавливает значение в стейт компонента
     * @param event
     */
    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }

    /**
     * Обработчик сабмита формы
     * @param event
     */
    const handleSubmit = event => {
        event.preventDefault();
        emailSignInStart(userCredentials);
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormField
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    required
                    handleChange={handleChange}
                />
                <FormField
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    required
                    handleChange={handleChange}
                />
                <div className='buttons'>
                    <Button type='submit'>Sign in</Button>
                    <Button
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        SIGN IN WITH GOOGLE
                    </Button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: credential => dispatch(emailSignInStart(credential))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);