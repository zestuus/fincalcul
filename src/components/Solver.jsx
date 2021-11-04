import React, { useState } from 'react';
import styled from "styled-components";

import { Grid, TextField } from "@material-ui/core";

const Formula = styled.div`
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

// eslint-disable-next-line no-unused-vars
const Π = arr => arr.reduce((a, b) =>a*b, 1);
// eslint-disable-next-line no-unused-vars
const Σ = arr => arr.reduce((a, b) =>a+b, 0);
// eslint-disable-next-line no-unused-vars
const Μ = (arr, mapper) => arr.map(mapper);

const setDefaultForDependentVariable = (_, calculation) => {
  let result = 0

  // eslint-disable-next-line no-eval
  eval(`result=${calculation}`);

  return result;
}

const Solver = ({ formula, image, variables }) => {
  let [dependentVariableName, calculation] = formula.split(/=(.+)/);
  const defaultIndependentVariables = variables
    .filter(variable => variable.name !== dependentVariableName)
    .reduce((acc, variable) => {
      const lengthVariable = variables.find(v => variable.length === v.name)

      return variable.length ? (
        {...acc, [variable.name]: lengthVariable && lengthVariable.default ? (
            Array(lengthVariable.default).fill(variable.default || 0)
          ) : []}
      ) : (
        {...acc, [variable.name]: (variable.default || 0)}
      )
    }, {});

  const [independentVariables, setIndependentVariables] = useState(defaultIndependentVariables);

  Object.keys(independentVariables).forEach(key => {
    calculation = calculation.replaceAll(key, `_['${key}']`);
  });

  const [dependentVariable, setDependentVariable] = useState(
    setDefaultForDependentVariable(independentVariables, calculation)
  );

  const handleChange = (key, value, index=null) => {
    const variable = variables.find(variable => variable.name === key);
    const newValue = parseFloat(value) === 0 ? 0 : (parseFloat(value) || (variable && variable.default) || 0);
    let result = dependentVariable;
    let _ = { ...independentVariables };

    if (index === null) {
      const arraysToUpdate = variables.filter(variable => variable.length === key).map(variable => variable.name);

      arraysToUpdate.forEach(name => {
        let arrayCopy = [..._[name]];
        let arrayVariable = variables.find(variable => variable.name === name);
        const newArray = new Array(Math.max(newValue, 0)).fill((arrayVariable && arrayVariable.default) || 0);

        newArray.forEach((v,i) => newArray[i] = (arrayCopy[i] || (arrayVariable && arrayVariable.default) || 0));
        _ = { ..._, [name]: newArray }
      });

      _ = { ..._, [key]: newValue }
    } else {
      const arrayCopy = [..._[key]];

      arrayCopy[index] = newValue;
      _ = { ..._, [key]: arrayCopy }
    }

    setIndependentVariables(_);
    // eslint-disable-next-line no-eval
    eval(`result=${calculation}`);
    setDependentVariable(result);
  };

  const displayVariable = (key, obj = null) => {
    const variable = obj || variables.find(v => v.name === key);

    return variable ? (
      <span>
        {variable.displayName || variable.name}
        <sub>{variable.sub}</sub>
        <sup>{variable.sup}</sup>
      </span>
    ) : key;
  };

  const getInputPropsVariable = (key) => {
    const variable = variables.find(v => v.name === key);

    return variable && (
        (variable.min && variable.min !== 0) ||
        (variable.max && variable.max !== 0) ||
        (variable.step && variable.step !== 0)
      ) ? {
        inputProps: {
          min: variable.min,
          max: variable.max,
          step: variable.step,
        }
      } : undefined;
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
        {variables.map((variable, index) => variable.description ? (
          <li key={`description-${index}`}>{displayVariable(variable.name, variable)} - {variable.description}</li>
        ): null)}
      </ul>
      <p>Введіть значення залежних змінних:</p>
      <Grid container>
        {Object.keys(independentVariables).map(key =>
          independentVariables[key].length || independentVariables[key].length === 0 ? (
            <Grid key={key} container direction="column">
              <Grid container>
                {independentVariables[key].map((value, index) => (
                  <Input
                    key={`${key}-${index}`}
                    variant="outlined"
                    type="number"
                    label={<Label>{key}<sub>{index+1}</sub></Label>}
                    InputProps={getInputPropsVariable(key)}
                    value={value}
                    onChange={event => handleChange(key, event.target.value, index)}
                  />
                ))}
              </Grid>
            </Grid>
          ) : (
            <Input
              key={key}
              variant="outlined"
              type="number"
              label={<Label>{displayVariable(key)}</Label>}
              InputProps={getInputPropsVariable(key)}
              value={independentVariables[key]}
              onChange={event => handleChange(key, event.target.value)}
            />
          ))}
      </Grid>
      <p>Результат:</p>
      <Grid container>
        <Input
          variant="outlined"
          type="number"
          label={<Label>{displayVariable(dependentVariableName)}</Label>}
          value={dependentVariable}
        />
      </Grid>
    </Grid>
  );
};

export default Solver;