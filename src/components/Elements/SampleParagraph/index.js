

import style, {css} from 'styled-components'

const StyledParagraph = style.p`


`;


const Paragraph = ({content}) => {
    return(
        <>
            <StyledParagraph >{content}</StyledParagraph>
        </>
    )
}

export default Paragraph;