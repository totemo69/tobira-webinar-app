/**
 *
 * DatePicker
 *
 */

import style from 'styled-components';
import { DatePicker } from 'antd';


const StyledDatePicker = style(DatePicker).withConfig({
  shouldForwardProp: prop => ![].includes(prop)
})`

    border-radius: 8px;
    width: 100%;
`;

export default StyledDatePicker;