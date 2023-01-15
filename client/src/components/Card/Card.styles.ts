import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 190px;
  width: 145px;
  margin-top: 10px;
  border-radius: 8px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 220px;
    width: 165px;
  }

  & > img {
    display: flex;
    height: 165px;
    width: 145px;
    border-radius: 8px 8px 8px 8px;
    background-color: #eeeeee;
    @media (min-width: 768px) {
      height: 220px;
      width: 165px;
    }
  }

  & > h1 {
    font-size: 12px;
    font-weight: 700;
    color: #232323;
    text-decoration: none;
    height: 30px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
