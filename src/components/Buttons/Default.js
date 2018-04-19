import styled from 'styled-components';
import colors from 'res/colors.json';

const Button = styled.button`
    display: block;
    background-color: ${colors.accent};
    
    border: none;
    border-radius: 4px;
    
    box-shadow: 0 2px 2px 0px rgba(0,0,0,0.24);
    
    color: white;
    text-transform: uppercase;
    font-stretch: expanded;
    
    cursor: pointer;
    
    &:focus {
        outline-width: 0;
    }
    
    &:active {
        background-color: ${colors.accentDark};
    }
`;

export default Button;