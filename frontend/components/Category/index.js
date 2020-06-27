// external modules
import styled from 'styled-components';

const Category = () => {
  return (
    <CategoryWrap>
      <CategoryContainer>Category</CategoryContainer>
    </CategoryWrap>
  );
};

export default Category;

const CategoryWrap = styled.aside`
  width: 250px;
  height: 500px;
  border: 1px solid red;
`;

const CategoryContainer = styled.div``;
