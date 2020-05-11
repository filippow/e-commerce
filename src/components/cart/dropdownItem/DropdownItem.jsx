import React from 'react';

import './dropdownItem.scss';

const DropdownItem = ({item}) => {
    const {imageUrl, price, name, quantity} = item;

    return (
        <div className='dropdown-item'>
            <img src={imageUrl}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>${price} x {quantity}</span>
            </div>
        </div>
    );
};

export default DropdownItem;