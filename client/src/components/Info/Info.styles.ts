import styled from "@emotion/styled";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 200px;
  width: 95vw;
  background-color: white;
  border-radius: 8px 0px 0px 8px;
  @media (min-width: 768px) {
    height: 260px;
  }
  & > h1 {
    padding-left: 15px;
    margin-top: 25px;
    font-size: 18px;
    font-weight: 700;
    color: #232323;
    @media (min-width: 768px) {
      margin-top: 35px;
      font-size: 24px;
    }
  }

  & > p {
    font-size: 12px;
    font-weight: 300;
    color: #232323;
    padding-left: 25px;
    padding-right: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    overflow-y: scroll;
    height: 50px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  & > button {
    background-color: white;
    border: none;
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    padding-left: 25px;
    color: #ff9b85;
    cursor: pointer;
    @media (min-width: 768px) {
      font-size: 16px;
      width: 150px;
    }
  }
`;
