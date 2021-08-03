import styled from 'styled-components';

import { Select } from 'antd';

export const StyledSelect = styled(Select)`
  width: 150px;

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;
