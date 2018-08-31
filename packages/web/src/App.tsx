import * as React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";

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

  openMenu = _ => this.setState({ menuOpen: !this.state.menuOpen });

  public render() {
    return (
      <Router>
        <div className="App">
          <AppBar position="absolute">
            <Toolbar>
              <Typography variant="title" color="inherit">
                YABI
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent">
            <Link to="/register">
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Divider />
            <Link to="/hotels">
              <MenuItem>Hotels</MenuItem>
            </Link>
            <Divider />
          </Drawer>
          <Routes />
        </div>
      </Router>
    );
  }

  logout() {
    console.log("Logout");
  }
}

export default App;