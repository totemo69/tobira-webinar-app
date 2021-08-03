import styled, { css } from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

const SampleTitle = styled(Title).withConfig({
  shouldForwardProp: (prop) =>
    ![
      'modalTitle',
      'listWebinarmarginTop',
      'marginRight',
      'marginBottom',
      'center',
      'privacypolicyHeader',
      'secondary',
      'secondary2',
      'profileName',
      'textColorBlue',
    ].includes(prop),
})`
  font-family: Poppins;
  &.ant-typography {
    color: #4e4e4e;
    font-weight: bold;
    letter-spacing: 0.8px;
  }

  ${(props) =>
    props.modalTitle &&
    css`
      &.ant-typography {
        margin-top: 1rem;
        font-size: 16px;
        font-weight: 600;
        color: #4e4e4e;
        letter-spacing: 0.32px;
      }
    `};

  ${(props) =>
    props.textColorBlue &&
    css`
      &.ant-typography {
        color: #0e71eb;
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      &.ant-typography {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 600;
        color: #0e71eb;
        letter-spacing: 0.8px;
        line-height: 0.3px;
      }
    `};

  ${(props) =>
    props.secondary2 &&
    css`
      &.ant-typography {
        font-size: 30px;
        color: #4e4e4e;
        letter-spacing: 0.6px;
      }
    `};

  ${(props) =>
    props.profileName &&
    css`
      &.ant-typography {
        font-size: 14px;
        font-weight: 700;
        color: #4e4e4e;
        letter-spacing: 0.2px;
        line-height: 0.21px;
      }
    `};

  ${(props) =>
    props.marginRight &&
    css`
      &.ant-typography {
        margin-right: 0.25rem;
      }
    `};

  ${(props) =>
    props.listWebinarmarginTop &&
    css`
      &.ant-typography {
        margin-top: 7px;
      }
    `};

  ${(props) =>
    props.marginBottom &&
    css`
      &.ant-typography {
        margin-bottom: 3rem;
      }
    `};

  ${(props) =>
    props.center &&
    css`
      &.ant-typography {
        text-align: center;
      }
    `};

  ${(props) =>
    props.privacypolicyHeader &&
    css`
      &.ant-typography {
        color: #0e71eb;
        font: normal normal 600 20px/30px Poppins;
        letter-spacing: 0.4px;
        color: #0e71eb;
        opacity: 1;
        text-align: center;
        margin-top: 45.84px;
      }
    `};
`;

export default SampleTitle;
