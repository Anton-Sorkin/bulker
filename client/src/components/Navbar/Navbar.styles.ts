import styled from "@emotion/styled";

export const NabvarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  width: 95%;
  margin-top: 10px;
  border-radius: 8px 0px 0px 8px;
  background: #ffffff;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 100px;
  }
  & > a {
    text-decoration: none;
    color: #000000;
    & > h1 {
      font-size: 24px;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 25px;
      @media (min-width: 768px) {
        font-size: 30px;
      }
    }
  }
  & > div {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 25px;
    & > a {
      text-decoration: none;
      color: #000000;
      cursor: pointer;
    }
  }
`;
