import React from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import Unit1 from "./Units/Unit1";
import Unit2 from "./Units/Unit2";
import Unit3 from "./Units/Unit3";
import Unit4 from "./Units/Unit4";
import Unit5 from "./Units/Unit5";
import Unit6 from "./Units/Unit6";
import Unit7 from "./Units/Unit7";

import Card from "./Card";

const Title = styled.h1`
  text-align: center;
  margin: 15px 10px; 
`;

const Unit = ({ match: { params: { unitNumber }}}) => {
  let unit = {
    title: '',
    blocks: [],
  }

  switch (parseInt(unitNumber, 10)) {
    case 1:
      unit = Unit1
      break;
    case 2:
      unit = Unit2;
      break;
    case 3:
      unit = Unit3;
      break;
    case 4:
      unit = Unit4;
      break;
    case 5:
      unit = Unit5;
      break;
    case 6:
      unit = Unit6;
      break;
    case 7:
      unit = Unit7;
      break;
    default: break;
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Title>{unit.title}</Title>
      <Grid container justifyContent="center">
        {unit.blocks.map((block, blockIndex) => (
          <React.Fragment key={`unit-${unitNumber}-block-${blockIndex}`}>
            <Card block={block} />
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default Unit;