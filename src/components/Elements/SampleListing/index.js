import style from 'styled-components';

const StyledList = style.li`
    list-style: none;
    &:before{
        content: "*";
        position: relative;
        left: -15px;
        bottom: -3px;
        
    }
`;

const StyledUl = style.ul`
`;

const List = ({ message }) => (
  <div>
    <StyledUl>
      <StyledList>{message}</StyledList>
    </StyledUl>
  </div>
);

export default List;
