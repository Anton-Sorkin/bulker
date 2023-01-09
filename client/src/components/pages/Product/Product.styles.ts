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
        position: relative;
        bottom: 8px;
        left: 2px;
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
  }
`;

export const CompContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  height: 100%;
  width: 100vw;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 200px;
  width: 95vw;
  background-color: white;
  border-radius: 8px 0px 0px 8px;
  & > h1 {
    padding-left: 15px;
    margin-top: 25px;
    font-size: 18px;
    font-weight: 700;
    color: #232323;
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
  }
`;

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
  & > button {
    background-color: #ff9b85;
    border: none;
    width: 70%;
    height: 50px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
  & > p {
    font-size: 12px;
    font-weight: 300;
    color: #232323;
    position: absolute;
    top: 75px;
  }
`;

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
    margin-top: -350px;
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
    }

    & > h2 {
      font-size: 18px;
      font-weight: 500;
      color: #232323;
    }
    & > li {
      font-size: 12px;
      font-weight: 300;
      color: #232323;
      list-style-type: none;
      text-align: center;
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
    }
  }
`;
