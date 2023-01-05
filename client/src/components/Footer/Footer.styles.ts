import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 375px;
  background-color: #ffffff;
`;

export const TopFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 30%;
  text-align: end;
  position: relative;
  & > h1 {
    font-size: 18px;
    position: absolute;
    right: 50px;
  }
  & > h2 {
    font-size: 16px;
    position: absolute;
    left: 35px;
  }
`;

export const MidFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 150px;
  text-align: end;
  position: relative;
  & > h2 {
    font-size: 16px;
    position: absolute;
    left: 35px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    height: 35px;
    position: absolute;
    right: 50px;
    bottom: 115px;
    & > h2 {
      font-size: 18px;
    }
  }
`;

export const LowFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  position: relative;
  & > h2 {
    position: absolute;
    left: 35px;
    & > a {
      font-size: 16px;
      color: #000000;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
