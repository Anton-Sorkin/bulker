import styled from "@emotion/styled";

export const HeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeartHeader = styled.div`
  display: flex;
  background-color: #fff;
  width: 95%;
  height: 115px;
  border-radius: 8px 0px 0px 8px;
  flex-direction: column;

  & > h1 {
    font-size: 24px;
    margin: 10px 0px 0px 25px;
    font-weight: 700;
  }

  & > p {
    padding-top: 20px;
    font-size: 16px;
    margin: 0px 0px 10px 25px;
    font-weight: 400;
  }
`;

export const HeartCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: 95%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px 0px 0px 8px;
  & > img {
    width: 100%;
    height: 400px;
    border-radius: 8px 0px 0px 0px;
  }
  & > h2 {
    font-size: 24px;
    margin: 10px 0px;
    padding: 0px 25px;
    font-weight: 700;
  }

  & > p {
    font-size: 13px;
    margin: 0px 0px 10px 0px;
    padding: 0px 25px;
    font-weight: 400;
  }

  & > button {
    width: 85px;
    height: 40px;
    margin: 0px 25px 10px 25px;
    border-radius: 8px;
    background-color: #ff9b85;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 340px;
    right: 0px;
  }
`;

export const HeartEmpty = styled.div`
  display: flex;
  height: 300px;
  width: 95%;
  background-color: #fff;
  border-radius: 8px 0px 0px 8px;
  justify-content: center;
  align-items: center;
`;
