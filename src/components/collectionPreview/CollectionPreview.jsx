import React from 'react';
import {Link} from "react-router-dom";

import './collectionPreview.scss';

import CollectionItem from '../collectionItem/CollectionItem';


const CollectionPreview = ({title, items, titleRoute}) => {
    return (
        <div className='collection-preview'>
            {
                titleRoute ?
                    <Link className='title title-link' to={titleRoute}>{title}</Link>
                    :
                    <div className='title'>{title}</div>
            }

            <div className='preview'>
                {
                    items
                        .slice(0, 4)
                        .map(item => (
                            <CollectionItem
                                key={item.id}
                                item={item}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;