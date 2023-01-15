import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: rgba(217, 217, 217, 0.2);
  backdrop-filter: blur(15px);
  justify-content: center;
  align-items: center;
  position: absolute;
  & > div {
    margin-top: -700px;
    display: flex;
    width: 80%;
    height: 30%;
    background-color: white;
    flex-direction: column;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > h1 {
      font-size: 22px;
      font-weight: 700;
      color: #232323;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-x: scroll;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding: 0 15px;
      @media (min-width: 768px) {
        font-size: 28px;
      }
    }

    & > h2 {
      font-size: 18px;
      font-weight: 500;
      color: #232323;
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
    & > li {
      font-size: 12px;
      font-weight: 300;
      color: #232323;
      list-style-type: none;
      text-align: center;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }

    & > button {
      margin-top: 25px;
      background-color: #ff9b85;
      border: none;
      width: 70%;
      height: 40px;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      @media (min-width: 768px) {
        width: 50%;
        height: 50px;
      }
    }
  }
`;
