/**
 *
 * TextArea
 *
 */

import styled, { css } from 'styled-components';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

const StyledTextArea = styled(TextArea).withConfig({
  shouldForwardProp: (prop) => !['error'].includes(prop),
})`
  textarea {
    border-radius: 8px;
    border: 1px solid #b0b0b0;
    font-size: 1.2em;
    &:focus {
      border: 1px solid #0e71eb;
    }
  }
  .ant-input:placeholder-shown {
    padding-left: 1.25em;
  }
  .ant-input:placeholder-shown.textarea:focus {
    padding-left: 0.85em;
  }

  @media screen and (max-width: 480px) {
    textarea {
      font-size: 1em;
      padding: 8px;
    }
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #ff0033;
    `};
`;

const WrapTextArea = ({ field, ...props }) => {
  const inputProps = { ...props };
  return <StyledTextArea {...field} {...inputProps} />;
};

WrapTextArea.propTypes = {
  field: PropTypes.any,
};

export default WrapTextArea;
