import React, {Component} from 'react';
import {connect} from 'react-redux';

import './signIn.scss';

import FormField from '../../form-field/form-field';
import Button from '../../button/Button';

import {
    googleSignInStart,
    emailSignInStart
} from '../../../redux/user/actions';

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
        const {emailSignInStart} = this.props;

        emailSignInStart({email, password});
    }

    render() {
        const {googleSignInStart} = this.props

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
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: credential => dispatch(emailSignInStart(credential))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);