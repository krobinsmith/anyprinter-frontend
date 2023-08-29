import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { HeaderSection, HeaderUtils, LogoBtn, TextWrapper } from "./styles";
import Button from "../components/customs/Button";
import Text from "../components/customs/Text";

import logo from "../assets/img/logo.png";
import crossSign from "../assets/img/cross-sign.png";
import rabbit from "../assets/img/rabbit.png";
import wallet from "../assets/img/wallet.png";

const Header = () => {
  let history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  return (
    <HeaderSection>
      <LogoBtn onClick={toHome}>
        <img src={logo} alt="logo" width={60} />
      </LogoBtn>
      <HeaderUtils>
        <Button
          bgColor="#FF636B"
          bRadius={5}
          padding={10}
          fColor="white"
          cursor="pointer"
          jContent="center"
          aItems="center"
          gGap={5}
        >
          <img src={rabbit} alt="rabbit" width={20} height={20} />
          <TextWrapper>
            <Text mode="span" fColor="white" fSize={14}>
              Buy on Pancakeswap
            </Text>
          </TextWrapper>
        </Button>
        <Button
          bgColor="#DEC02C"
          bRadius={5}
          padding={10}
          cursor="pointer"
          jContent="center"
          aItems="center"
          gGap={5}
        >
          <img src={crossSign} alt="crossSign" width={20} height={20} />
          <TextWrapper>
            <Text mode="span" fSize={14}>
              Add Anyp
            </Text>
          </TextWrapper>
        </Button>
        <Button
          bgColor="#447CF5"
          bRadius={5}
          padding={10}
          fColor="white"
          cursor="pointer"
          jContent="center"
          aItems="center"
          gGap={5}
        >
          <img src={wallet} alt="wallet" width={20} height={20} />
          <TextWrapper>
            <Text mode="span" fColor="white" fSize={14}>
              Connect Wallet
            </Text>
          </TextWrapper>
        </Button>
      </HeaderUtils>
    </HeaderSection>
  );
};

export default Header;
