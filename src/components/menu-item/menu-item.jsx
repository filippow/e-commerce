import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history}) => {
    return (
            <div
                className={`${size} menu-item`}
                onClick={()=>{history.push(`${linkUrl}`)}}
            >
                <div className='background-image' style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
                </div>
                <div className='content'>
                    <div className='title'>{title}</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
    )
}

export default withRouter(MenuItem);