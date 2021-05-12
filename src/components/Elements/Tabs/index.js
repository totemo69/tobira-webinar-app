/***
 * 
 * 
 * Tabs
 * 
 * 
 */


 import style, { css } from 'styled-components';
 import { Tabs } from 'antd';

 const StyledTabs = style(Tabs).withConfig({
   shouldForwardProp: prop => ![
       'heightFull',
       'widthFull',
   ].includes(prop),
 })`
    .ant-tabs-nav {
        padding: 0;
        margin-top: 0;
        letter-spacing: 0.20px;

        &::before {
            border-style: none;
        }
    }

    .ant-tabs-tab {
        margin-top: 0;
        padding: 0 12px 12px;
        font-size: 14px;
        font-weight: 600;
        color: #0e71eb;
        opacity: 0.5;
        
        &:hover {
            opacity: 1;
        }
    }

    .ant-tabs-tab-active {
        opacity: 1;

        .ant-tabs-tab-btn {
            color: #0e71eb !important;
            font-weight: 600;
        }
    }

    .ant-tabs-ink-bar {
        background-color: #0e71eb !important;
    }

    ${props => 
        props.heightFull && 
        css`
            height: 100%;
        `
    };

    ${props => 
        props.widthFull && 
        css`
            height: 100%;
        `
    };
 `;
 
 
 export default StyledTabs;