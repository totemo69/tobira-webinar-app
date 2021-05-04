import styled, {css} from 'styled-components';




const StyledImage = styled.img.withConfig({
  shouldForwardProp: prop => ![
    'path1'
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
`;


export default StyledImage;