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
