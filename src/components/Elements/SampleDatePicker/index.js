/**
 *
 * DatePicker
 *
 */

import style, {css} from 'styled-components';
import { DatePicker } from 'antd';


const StyledDatePicker = style(DatePicker).withConfig({
  shouldForwardProp: prop => ![].includes(prop)
})`

    // css here
`;

export default StyledDatePicker;