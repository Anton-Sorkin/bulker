import styled from "@emotion/styled";

export const CaruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 325px;
  width: 95%;
  margin-top: 10px;
  border-radius: 8px 0px 0px 8px;
  background: #ffffff;

  & > h1 {
    font-size: 26px;
    margin-left: 25px;
    padding-top: 20px;
    font-weight: 700;
    color: #232323;
  }

  & > div {
    padding-top: 20px;
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    & > a {
      text-decoration: none;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 145px;
  border-radius: 8px 8px 8px 8px;

  & > div {
    display: flex;
    height: 165px;
    width: 145px;
    border-radius: 8px 8px 8px 8px;
    background-color: #eeeeee;
  }

  & > h1 {
    font-size: 16px;
    font-weight: 700;
    color: #232323;
  }
`;
