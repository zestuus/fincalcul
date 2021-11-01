import React, { useState } from 'react';
import styled from "styled-components";

import { Grid, TextField } from "@material-ui/core";

const Formula = styled.p`
  font-weight: bold;
  margin: 5px;
  padding: 7px 15px;
  border: 1px solid black;
  border-radius: 4px;
`;

const Input = styled(TextField)`
  margin: 5px;
`;

const Label = styled.span`
  font-size: 22px;
`;

const Solver = ({ formula, image, variables }) => {
  let [dependentVariableName, calculation] = formula.split('=');
  const defaultIndependentVariables = variables
    .filter(variable => variable.name !== dependentVariableName)
    .reduce((acc, variable) => ({ ...acc, [variable.name]: 0 }), {});

  const [independentVariables, setIndependentVariables] = useState(defaultIndependentVariables);
  const [dependentVariable, setDependentVariable] = useState(0);

  Object.keys(independentVariables).forEach(key => {
    calculation = calculation.replace(key, `_['${key}']`);
  });

  const handleChange = (key, value) => {
    let result = dependentVariable;
    const _ = { ...independentVariables, [key]: parseFloat(value) || 0 }

    setIndependentVariables(_);
    // eslint-disable-next-line no-eval
    eval(`result=${calculation}`);
    setDependentVariable(result);
  };

  return (
    <Grid container direction="column">
      <Grid container justifyContent="center">
        <Formula>
          {image ? (
            <img src={image} alt="formula" />
          ) : formula}
        </Formula>
      </Grid>
      <ul>
        {variables.map(variable => (
          <li>{variable.name} - {variable.description}</li>
        ))}
      </ul>
      <p>Введіть значення залежних змінних:</p>
      {Object.keys(independentVariables).map(key => (
        <Input
          key={key}
          variant="outlined"
          type="number"
          label={<Label>{key}</Label>}
          value={independentVariables[key]}
          onChange={event => handleChange(key, event.target.value)}
        />
      ))}
      <p>Результат:</p>
      <Input
        variant="outlined"
        type="number"
        label={<Label>{dependentVariableName}</Label>}
        value={dependentVariable}
      />
    </Grid>
  );
};

export default Solver;