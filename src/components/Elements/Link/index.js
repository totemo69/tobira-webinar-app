/**
 *
 * Link
 *
 */

 import Link from 'next/link'
 import styled, { css } from 'styled-components';

 const BlueLink = styled.a`
    color: #0e71eb;
    font-weight: 600;
    letter-spacing: 0.24px;
    text-decoration: none;
    &:hover {
        color: #0e71eb;
    }
 `

 const NavLink = ({ href, name }) => {
     return (
         <Link href={href} passHref>
            <BlueLink>{name}</BlueLink>
         </Link>
     );
 }
  
 export default NavLink;