import styled from "@emotion/styled";

export const AddToCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 120px;
  width: 95vw;
  background-color: white;
  border-radius: 8px 0px 0px 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    height: 140px;
  }
  & > button {
    background-color: #ff9b85;
    border: none;
    width: 70%;
    height: 50px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  & > p {
    font-size: 12px;
    font-weight: 300;
    color: #232323;
    position: absolute;
    top: 75px;
    @media (min-width: 768px) {
      top: 90px;
    }
  }
`;
