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
  border: 1px solid rgba(255, 234, 167, 0.4);
  border-radius: 10px;
  background-color: rgba(255, 234, 167, 0.4);
  /* margin: 2px 4px; */
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  cursor: pointer;
  font-size: 70px;
  color: rgba(255, 118, 117, 1);
`;

const Videos = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  @media (max-width: 701px) {
    justify-content: center;
  }
  div {
    width: 200px;
    height: 120px;
    border: 1px solid rgba(255, 118, 117, 1);
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 118, 117, 1);
  }
`;
