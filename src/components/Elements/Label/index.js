
import style, {css} from 'styled-components'

const StyledLabel = style.label.withConfig({
    shouldForwardProp: prop => ![
        'asterisk',
        'policy',
    ].includes(prop)
})`

    font: normal normal medium 12px/18px Poppins;
    color: #4E4E4E;
    font-weight: 600;
    letter-spacing: 0.24px;
    display: flex;
    
    ${props => 
        props.asterisk  &&
        css`
            &:after {
                content: "*";
                color: red;
            }
        `
    };

    ${props => 
        props.policy && 
        css ` 
        text-align: left;
        font: normal normal normal 12px/18px Poppins;
        letter-spacing: 0.24px;
        color: #4E4E4E;
        margin-top: 31px;
        margin-bottom: 43px;
        opacity: 1;
        `
    };
`;



export default StyledLabel;