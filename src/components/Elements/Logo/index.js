import styled, { css } from 'styled-components';

const StyledImage = styled.img.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'path1',
      'registerCompleteLogo',
      'successLogo',
      'sideBarLogo',
      'dropdownLogo',
      'frontRegistrationLogo',
    ].includes(prop),
})`
  width: 500px;
  height: 61px;
  margin-top: 3vh;
  margin-bottom: 1vh;

  ${(props) =>
    props.path1 &&
    css`
      width: 675px;
      height: 500px;
      margin-top: 3vh;
      margin-bottom: 1vh;
    `};

  ${(props) =>
    props.registerCompleteLogo &&
    css`
      width: 85px;
      height: 47px;
      display: absolute;
      margin-top: 63.84px;
    `}

  ${(props) =>
    props.successLogo &&
    css`
      width: 400px;
      height: 400px;
      margin-top: -50.14px;
    `};

  ${(props) =>
    props.sideBarLogo &&
    css`
      width: 100%;
      margin-top: 0;
      padding: 5px;
      background: #fffc1c;
    `}

  ${(props) =>
    props.dropdownLogo &&
    css`
      width: 12px;
      height: 12px;
    `};

  ${(props) =>
    props.frontRegistrationLogo &&
    css`
      margin: 0;
      width: 200px;
      height: 35.77px;
    `}
`;

export default StyledImage;
