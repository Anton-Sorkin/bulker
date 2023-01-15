import styled from "@emotion/styled";

export const GroceryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  height: 100%;
  width: 100vw;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  height: 300px;
  width: 95%;
  background-color: white;
  border-radius: 8px 0px 0px 8px;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-size: 18px;
  }
`;

export const AllIngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 300px;
  width: 95%;
  background-color: white;
  border-radius: 8px 0px 0px 8px;

  & > h1 {
    font-size: 24px;
    padding: 8px 0px 0px 25px;
  }
  & > p {
    font-size: 14px;
    padding: 0px 0px 0px 25px;
    margin-top: 0px;
  }

  & > ul {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;

    & > li {
      display: flex;
      padding: 8px;
      width: 100px;
      height: 20px;
      justify-content: start;
    }
  }
`;
