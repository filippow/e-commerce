import React from 'react';
import {connect} from 'react-redux';

import './dropdown.scss';

import DropdownItem from "../dropdownItem/DropdownItem";
import Button from '../../button/Button';
import {selectCartItems} from "../../../redux/cart/selectors";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../../redux/cart/actions";

const CartDropdown = ({cartItems, history, dispatch}) => {

    const renderItemsList = cartItems => {
        return cartItems.map(cartItem=> {
            return <DropdownItem key={cartItem.id} item={cartItem}/>
        });
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? renderItemsList(cartItems) :
                        <span className='empty-cart-message'>There is no goods in cart</span>

                }
            </div>
            <Button onClick={()=> {
                dispatch(toggleCartHidden());
                history.push('/checkout');
            }}>GO TO CHECKOUT</Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
};

export default withRouter(connect(mapStateToProps, null)(CartDropdown));