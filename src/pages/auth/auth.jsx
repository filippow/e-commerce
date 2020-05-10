import React from 'react';

import './auth.scss';

import SignIn from "../../components/auth/signIn/sign-in";

const Auth = () => {
    return (
        <div className='auth'>
            <SignIn/>
        </div>
    );
};

export default Auth;