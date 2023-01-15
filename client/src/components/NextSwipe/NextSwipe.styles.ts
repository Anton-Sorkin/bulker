import styled from "@emotion/styled";

export const NextSwipeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 120px;
  width: 95vw;
  background-color: white;
  border-radius: 8px 0px 0px 8px;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    height: 180px;
  }
  & > button {
    background-color: #ff9b85;
    border: none;
    width: 30%;
    height: 50px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background: linear-gradient(90deg, #ff9b85 100%, #ff8585 0%);
    }
    @media (min-width: 768px) {
      width: 30%;
      font-size: 16px;
    }
  }
  & > p {
    font-size: 12px;
    font-weight: 300;
    color: #232323;
    position: absolute;
    top: 75px;
  }

  & > div {
    display: flex;
    & > button {
      background-color: #fff;
      color: #232323;
      border: none;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #ff9b85;
      }
    }
  }
`;
