// external modules
import styled from 'styled-components';

// internal modules
import Left from './Left';

const InfoLine = () => {
  const showModal = () => {};

  return (
    <InfoWrap>
      <InfoContainer onClick={showModal}>카테고리</InfoContainer>
      <Left styled={{ position: 'hide' }} />
      <SelectedTags />
    </InfoWrap>
  );
};

export default InfoLine;

const InfoWrap = styled.section`
  position: relative;
  width: 900px;
  margin: 0 auto;
`;

const InfoContainer = styled.div``;

const SelectedTags = styled.div``;
