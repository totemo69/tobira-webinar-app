

import style, {css} from 'styled-components';

const StyledParagraph = style.p`

    ${props => 
    props.emailSent &&
        css`
            margin-top: 19px;
            font: normal normal 600 16px/25px Poppins;
        `
}

    ${props => 
    props.colorBlue &&
        css`
            color: #0E71EB;
            font-weight: SemiBold;
            font-size: 12px;
            character-spacing: 20;
        `
}
`;


const Paragraph = ({content}) => {
  return(
    <>
      <StyledParagraph emailSent>{content}</StyledParagraph>
    </>
  );
};

export {
  Paragraph,
  StyledParagraph
};