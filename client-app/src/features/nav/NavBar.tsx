import React from "react";
import { Menu, Container, MenuItem, Button } from "semantic-ui-react";

interface IProps{
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu inverted>
      <Container>
          <MenuItem header>
              <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
              Reactivities
          </MenuItem>
        <Menu.Item name="Activities" />
        <MenuItem>
            <Button onClick={openCreateForm} positive content="Create Activity"/>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;
