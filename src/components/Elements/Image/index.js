/**
 *
 * Logo
 *
 */

import styled, { css } from 'styled-components';
 
const StyledImg = styled.img`
   width: 33.6%;
   z-index: -10;
   
   ${props => 
    props.logo &&
      css`
        margin-top: 1.50rem;
        width: 24rem;
        height: auto;
      `
};

   ${props => 
    props.logoSmall &&
      css`
        margin: 0 auto;
        width: 13rem;
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
    props.userImg &&
      css`
        margin: auto;
        margin-right: 0.75rem;
        width: 26px;
        height: 26px;
        z-index: 10;
      `
};

   ${props => 
    props.profileImg &&
      css`
        margin: auto;
        margin-bottom: 1rem;
        width: 100px;
        height: 100px;
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

   ${props => 
    props.twoLarger &&
      css`
        margin: 1.50rem 0 0 -18%;
        width: 791px;
        height: 514px;
      `
};
 `;
 
export default StyledImg;