

import style, {css} from 'styled-components'

const StyledParagraph = style.p`

    ${props => 
        props.emailSent &&
        css`
            margin-top: 19px;
            font: normal normal 600 16px/25px Poppins;
        `
    }
`;


const Paragraph = ({content}) => {
    return(
        <>
            <StyledParagraph emailSent>{content}</StyledParagraph>
        </>
    )
}

export default Paragraph;