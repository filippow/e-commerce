import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from '../cart/icon/Icon';
import CartDropdown from '../cart/dropdown/Dropdown';

import {auth} from '../../firebase/firebaseUtil';

import {selectCartHidden} from '../../redux/cart/selectors';
import {selectCurrentUser} from '../../redux/user/selectors';


import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, SirotkinLink} from './Header.style';

const Header = ({currentUser, cartHidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <SirotkinLink to='/sirotkin'>
                    СИРОТКИН - жми сюда
                </SirotkinLink>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/'>CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                        :
                        <OptionLink to='/auth'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {cartHidden ? null : <CartDropdown/>}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);