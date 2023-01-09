import styled from "@emotion/styled";

export const GroceryListContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const CompContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  height: 100%;
  width: 100vw;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 75px;
  width: 95%;
  background-color: #ffffff;
  margin-left: 25px;
  border-radius: 8px 0px 0px 8px;
  justify-content: start;
  align-items: center;
  /* padding-left: 15px; */
  gap: 15px;

  & > button {
    display: flex;
    border: none;
    height: 40px;
    width: 70px;
    justify-content: start;
    align-items: center;
    border-radius: 8px 8px 8px 8px;
    background-color: #eee;
    margin-left: 20px;
    &:hover {
      background: linear-gradient(90deg, #ff8585 0%, #ff9b85 100%);
      color: #fff;
    }
  }
  & > a {
    text-decoration: none;
    background-color: #ffffff;
    color: #232323;
    height: 40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 8px 8px;
    & > button {
      border: none;
      background-color: #eee;
      height: 100%;
      width: 100%;
      border-radius: 8px 8px 8px 8px;
      &:hover {
        background: linear-gradient(90deg, #ff8585 0%, #ff9b85 100%);
        color: #fff;
      }
    }
  }
`;

export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 175px;
  width: 95%;
  background-color: #fff;
  justify-content: start;

  position: relative;
  border-radius: 8px 0px 0px 8px;
  & > div {
    & > h3 {
      margin-left: 20px;
      margin-top: 15px;
      font-size: 20px;
    }

    & > ul {
      margin-left: 10px;
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
    &:hover {
      background: gray;
      color: #fff;
    }
  }
`;
