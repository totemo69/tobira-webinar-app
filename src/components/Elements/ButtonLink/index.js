/**
 *
 * Button Link
 *
 */

 import Link from 'next/link';
 
 const ButtonLink = ({ href, element }) => {
   return (
     <Link href={href} passHref>
       {element}
     </Link>
   );
 };
   
 export default ButtonLink;