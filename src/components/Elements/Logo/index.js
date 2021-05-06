import styled, {css} from 'styled-components';




const StyledImage = styled.img.withConfig({
  shouldForwardProp: prop => ![
    'path1',
    'TermsOfService'
  ].includes(prop)
})`
    width: 500px;
    height: 61px;
    margin-top: 3vh;
    margin-bottom: 1vh;

    ${props => 
    props.path1 &&
      css `
        width: 675px;
        height: 500px;
        margin-top: 3vh;
        margin-bottom: 1vh;
  
      `
};

    ${props => 
    props.TermsOfService && 
      css`
        display: block;
        margin-left: auto;
        margin-right: auto;
      `
};
`;


export default StyledImage;