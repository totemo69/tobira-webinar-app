import style, {css} from 'styled-components';

const StyledDiv = style.div`
    margin: 0.25rem 0 0;
    width: 80%;
    color: #4e4e4e;
    font-size: 12px;
    letter-spacing: 0.24px;

    ${props => 
    props.marginTop && 
        css`
            margin-top: 1rem;
        `
};

    ${props => 
    props.marginY && 
        css`
            margin-top: 1rem;
            margin-bottom: 1rem;
        `
};

    ${props => 
    props.center && 
        css`
            text-align: center;
        `
};

    ${props => 
    props.betweenCenter && 
        css`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `
};
`;
export default StyledDiv;