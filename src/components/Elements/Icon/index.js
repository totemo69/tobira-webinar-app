import styled from 'styled-components';

const Image = styled.img`
  padding-right: 5px;
`;

const CustomIcon = ({ src, width = 'auto', height = 'auto', alt = 'Icon' }) => (
  <Image src={src} alt={alt} width={width} height={height} />
);

export default CustomIcon;
