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
  shouldForwardProp: prop => ![
    'error'
  ].includes(prop),
})`
    margin: 0 auto;
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #b0b0b0;
    font-size: 10px;
    
    &:hover {
        border-color: #0e71eb;
    }
    
    &:focus {
        border: 1px solid #0e71eb;
        box-shadow: 0px 1px 1px #0E71EB;
    }

    ${props =>
    props.error &&
        css`
            border: 1px solid #ff0033;
    `};
`;
 
const WrapTextArea = ({
  field,
  ...props
}) => {
  const inputProps = { ...props };
  return (
    <StyledTextArea
      {...field}
      {...inputProps}
    />
  );
};

WrapTextArea.propTypes = {
  field: PropTypes.any,
};

export default WrapTextArea;