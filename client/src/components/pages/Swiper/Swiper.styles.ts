import styled from "@emotion/styled";

export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100vw;
  background-color: #f5f5f5;
`;

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
  & > button {
    background-color: #ff9b85;
    border: none;
    width: 30%;
    height: 50px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
  & > p {
    font-size: 12px;
    font-weight: 300;
    color: #232323;
    position: absolute;
    top: 75px;
  }
`;
