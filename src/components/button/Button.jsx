import React from 'react';

import {ButtonElement} from './Button.style';

const Button = ({children, ...props}) => {
    return (
        <ButtonElement {...props}>{children}</ButtonElement>
    );
};

export default Button;