import styled from "@emotion/styled";

export const NabvarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 95%;
  margin-top: 10px;
  border-radius: 8px 0px 0px 8px;
  background: #ffffff;
  align-items: center;
  justify-content: space-around;
  & > h1 {
    font-size: 24px;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & > div {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > a {
      text-decoration: none;
      color: #000000;
      cursor: pointer;
    }
  }
`;
