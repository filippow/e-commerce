import React from 'react';

import './auth.scss';

import SignIn from '../../components/auth/signIn/sign-in';
import SignUp from '../../components/auth/signUp/sign-up';

const Auth = () => {
    return (
        <div className='auth'>
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default Auth;