import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 20px !important;
`;

export const BeeShape = styled.div`
  position: absolute;
  bottom: -20px;
  left: -9.4vw;
  opacity: 0.5;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const HomeAuth = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh 0 0;
`;

export const SectionMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12vh 0 6.4vh;
  grid-gap: 3vw;
  @media only screen and (width: 320px) {
    display: flex;
    flex-direction: column;
    img {
      width: 250px;
    }
  }
  @media only screen and (width: 768px) {
    img {
      width: 290px;
    }
  }
  @media only screen and (width: 1024px) {
    img {
      width: 400px;
    }
  }
  @media only screen and (width: 1440px) {
    img {
      width: 540px;
    }
  }
`;

export const ItemDescPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 30px;
  @media only screen and (width: 320px) {
    align-items: center;
  }
`;

export const MainTitle = styled.div`
  display: flex;
  grid-gap: 20px;
`;

export const MainTitleStick = styled.div`
  width: 10px;
  background-color: #447cf5;
`;

export const SectionFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 2vw;
  margin-bottom: 9vh;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    grid-gap: none;
  }
`;

export const BalanceBox = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #447cf5;
  border-radius: 8px;
  padding: 15px;
  grid-gap: 15px;
  width: 22vw;
  @media only screen and (width: 320px) {
    width: 75vw;
    grid-gap: none;
  }
  @media only screen and (width: 768px) {
    width: 50vw;
    grid-gap: none;
  }
  @media only screen and (width: 1024px) {
    width: 30vw;
    grid-gap: none;
  }
`;

export const BalanceSymbol = styled.div`
  display: flex;
  align-items: center;
  background-color: #212428;
  border-radius: 6px;
  padding: 15px;
  @media only screen and (width: 768px) {
    img {
      width: 50px;
    }
  }
  @media only screen and (width: 320px) {
    img {
      width: 50px;
    }
  }
`;

export const BalanceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const BalanceName = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px 15px 5px;
  @media only screen and (width: 768px) {
    padding: 10px 10px 5px;
  }
`;

export const BalanceAmount = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  background-color: #1e51bf;
  border-radius: 6px;
  width: 90%;
`;
