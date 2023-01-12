import styled from "@emotion/styled";

export const FilterContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 120px;
  border-radius: 8px 0px 0px 8px;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    height: 140px;
  }

  & > h1 {
    font-size: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 25px;
    position: absolute;
    bottom: 12px;
    font-weight: 700;
    color: #232323;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
  & > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    gap: 10px;
    margin-left: 25px;
    @media (min-width: 768px) {
      gap: 20px;
    }

    & > button {
      display: flex;
      height: 35px;
      width: 90px;
      border-radius: 14px;
      border: none;
      justify-content: center;
      align-items: center;
      @media (min-width: 768px) {
        height: 45px;
        width: 110px;
      }

      &.default-button:hover {
        background: linear-gradient(90deg, #ff8585 0%, #ff9b85 100%);
        color: #ffffff;
      }

      &.lit-button {
        background: linear-gradient(90deg, #ff8585 0%, #ff9b85 100%);
        color: #ffffff;
      }
    }
  }
`;
