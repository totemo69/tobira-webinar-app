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
    ${props => 
        props.TermsOfService && 
            css`
                background: #FFFFFF 0% 0% no-repeat padding-box;
                opacity: 1;
                width: 879px;
                height: 377px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 140px;
                
            `
        };

        ${props => 
            props.contentTOS &&
                css`
                  width: 960px;
                  height: 675px;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 42.16px;
                  backgroun-color: #FFFFFF;
                `
            };
`;
export default StyledDiv;