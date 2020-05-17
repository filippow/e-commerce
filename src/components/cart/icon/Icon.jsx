import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from "../../../redux/cart/actions";
import {selectCartItemsCount} from '../../../redux/cart/selectors';

import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg';

import './icon.scss';

const Icon = ({toggleCartHidden, totalCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{totalCount}</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        totalCount: selectCartItemsCount(state)
    }
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Icon);