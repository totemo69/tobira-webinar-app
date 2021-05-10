import styled, {css} from 'styled-components';

const StyledLabels = styled.label`
    margin-bottom: 0.25rem;
    width: 80%;
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: #4e4e4e;
    letter-spacing: 0.24px;

    ${ props =>
    props.asterisk &&
        css`
            &::after {
                content: "*";
                font-size: 12px;
                color: #ff0033;
            }
        `
}

    ${ props =>
    props.light &&
        css`
        font-size: 10px;
        font-weight: 400;
        color: #b0b0b0;
        letter-spacing: 0.20px;
        line-height: 0.16px;
        `
}
`;


export default StyledLabels;