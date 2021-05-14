/***
 * 
 * 
 * Table
 * 
 * 
 */
import style from 'styled-components';
import { Table } from 'antd';

const StyledTable = style(Table).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  thead > tr > th{
    background-color: #0E71EB;
    color: white;
  
  }
  thead> tr > th:hover{
    background-color: #0E71EB;
  }
  thead > tr > th:hover {
    background-color: unset;
    color: black;
  }
  
  
`;


export default StyledTable;