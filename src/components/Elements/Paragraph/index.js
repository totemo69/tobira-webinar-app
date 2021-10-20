import style, { css } from 'styled-components';

const StyledParagraph = style.p`
  ${(props) =>
    props.emailSent &&
    css`
      margin-top: 19px;
      font: normal normal 600 16px/25px Poppins;
    `}

  ${(props) =>
    props.colorBlue &&
    css`
      color: #0e71eb;
      font-weight: bold;
      font-size: 12px;
      character-spacing: 20;
    `}
    
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 10px;
      margin-bottom: 0;
    `}
`;

const Paragraph = ({ content }) => (
  <>
    <StyledParagraph emailSent>{content}</StyledParagraph>
  </>
);

export { Paragraph, StyledParagraph };
