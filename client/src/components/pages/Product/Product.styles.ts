import styled from "@emotion/styled";

export const ProductContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  & > a {
    text-decoration: none;
    position: absolute;
    top: 35px;
    left: 35px;
    background-color: white;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25%;
    cursor: pointer;
  }
  & > div {
    & > a {
      text-decoration: none;
      position: absolute;
      top: 35px;
      right: 35px;
      background-color: white;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25%;
      cursor: pointer;
      & > div {
        display: flex;
        background-color: #ff9b85;
        height: 16px;
        width: 16px;
        position: absolute;
        bottom: 30px;
        left: 30px;
        color: #ff9b85;
        border-radius: 50%;

        & > p {
          font-size: 10px;
          position: relative;
          bottom: 8px;
          left: 5px;
          color: white;
        }
      }
    }
  }

  & > img {
    width: 100vw;
    @media (min-width: 768px) {
      height: 600px;
      object-fit: cover;
    }
  }
`;

export const CompContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  height: 100%;
  width: 100vw;
`;
