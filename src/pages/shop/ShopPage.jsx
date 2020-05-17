import React from 'react';
import {connect} from "react-redux";

import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/selectors";

import './shopPage.scss';


const ShopPage = ({collections}) => {
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...props}) => (
                    <CollectionPreview
                        key={id}
                        {...props}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);