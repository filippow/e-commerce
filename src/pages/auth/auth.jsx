import React from 'react';

import './auth.scss';

import SignIn from '../../components/auth/signIn/SignIn';
import SignUp from '../../components/auth/signUp/SignUp';

const Auth = () => {
    return (
        <div className='auth'>
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default Auth;