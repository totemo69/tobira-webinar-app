import styled, { css } from 'styled-components';

const StyledLi = styled.li`
  ${(props) =>
    props.asterisk &&
    css`
      padding-left: 0.25rem;
      &::before {
        content: '*';
        position: relative;
        left: -12px;
      }
    `};
`;

export default StyledLi;
