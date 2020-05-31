import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/selectors';
import CollectionPreview from '../collectionPreview/CollectionPreview';


import './collectionsOverview.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps})=> {
                const titleRoute = 'shop/' + decodeURI(otherCollectionProps.title.toLowerCase());

                 return <CollectionPreview
                     key={id}
                     titleRoute={titleRoute}
                     {...otherCollectionProps}
                 />
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);