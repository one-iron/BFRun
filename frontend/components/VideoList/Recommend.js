import styled from 'styled-components';

const Recommend = (props) => {
  return (
    <>
      <TitleH2>{props.title}</TitleH2>
      <VideoContainer>
        <Button>
          <i className="fa fa-caret-left" />
        </Button>
        <Videos>
          <div>Video1</div>
          <div>Video2</div>
          <div>Video3</div>
          <div>Video4</div>
        </Videos>
        <Button>
          {' '}
          <i className="fa fa-caret-right" />
        </Button>
      </VideoContainer>
    </>
  );
};

export default Recommend;

const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 30px;
  padding: 5px;
  margin: 0 50px;
`;

const VideoContainer = styled.article`
  border: 1px solid black;
  border-radius: 10px;
  background-color: black;
  /* margin: 2px 4px; */
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  cursor: pointer;
  font-size: 70px;
  color: white;
`;

const Videos = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  @media (max-width: 771px) {
    justify-content: center;
  }
  @media (max-width: 1004px) {
    justify-content: center;
    padding: 0 110px;
  }
  div {
    width: 200px;
    height: 120px;
    border: 1px solid white;
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
`;
