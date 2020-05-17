import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import './header.scss';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from '../cart/icon/Icon';
import CartDropdown from '../cart/dropdown/Dropdown';

import {auth} from '../../firebase/firebaseUtil';

import {selectCartHidden } from '../../redux/cart/selectors';
import {selectCurrentUser} from "../../redux/user/selectors";

const Header = ({currentUser, cartHidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div
                            className='option'
                            onClick={() => {
                                auth.signOut()
                            }}
                        >
                            SIGN OUT
                        </div>
                        :
                        <Link className='option'
                              to='/auth'
                        >SIGN IN</Link>
                }

                <CartIcon/>
            </div>
            {cartHidden ? null : <CartDropdown/>}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);