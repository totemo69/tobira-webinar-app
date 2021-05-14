import styled, { css } from 'styled-components'


const StyledSpan = styled.span`
    color: #4e4e4e;
    font-size: 12px;
    letter-spacing: 0.20px;
    line-height: 0.18px;

    ${ props => 
        props.breadCrumbs &&
        css `
            color: #4678b5;
            font-size: 14px;
            font-weight: 500;
            text-transform: capitalize;
        `
    };
`;



export default StyledSpan;