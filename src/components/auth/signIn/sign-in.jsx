import React, {Component} from 'react';

import './sign-in.scss';

import FormField from "../../form-field/form-field";
import Button from "../../button/button";

import {auth, signInWithGoogle} from "../../../firebase/firebaseUtil";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormField
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormField
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <Button type='submit'>Sign in</Button>
                        <Button
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            SIGN IN WITH GOOGLE
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;