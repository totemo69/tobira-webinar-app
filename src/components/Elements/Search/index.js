/***
 * 
 * Search
 * 
 */

import style , {css} from 'styled-components';
import { Input } from 'antd';


const { Search } = Input;

const StyleSearch = style(Search).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})
`
  width: 100%;
 .ant-input{
   background: #F3F3F3;
   border-radius: 8px;
   
   
 }

`;


export default StyleSearch;