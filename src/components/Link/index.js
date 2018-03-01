import styled from "styled-components";
import colors from 'res/colors.json';

const Link = styled.a`
    font-stretch: condensed;
    color: ${colors.linkBlue};
    cursor: pointer;
    
    &:hover {
        text-decoration-line: underline;
    }
`;

export default Link;