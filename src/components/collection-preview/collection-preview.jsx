import React from 'react';

import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';


const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='collection-title'>{title}</h1>
            <div className='preview'>
                {
                    items
                        .slice(0, 4)
                        .map(({id, ...props}) => (
                            <CollectionItem
                                key={id}
                                {...props}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;