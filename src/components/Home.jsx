import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import {Container} from '../constants/common-styled-components';
import largeLogo from '../images/logo.svg';
import {PRIMARY_COLOR} from '../constants/config';

const LogoWrapper = styled(Grid)`
  padding: 5px;
`;

const LargeLogo = styled.img`
  width: 80%;
  @media (max-width: 960px) {
    margin: auto;
    max-width: 340px;
  }
`;

const WelcomeBlock = styled(Grid)`
  padding: 22px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  @media (max-width: 960px) {
    margin: 10px 0;
    font-size: 40px;
  }
`;

const SecondTitle = styled.h3`
  font-size: 35px;
  margin: 10px 0;
  @media (max-width: 960px) {
    margin: 5px 0;
    font-size: 25px;
  }
`;

const Name = styled.span`
  color: ${PRIMARY_COLOR};
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 25px;
`;

const Home = () => {
  return (
    <Grid container justifyContent="center">
      <Container item container md={9} sm={11} alignItems="center">
        <LogoWrapper item container md={6}>
          <LargeLogo src={largeLogo} alt="fincalcul large logo"/>
        </LogoWrapper>
        <WelcomeBlock item container md={6} direction="column" alignItems="center">
          <Title>Вітаємо</Title>
          <SecondTitle>Це <Name>fincalcul</Name> &ndash; <br /> фінансовий калькулятор</SecondTitle>
          <Description>
            Тут міг би бути короткий опис продукту,<br/> але його не буде)
          </Description>
        </WelcomeBlock>
      </Container>
    </Grid>
  );
};

export default Home;