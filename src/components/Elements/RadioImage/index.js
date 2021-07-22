import styled from 'styled-components';
import { Radio } from 'antd';

const RadioImage = styled(Radio)``;
const RadioButton = styled(Radio.Button)`
  height: auto;
  padding: 0 2em;
  background-color: #f3f3f3;
  border-radius: 8px;
  border-color: transparent;
  text-align: center;
  width: 285px;
  &&::after {
    transition: opacity 0.25s ease;
    content: '✔';
    color: white;
    font-size: 2em;
    background-color: var(--backgroundColorAccent);
    border-radius: 50%;
    height: 35px;
    width: 35px;
    position: absolute;
    top: -10px;
    right: -10px;
    opacity: 0;
  }
  img {
    width: 200px;
    height: 100px;
    padding: 1em;
    padding-bottom: 0;
  }
  img + span {
    display: block;
    text-align: center;
    font-size: var(--smallFontSize);
    color: var(--accentColor);
    padding-bottom: 1em;
    transition: color 0.15s ease;
  }
  &&.ant-radio-button-wrapper {
    border-radius: 8px;
    margin-right: 2em;
  }
  &&.ant-radio-button-wrapper:first-child {
    border-left: 1px solid transparent;
  }
  &&.ant-radio-button-wrapper:last-child {
    margin-right: 0px;
  }
  &&.ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }
  &&.ant-radio-button-wrapper:not(:first-child) {
    border-left: 1px solid transparent;
  }
  &&.ant-radio-button-wrapper-checked {
    border-left: 1px solid #1890ff !important;
    border-color: var(--backgroundColorAccent);
    img + span {
      color: var(--backgroundColorAccent);
      font-weight: 500;
    }
    &&::after {
      opacity: 1;
    }
  }

  // Mobile
  @media screen and (max-width: 480px) {
    &&.ant-radio-button-wrapper {
      margin-right: 0;
      margin-bottom: 1em;
    }
  }
`;

RadioImage.Button = RadioButton;
export default RadioImage;
