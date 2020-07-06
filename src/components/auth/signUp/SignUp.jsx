import React, {Component} from 'react';
import {connect} from "react-redux";

import FormField from "../../form-field/form-field";
import Button from "../../button/Button";

import {auth, createUserProfilerDocument} from "../../../firebase/firebaseUtil";

import {signUpStart} from '../../../redux/user/actions';

import './signUp.scss';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if (password !== confirmPassword) {
            alert('password don`t match');
            return;
        }

        signUpStart({displayName, email, password});
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form
                    className='sign-up-form'
                    onSubmit={this.handleSubmit}
                >
                    <FormField
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormField
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormField
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormField
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm password'
                        required
                    />
                    <Button type='submit'>SIGN UP</Button>
                </form>
            </div>
        )
    }
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