import styled from 'styled-components';

import Grid from "@material-ui/core/Grid";
import {PRIMARY_COLOR} from "./config";

export const Container = styled(Grid)`
  height: calc(100vh - 115px);
`;

export const CardWrapper = styled(Grid)`
  max-width: 1000px;
  min-height: 200px;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
`;