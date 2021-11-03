import React from 'react';

import { CardWrapper } from "../constants/common-styled-components";
import Solver from "./Solver";

const Card = ({ block: { title, formulas } }) => {

  return (
    <CardWrapper item xs={12} sm={10}>
      <h3>{title}</h3>
      {formulas.map((formula, index) => (
        <Solver key={`formula-${index}`} {...formula} />
      ))}
    </CardWrapper>
  );
};

export default Card;