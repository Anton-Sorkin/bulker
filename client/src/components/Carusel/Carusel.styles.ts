import styled from "@emotion/styled";

export const CaruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 325px;
  width: 95%;
  margin-top: 10px;
  border-radius: 8px 0px 0px 8px;
  background: #ffffff;
  @media (min-width: 768px) {
    height: 360px;
  }

  & > h1 {
    font-size: 26px;
    margin-left: 25px;
    padding-top: 20px;
    font-weight: 700;
    color: #232323;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }

  & > div {
    padding-top: 20px;
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 768px) {
      gap: 25px;
    }

    & > a {
      text-decoration: none;
    }
  }
`;
