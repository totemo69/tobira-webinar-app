/**
 *
 * Button
 *
 */

 import PropTypes from 'prop-types';
 import styled, { css } from 'styled-components';
 import { Button } from 'antd';
 
 /* istanbul ignore next */
 const StyledButton = styled(Button).withConfig({
   shouldForwardProp: prop =>
     ![
       'square',
       'hazard',
       'round',
       'circle',
       'underline',
       'noPaddingTop',
       'noMarginTop',
       'noMargin',
       'noPadding',
       'facebook',
       'twitter',
       'line',
       'google',
       'fullWidth',
       'mini',
       'addFadeTransition',
       'semiFullWidth',
       'primary',
       'active',
       'autoWidth',
       'secondary',
       'quarterFullWidth',
     ].includes(prop),
 })`
   width: 80%;
   border-radius: 5px;
   border: 0px;
   margin: 0 auto 10px;
   height: 40px;
   font-family: Poppins;
   &:hover {
     background-color: #a8b4ae;
   }
 
   ${props =>
     props.primary &&
     css`
       background-color: #2675fc;
     `};
 
   ${props =>
     props.square &&
     css`
       border: 2px solid #494737;
       border-radius: 5px;
       background-color: #fffc1c;
       color: #494737;
     `};
 
   ${props =>
     props.round &&
     css`
       border: 1px solid #494737;
       border-radius: 50px;
       background-color: #fffc1c;
       height: 35px;
       color: #494737;
     `};
 
   ${props =>
     props.circle &&
     css`
       border: 1px solid black;
       border-radius: 50px;
       background-color: #fffc1c;
       width: 100%;
     `};
 
   ${props =>
     props.hazard &&
     css`
       color: #ff4d4f;
       background: #fff;
       border-color: #ff4d4f;
       border-radius: 5px;
       width: 100%;
       height: 35px;
     `};
 
   ${props =>
     props.size === 'large' ||
     (props.autoWidth &&
       css`
         height: auto;
         width: auto;
       `)};
 
   ${props =>
     props.semiFullWidth &&
     css`
       min-width: 70% !important;
     `};
 
   ${props =>
     props.quarterFullWidth &&
     css`
       min-width: 40% !important;
     `};
 
   ${props =>
     props.fullWidth &&
     css`
       min-width: 100%;
     `};
 
   ${props =>
     props.noMargin &&
     css`
       margin: 0px;
     `};
 
   ${props =>
     props.noPadding &&
     css`
       padding: 0px;
     `};
 
   ${props =>
     props.ghost &&
     css`
       border: 1px solid black;
       ${props.secondary &&
         css`
           border: 1px solid #2675fc !important;
           color: #2675fc;
           &:focus {
             color: #2675fc !important;
           }
         `};
     `};
 
   ${props =>
     props.underline &&
     css`
       span {
         text-decoration: underline;
       }
     `};
   ${props =>
     props.noMarginTop &&
     css`
       margin-top: 0px;
     `};
   ${props =>
     props.noPaddingTop &&
     css`
       padding-top: 0px;
     `};
 
   ${props =>
     props.facebook &&
     css`
       background-color: #4963a0;
     `};
 
   ${props =>
     props.google &&
     css`
       background-color: #dd4337;
     `};
 
   ${props =>
     props.line &&
     css`
       background-color: #00b900;
     `};
 
   ${props =>
     props.twitter &&
     css`
       background-color: #1da1f3;
     `};
 
   ${props =>
     props.type === 'text' &&
     css`
       &:hover {
         background-color: transparent;
       }
     `};
 
   ${props =>
     props.mini &&
     css`
       width: auto;
       height: auto;
       display: inline-block;
       font-size: 0.8em;
       padding: 5px 7px;
       border: 1px solid black;
       letter-spacing: -2px;
       &:focus {
         color: #fffc1c;
         background-color: #494737;
       }
       &:hover {
         color: #494737;
         background-color: #fffc1c;
       }
     `};
 
   ${props =>
     props.mini &&
     props.active &&
     css`
       color: #fffc1c;
       background-color: #494737;
       &:hover {
         color: #fffc1c;
         background-color: #494737;
       }
     `};
 
   ${props =>
     props.mini &&
     props.secondary &&
     props.active &&
     css`
       color: #ffff;
       background-color: #2675fc;
     `};
 
   @keyframes fadein {
     from {
       opacity: 0;
     }
     to {
       opacity: 1;
     }
   }
 
   ${props =>
     props.addFadeTransition &&
     css`
       animation: fadein 1.6s;
     `};
 `;
 
 StyledButton.propTypes = {
   square: PropTypes.any,
   hazard: PropTypes.any,
   round: PropTypes.any,
   circle: PropTypes.bool,
   underline: PropTypes.bool,
   facebook: PropTypes.bool,
   google: PropTypes.bool,
   line: PropTypes.bool,
   twitter: PropTypes.bool,
   noMarginTop: PropTypes.any,
   noPaddingTop: PropTypes.any,
   noMargin: PropTypes.any,
   noPadding: PropTypes.any,
   type: PropTypes.string,
   fullWidth: PropTypes.bool,
   active: PropTypes.bool,
   autoWidth: PropTypes.bool,
   secondary: PropTypes.bool,
 };
 export default StyledButton;
 