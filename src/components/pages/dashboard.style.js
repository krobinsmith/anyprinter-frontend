import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 20px !important;
  padding: 2vh 0 0;
`;

export const BeeLeft = styled.div`
  position: absolute;
  top: 32.5vh;
  left: -9.4vw;
  opacity: 0.5;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const BeeRight = styled.div`
  position: absolute;
  bottom: 14.1vh;
  right: -9.4vw;
  opacity: 0.5;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// Description Section

export const SectionDesc = styled.div`
  text-align: center;
  padding: 8vh 0;
`;

export const DescTitle = styled.div`
  padding: 0 0 4.9vh 0;
`;

// Network Card Section

export const SectionNetworkCard = styled.div`
  padding: 0 0 8vh;
  width: 100%;
`;

export const BalanceStick = styled.div`
  width: 10px;
  background-color: #447cf5;
`;

export const NetworkSearch = styled.div`
  padding: 0 0 2.4vh;
`;

export const NetworkCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

  @media only screen and (max-width: 1180px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 778px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: #447cf5;
  img {
    width: 21px;
    height: 21px;
  }
  padding: 0 5px;
`;

export const NetworkRewards = styled.div`
  padding: 15px;
  background-color: #1c1c3f;
  border-radius: 8px;
`;

export const RewardsBox = styled.div`
  background-color: #161637;
  width: 100%;
  padding: 0 15px;
  margin-top: 20px;
  border-radius: 8px;
`;

export const TokenWrapper = styled.div`
  border-radius: 50%;
  padding: 10px 20px;
  background-color: #35355b;
`;
