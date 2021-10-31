import React, {useState} from 'react';
import styled from "styled-components";
import {useHistory} from "react-router";

import { Grid, Hidden, IconButton, Menu, MenuItem }  from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';

// internal imports
import {PRIMARY_COLOR} from "../constants/config";
import Logo from "./Logo";


const Container = styled(Grid)`
  max-width: 1280px; 
`;

const Border = styled.hr`
  border-top: 2px solid ${PRIMARY_COLOR};
  margin: 0;
`;

const MenuBlock = styled.div`
  margin-right: 20px;
  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

const MenuLink = styled.div`
  color: ${PRIMARY_COLOR};
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const DropdownMenuItem = styled(MenuItem)`
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;

const Header = () => {
  const history = useHistory();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  const menuItems = [
    { key: 'unit-1', event: () => history.push('/unit/1'), title: 'Розділ 1' },
    { key: 'unit-2', event: () => history.push('/unit/2'), title: 'Розділ 2' },
    { key: 'unit-3', event: () => history.push('/unit/3'), title: 'Розділ 3' },
    // { key: 'unit-4', event: () => history.push('/unit/4'), title: 'Розділ 4' },
    { key: 'unit-5', event: () => history.push('/unit/5'), title: 'Розділ 5' },
    // { key: 'unit-6', event: () => history.push('/unit/6'), title: 'Розділ 6' },
    { key: 'unit-7', event: () => history.push('/unit/7'), title: 'Розділ 7' },
  ];

  return (
    <React.Fragment>
      <Grid container justifyContent="center">
        <Container container alignItems="center" justifyContent="space-between">
          <Logo />
          <MenuBlock>
            <Grid item container alignItems="center" justifyContent="flex-end">
              <Hidden xsDown>
                {menuItems.map(item => (
                  <MenuLink key={item.key} onClick={item.event}>{item.title}</MenuLink>
                ))}
              </Hidden>
              <Hidden smUp>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MenuIcon fontSize="large" color="primary"/>
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={menuAnchorEl}
                  keepMounted
                  open={Boolean(menuAnchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map(item => (
                    <DropdownMenuItem
                      key={item.key}
                      onClick={event => {
                        item.event(event);
                        handleClose();
                      }}>
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </Menu>
              </Hidden>
            </Grid>
          </MenuBlock>
        </Container>
      </Grid>
      <Border />
    </React.Fragment>
  );
};

export default Header;