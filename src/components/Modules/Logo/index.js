import styled from 'styled-components';
import LogoImage from 'Images/logo.svg';


const StyledImage = styled.img`
    width: 33.6%;
    max-width: 150px;
    margin-top: 3vh;
    margin-bottom: 1vh;
`;

function Logo(){
  return <StyledImage src={LogoImage} alt="Tobira Logo" />;
}

Logo.propTypes = {};

export default Logo;