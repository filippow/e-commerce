import styled, {css} from 'styled-components';

const getButtonStyle = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyle;
    } else if (props.inverted) {
        return invertedButtonStyles;
    }

    return defaultButtonStyle
};

export const ButtonElement = styled.button`
    min-width: 120px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    
    ${getButtonStyle}
`;

const defaultButtonStyle = css`
    background-color: black;
    color: white;
    border: 1px solid black;
    
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background: white;
    color: black;

    &:hover {
      background-color: black;
      border: 1px solid black;
      color: white;
    }
`;

const googleSignInStyle = css`
    border: 1px solid transparent;
    background: #4285f4;
    color: white;
       
    &:hover {
      background: #357ae8;
      border: 1px solid transparent;
    }
`;