import styled from "@emotion/styled";

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 75px;
  width: 95%;
  background-color: #ffffff;
  border-radius: 8px 0px 0px 8px;
  justify-content: start;
  align-items: center;
  gap: 15px;
  @media (min-width: 768px) {
    height: 100px;
  }

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
