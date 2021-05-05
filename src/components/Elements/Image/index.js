/**
 *
 * Logo
 *
 */

import styled, { css } from 'styled-components';
 
const StyledImg = styled.img`
   width: 33.6%;
   
   ${props => 
    props.logo &&
      css`
        margin-top: 1.50rem;
        width: 24rem;
        height: auto;
      `
};

   ${props => 
    props.modalIcon &&
      css`
        margin: 1.50rem 0 auto;
        width: 85px;
        height: 85px;
      `
};

   ${props => 
    props.large &&
      css`
        margin: 1.50rem 0 auto;
        width: 675px;
        height: 500px;
      `
};
   
   ${props => 
    props.larger &&
      css`
        margin: 1.50rem 0 auto;
        width: 675px;
        height: 621px;
      `
};
 `;
 
export default StyledImg;