import React from 'react';
import {connect} from 'react-redux';

import './dropdown.scss';

import DropdownItem from "../dropdownItem/DropdownItem";
import Button from '../../button/Button';
import {selectCartItems} from "../../../redux/cart/selectors";

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

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
};

export default connect(
    mapStateToProps,
    null
)(CartDropdown);