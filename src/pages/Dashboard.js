import React from "react";
import Select from "react-select";

import {
  BalanceStick,
  BeeRight,
  BeeLeft,
  Container,
  DescTitle,
  NetworkCards,
  NetworkRewards,
  NetworkSearch,
  RewardsBox,
  SearchWrapper,
  SectionDesc,
  SectionNetworkCard,
  TokenWrapper,
} from "../components/pages/dashboard.style";
import Row from "../components/customs/Layout/Row";
import Col from "../components/customs/Layout/Col";
import Text from "../components/customs/Text";
import Header from "../layouts/Header";
import Button from "../components/customs/Button";
import Input from "../components/customs/Input/Input";

import beeshape from "../assets/img/bee-shape.png";
import calculator from "../assets/img/calculator.png";
import price from "../assets/img/pencil.png";
import coin from "../assets/img/star.png";
import ethereum from "../assets/img/ethereum.png";
import overlay from "../assets/img/overlay.png";
import ox from "../assets/img/ox.png";
import fox from "../assets/img/metamask.png";
import wallet1 from "../assets/img/wallet1.png";
import wallet2 from "../assets/img/wallet2.png";
import beehouse from "../assets/img/beehouse.png";
import mobile from "../assets/img/mobile.png";
import wallet3 from "../assets/img/wallet3.png";
import monkey from "../assets/img/monkey.png";
import water from "../assets/img/water.png";
import GM from "../assets/img/GM.png";

const options = [
  {
    value: "chocolate",
    label: (
      <Row justifyContent="flex-start" gap={10}>
        <SearchWrapper>
          <img src={price} alt="price" />
        </SearchWrapper>
        <div>Tags</div>
      </Row>
    ),
  },
  {
    value: "strawberry",
    label: (
      <Row justifyContent="flex-start" gap={10}>
        <SearchWrapper>
          <img src={coin} alt="coin" />
        </SearchWrapper>
        <div>Tokens</div>
      </Row>
    ),
  },
];

const customStyles = {
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
};

const Dashboard = () => {
  return (
    <Container>
      <Row flexDirection="column" alignItems="center">
        <div className="col-md-9 col-sm-9 col-xs-4">
          <BeeLeft>
            <img src={beeshape} alt="beeshape" />
          </BeeLeft>
          <BeeRight>
            <img src={beeshape} alt="beeshape" />
          </BeeRight>
          <Header />
          <SectionDesc>
            <Row
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={20}
            >
              <DescTitle>
                <Text
                  mode="span"
                  fSize={50}
                  fWeight={700}
                  tFont="'Poppins', sans-serif"
                  lHeight={40}
                  tSpacing={0.05}
                  fColor="white"
                >
                  DASHBOARD
                </Text>
              </DescTitle>

              <Col item={18}>
                <Text
                  mode="span"
                  fSize={20}
                  tFont="'Poppins', sans-serif"
                  lHeight={20}
                  tSpacing={0.04}
                  fColor="white"
                >
                  Auto-compounding is when your yield farming rewards are
                  automatically sold and re-added to your pool to earn higher
                  APY. ... If you're new to DeFi, and unsure how to Yield Farm,
                  or what Yield Farming is, then first refer to this article
                  before continuing
                </Text>
              </Col>

              <Button
                bgColor="#82b440"
                bRadius={5}
                padding={10}
                fColor="white"
                cursor="pointer"
                jContent="center"
                aItems="center"
                gGap={10}
              >
                <img src={calculator} alt="rabbit" width={20} height={20} />
                <Text mode="span" fColor="white" fSize={14}>
                  Auto Compounding
                </Text>
              </Button>
            </Row>
          </SectionDesc>
          <SectionNetworkCard>
            <Row flexDirection="column">
              <NetworkSearch>
                <Row
                  justifyContent="space-between"
                  alignItems="center"
                  gap={10}
                  responsive={{
                    1180: {
                      flexDirection: "column",
                      justifyContent: "center",
                    },
                  }}
                >
                  <Col
                    item={6}
                    responsive={{
                      1180: {
                        item: 24,
                      },
                    }}
                  >
                    <Row
                      justifyContent="flex-start"
                      gap={20}
                      responsive={{
                        1180: {
                          justifyContent: "center",
                        },
                      }}
                    >
                      <BalanceStick />
                      <Text
                        mode="span"
                        fSize={40}
                        lHeight={40}
                        fWeight={500}
                        fColor="white"
                        tSpacing={0.05}
                        responsive={{
                          768: {
                            fSize: 30,
                            lHeight: 40,
                            tSpacing: 0.03,
                          },
                          1470: { fSize: 30, lHeight: 40, tSpacing: 0.03 },
                          320: {
                            fSize: 30,
                            lHeight: 40,
                            tSpacing: 0.02,
                            tAlign: "center",
                          },
                        }}
                      >
                        Your Balance
                      </Text>
                    </Row>
                  </Col>
                  <Col
                    item={18}
                    responsive={{
                      1180: {
                        item: 24,
                      },
                      425: {
                        item: 24,
                      },
                    }}
                  >
                    <Row
                      justifyContent="center"
                      alignItems="center"
                      gap={25}
                      responsive={{
                        425: {
                          flexDirection: "column",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <Col item={16}>
                        <Input
                          name="tokensearch"
                          placeholder="Search token to claim reward"
                        />
                      </Col>
                      <Col
                        item={8}
                        responsive={{
                          425: {
                            item: 16,
                          },
                        }}
                      >
                        <Select options={options} styles={customStyles} />
                      </Col>
                      <Col
                        item={8}
                        responsive={{
                          425: {
                            item: 16,
                          },
                        }}
                      >
                        <Select options={options} styles={customStyles} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </NetworkSearch>
              <NetworkCards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={ethereum} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={ox} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={fox} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={wallet1} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={wallet2} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={beehouse} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={mobile} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={wallet3} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={monkey} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={water} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
                <NetworkRewards>
                  <Row flexDirection="column">
                    <Row justifyContent="space-between">
                      <TokenWrapper>
                        <img src={GM} />
                      </TokenWrapper>
                      <Row
                        justifyContent="flex-end"
                        alignItems="center"
                        gap={20}
                      >
                        <img
                          src={overlay}
                          width={20}
                          height={25}
                          style={{ cursor: "pointer" }}
                        />
                        <Button
                          bgColor="#447cf5"
                          bRadius={5}
                          padding={10}
                          fColor="white"
                          cursor="pointer"
                          jContent="center"
                          aItems="center"
                          gGap={10}
                        >
                          <Text
                            mode="span"
                            fColor="white"
                            fSize={14}
                            fWeight={400}
                            tSpacing={0.05}
                          >
                            Claim Rewards
                          </Text>
                        </Button>
                      </Row>
                    </Row>
                    <RewardsBox>
                      <Row flexDirection="column">
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Your Balance
                          </Text>
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 67,731
                          </Text>
                        </Row>
                        <Row justifyContent="space-between" alignItems="center">
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={400}
                            fColor="white"
                            lHeight={50}
                            tSpacing={0.05}
                          >
                            Pendding Rewards
                          </Text>
                          <hr />
                          <Text
                            mode="span"
                            fSize={15}
                            fWeight={500}
                            fColor="#f9da4f"
                            tSpacing={0.05}
                          >
                            $ 677
                          </Text>
                        </Row>
                      </Row>
                    </RewardsBox>
                  </Row>
                </NetworkRewards>
              </NetworkCards>
            </Row>
          </SectionNetworkCard>
        </div>
      </Row>
    </Container>
  );
};

export default Dashboard;
