/** *
 *
 * Search
 *
 */

import styled, { css } from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

const StyleSearch = styled(Search).withConfig({
  shouldForwardProp: (prop) =>
    !['marginLeft', 'widthMedium', 'bGray'].includes(prop),
})`
  width: 100%;

  .ant-input-group {
    border-radius: 8px !important;
    border: 1px solid #b0b0b0 !important;

    &:hover {
      border-color: #0e71eb !important;
    }

    &:focus-within {
      border-color: #0e71eb !important;
      box-shadow: 0px 1px 1px #0e71eb !important;
    }
  }

  .ant-input-affix-wrapper {
    height: 40px;
    border: none !important;
    border-radius: 8px !important;
    font-size: 12px !important;

    &:hover {
      border: none !important;
    }
  }

  .ant-input-affix-wrapper-focused {
    border: none !important;
    box-shadow: none !important;
  }

  .ant-input-group-addon,
  .ant-btn {
    height: 40px;
    background-color: transparent;
    border: none !important;
    border-radius: 8px !important;

    &:hover {
      border: none !important;
    }

    &:focus {
      border: none !important;
      box-shadow: none !important;
    }
  }

  .ant-btn > span {
    color: #4e4e4e;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }

  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: 0.5rem;
    `};

  ${(props) =>
    props.bGray &&
    css`
      background: #f3f3f3;
    `};

  ${(props) =>
    props.widthMedium &&
    css`
      width: 70%;
    `};
`;

export default StyleSearch;
