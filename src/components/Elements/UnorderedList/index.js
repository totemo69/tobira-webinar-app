import styled, { css } from 'styled-components';

const StyledUl = styled.ul`
    color: #4e4e4e;
    font-size: 12px;
    letter-spacing: 0.24px;
    list-style-type: none;

    ${ props =>
    props.paddingTop &&
       css`
        padding-top: 1rem;
       `
};
`;

export default StyledUl;