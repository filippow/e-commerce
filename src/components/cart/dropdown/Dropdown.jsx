import React from 'react';
import {connect} from 'react-redux';

import './dropdown.scss';

import DropdownItem from "../dropdownItem/DropdownItem";
import Button from '../../button/Button';

const CartDropdown = ({cartItems}) => {

    const renderItemsList = cartItems => {
        return cartItems.map(cartItem=> {
            return <DropdownItem key={cartItem.id} item={cartItem}/>
        });
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {renderItemsList(cartItems)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(
    mapStateToProps,
    null
)(CartDropdown);