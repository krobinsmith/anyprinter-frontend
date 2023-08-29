import styled from "styled-components";
import headerback from "../assets/img/headerbackground.png";

/* Header Section */

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 10px 20px;
  background: url(${headerback});
  background-color: rgb(50 2 122);
  border-radius: 8px;
`;

export const LogoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  cursor: pointer;
`;

export const HeaderUtils = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

/* Footer Section */

export const FooterSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #120645aa;
  padding: 15px 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterSocialLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

export const SocialLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;
