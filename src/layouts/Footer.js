import React from "react";
import {
  TextWrapper,
  FooterContainer,
  FooterSection,
  FooterSocialLink,
  SocialLink,
} from "./styles";
import Text from "../components/customs/Text";

import facebook from "../assets/img/facebook.png";
import linkedin from "../assets/img/linkedin.png";
import youtube from "../assets/img/youtube.png";
import twitter from "../assets/img/twitter.png";

const Footer = () => {
  return (
    <FooterSection>
      <div className="col-md-9">
        <FooterContainer>
          <TextWrapper>
            <Text mode="span" fSize={13} fColor="white" fWeight={400}>
              2021 @AnyPrinter
            </Text>
          </TextWrapper>
          <FooterSocialLink>
            <SocialLink>
              <img src={facebook} alt="facebook" />
            </SocialLink>
            <SocialLink>
              <img src={linkedin} alt="linkedin" />
            </SocialLink>
            <SocialLink>
              <img src={youtube} alt="youtube" />
            </SocialLink>
            <SocialLink>
              <img src={twitter} alt="twitter" />
            </SocialLink>
          </FooterSocialLink>
        </FooterContainer>
      </div>
    </FooterSection>
  );
};

export default Footer;
