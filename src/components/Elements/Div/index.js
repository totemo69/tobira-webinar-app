

import style, {css} from 'styled-components'

const StyledDiv = style.div.withConfig({
    shouldForwardProp: prop => ![
        'SignUp',
        'LoginHere'
    ].includes(prop),
})`
    ${props => 
        props.SignUp && 
        css`
            margin-top: 26px;
            margin-bottom: 31px;
            margin-left: 15px;
            font: normal normal normal 12px/18px Poppins;
            letter-spacing: 0.24px;
            color: #4E4E4E;
            opacity: 1;

        `
    };

    ${props => 
        props.LoginHere && 
        css`
            margin-top: 37px;
            margin-bottom: 31px;
            margin-left: 100px;
            font: normal normal normal 12px/18px Poppins;
            letter-spacing: 0.24px;
            color: #4E4E4E;
            opacity: 1;

        `
    };
`
export default StyledDiv;