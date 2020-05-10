import React from 'react';

import './form-field.scss';


const FormField = ({handleChange, label, ...otherProps}) => {

    const getLabel = labelText => {
        if (!labelText) {
            return null;
        }

        return (
            <label
                className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {labelText}
            </label>
        )
    }

    return (
        <div className='group'>
            <input
                className='form-input'
                onChange={handleChange}
                {...otherProps}
            />
            {
                getLabel(label)
            }
        </div>
    );
};

export default FormField;