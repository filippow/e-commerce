import React from 'react';

import './CartDropdown.scss';

import Button from '../button/button';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>

            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;