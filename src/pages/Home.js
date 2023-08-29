import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  BalanceInfo,
  BalanceName,
  BalanceAmount,
  BalanceBox,
  BalanceSymbol,
  Container,
  HomeAuth,
  ItemDescPart,
  MainTitle,
  MainTitleStick,
  SectionFooter,
  SectionMain,
  BeeShape,
} from "../components/pages/home.style";
import Header from "../layouts/Header";
import Text from "../components/customs/Text";
import Button from "../components/customs/Button";

import handshake from "../assets/img/handshake.png";
import tokensymbol from "../assets/img/tokensymbol.png";
import beeshape from "../assets/img/bee-shape.png";

const Home = () => {
  let history = useHistory();

  const toDashboard = () => {
    console.log("Here");
    history.push("/dashboard");
  };

  return (
    <Container>
      <div className="col-md-9">
        <HomeAuth>
          <BeeShape>
            <img src={beeshape} alt="beeshape" />
          </BeeShape>
          <Header />
          <SectionMain>
            <ItemDescPart>
              <MainTitle>
                <MainTitleStick />
                <Text
                  mode="span"
                  fSize={60}
                  lHeight={60}
                  fWeight={700}
                  fColor="white"
                  tSpacing={0.05}
                  responsive={{
                    768: {
                      fSize: 35,
                      lHeight: 40,
                      tSpacing: 0.03,
                    },
                    1024: { fSize: 50, lHeight: 50, tSpacing: 0.03 },
                    320: {
                      fSize: 30,
                      lHeight: 40,
                      tSpacing: 0.02,
                      tAlign: "center",
                    },
                  }}
                >
                  Create, sell or collect{" "}
                  <Text mode="span" fColor="#447cf5">
                    digital items.
                  </Text>
                </Text>
              </MainTitle>
              <Text
                mode="span"
                fSize={15}
                fColor="white"
                responsive={{
                  320: {
                    tAlign: "center",
                  },
                }}
              >
                Lorem lpsum is simply dummy text of the printing and type
                setting industry. Leorem lpsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                gallery.
              </Text>
              <Button
                bgColor="#447CF5"
                bRadius={5}
                padding={10}
                fColor="white"
                cursor="pointer"
                onClick={toDashboard}
              >
                <Text mode="span" fColor="white" fSize={14}>
                  Go to Dashboard
                </Text>
              </Button>
            </ItemDescPart>
            <img src={handshake} alt="handshake" width={700} />
          </SectionMain>
          <SectionFooter>
            <BalanceBox>
              <BalanceSymbol>
                <img src={tokensymbol} alt="symbol" />
              </BalanceSymbol>
              <BalanceInfo>
                <BalanceName>
                  <Text
                    mode="span"
                    fSize={15}
                    tSpacing={0.04}
                    fColor="white"
                    fWeight={600}
                  >
                    Your Balance
                  </Text>
                </BalanceName>
                <BalanceAmount>
                  <Text
                    mode="span"
                    fSize={20}
                    tSpacing={0.05}
                    fColor="#f9d94f"
                    fWeight={700}
                  >
                    $ 67,731
                  </Text>
                </BalanceAmount>
              </BalanceInfo>
            </BalanceBox>
            <BalanceBox>
              <BalanceSymbol>
                <img src={tokensymbol} alt="symbol" />
              </BalanceSymbol>
              <BalanceInfo>
                <BalanceName>
                  <Text
                    mode="span"
                    fSize={15}
                    tSpacing={0.04}
                    fColor="white"
                    fWeight={600}
                  >
                    Total Distributed
                  </Text>
                </BalanceName>
                <BalanceAmount>
                  <Text
                    mode="span"
                    fSize={20}
                    tSpacing={0.05}
                    fColor="#f9d94f"
                    fWeight={500}
                  >
                    $ 67,731
                  </Text>
                </BalanceAmount>
              </BalanceInfo>
            </BalanceBox>
          </SectionFooter>
        </HomeAuth>
      </div>
    </Container>
  );
};

export default Home;
