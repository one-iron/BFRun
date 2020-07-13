// external modules
import styled from 'styled-components';
import Nav from '../components/Nav';

// internal moduels
import Nav from '../components/Nav';

const Roadmap = () => {
  return (
<<<<<<< HEAD
    <RoadmapWrap>
      <Nav />
      <div>Roadmap</div>
    </RoadmapWrap>
=======
    <>
      <Nav />
      <RoadmapWrap>
        <RoadmapContainer>Roadmap</RoadmapContainer>
      </RoadmapWrap>
    </>
>>>>>>> master
  );
};

export default Roadmap;

const RoadmapWrap = styled.div`
  position: relative;
  top: 120px;
  margin-bottom: 100px;
`;

const RoadmapContainer = styled.div`
  margin: 0 auto;
  width: 1200px;

  @media ${(props) => props.theme.laptopM} {
    width: 90%;
  }
`;
