import React, {Component} from 'react';

import './sign-in.scss';

import FormField from "../../form-field/form-field";
import Button from "../../button/button";

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

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
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
                    <Button type='submit'>Sign in</Button>
                </form>
            </div>
        );
    }
}

export default SignIn;