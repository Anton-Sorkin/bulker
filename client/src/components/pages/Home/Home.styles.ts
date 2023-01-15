import styled from "@emotion/styled";

export const CompContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  height: 100%;
  width: 100vw;
`;

export const HeroSectionImage = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 375px;
  // use the imgage assets to set the background image
  background-image: url("https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const HeroSectionTitle = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 150px;
  border-radius: 8px 0px 0px 8px;
  background: #ffffff;
  @media (min-width: 768px) {
    height: 180px;
  }
  & > h1 {
    margin-top: 20px;
    padding-right: 25px;
    padding-left: 25px;
    font-size: 24px;
    font-weight: 700;
    color: #232323;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
  & > p {
    margin-top: 0px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 15px;
    font-weight: 300;
    color: #232323;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const SwiperLinkContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 175px;
  border-radius: 8px 0px 0px 8px;
  background: #ffffff;
  @media (min-width: 768px) {
    height: 200px;
  }
  & > h1 {
    margin-top: 20px;
    padding-right: 25px;
    padding-left: 25px;
    font-size: 24px;
    font-weight: 700;
    color: #232323;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
  & > p {
    margin-top: 0px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 15px;
    font-weight: 300;
    color: #232323;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  & > a {
    & > button {
      width: 167px;
      height: 40px;
      background: linear-gradient(90deg, #ff8585 0%, #ff9b85 100%);
      box-shadow: 0px 0px 2px rgba(147, 147, 147, 0.25),
        inset 0px 0px 7px rgba(147, 147, 147, 0.1);
      border-radius: 12px;
      border: none;
      margin-left: 25px;
      color: #ffffff;
      margin-top: 5px;
      @media (max-width: 280px) {
        width: 100px;
        height: 30px;
      }
      @media (min-width: 768px) {
        font-size: 16px;
        width: 180px;
        height: 50px;
      }
    }
  }
`;
