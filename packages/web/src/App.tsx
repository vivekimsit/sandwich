import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import { Routes } from "./routes";

interface AppState {
  menuOpen: boolean;
  isLoggedIn: boolean;
}

class App extends React.Component<any, AppState> {
  state = {
    menuOpen: false,
    isLoggedIn: false
  };

  toggleMenu = _ => this.setState({ menuOpen: !this.state.menuOpen });

  public render() {
    const { menuOpen } = this.state;
    return (
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar disableGutters={!menuOpen}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                style={{ flexGrow: 1 }}
              >
                YABI
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Drawer
            open={menuOpen}
            onClose={this.toggleMenu}
            style={{ position: "relative", width: "250px" }}
          >
            <Link to="/dashboard">
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Divider />
            <Link to="/hotels">
              <MenuItem>Hotels</MenuItem>
            </Link>
            <Divider />
          </Drawer>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }

  logout() {
    console.log("Logout");
  }
}

export default App;
