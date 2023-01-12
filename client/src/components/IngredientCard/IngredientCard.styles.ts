import styled from "@emotion/styled";

export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 175px;
  width: 95%;
  background-color: #fff;
  justify-content: start;
  @media (min-width: 768px) {
    height: 220px;
  }

  position: relative;
  border-radius: 8px 0px 0px 8px;
  & > div {
    & > h3 {
      margin-left: 20px;
      margin-top: 15px;
      font-size: 20px;
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }

    & > ul {
      margin-left: 10px;
      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }

  & > button {
    position: absolute;
    bottom: 0px;
    right: 0px;
    border: none;
    height: 40px;
    width: 70px;
    background: linear-gradient(90deg, #ff8585 0%, #ff9b85 100%);
    border-radius: 8px 0px 0px 0px;
    color: #fff;
    @media (min-width: 768px) {
      height: 50px;
      width: 80px;
    }
    &:hover {
      background: gray;
      color: #fff;
    }
  }
`;
