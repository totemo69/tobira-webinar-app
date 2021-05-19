/***
 * 
 * 
 * Table
 * 
 * 
 */
import styled from 'styled-components';
import { Table } from 'antd';

const StyledTable = styled(Table).withConfig({
  shouldForwardProp: prop => ![].includes(prop),
})`
  .ant-table table thead > tr > th{
    background-color: #0E71EB !important;
    color: #ffffff;
  }
`;


export default StyledTable;