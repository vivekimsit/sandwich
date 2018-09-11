import * as React from "react";
import {
  BrowserRouter as Router,
  Link,
  RouteComponentProps
} from "react-router-dom";
import {
  withStyles,
  WithStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import { Routes } from "./routes";

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex"
    },
    drawerPaper: {
      position: "relative",
      width: drawerWidth
    },
    content: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      overflow: "auto",
      justifyContent: "center"
    },
    toolbar: theme.mixins.toolbar
  });

interface IProps extends WithStyles<typeof styles> {}

interface IState {
  menuOpen: boolean;
  isLoggedIn: boolean;
}

class App extends React.Component<RouteComponentProps<{}> & IProps, IState> {
  state = {
    menuOpen: true,
    isLoggedIn: false
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleLogin = _ => {
    window.location.href = "/login";
  };

  handleLogout = _ => {
    this.toggleMenu();
    window.location.href = "/logout";
  };

  public render() {
    const { menuOpen } = this.state;
    const { classes } = this.props;

    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
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
              <Button color="inherit" onClick={this.handleLogin}>
                Login
              </Button>
              <Button color="inherit" onClick={this.handleLogout}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <Router>
            <div className={classes.root}>
              <Drawer
                open={menuOpen}
                variant="permanent"
                onClose={this.toggleMenu}
                classes={{ paper: classes.drawerPaper }}
              >
                <List>
                  <ListItem
                    button={true}
                    component={Link}
                    {...{ to: "/dashboard" }}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem
                    button={true}
                    component={Link}
                    {...{ to: "/hotels" }}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hotels" />
                  </ListItem>
                </List>
              </Drawer>
              <main className={classes.content}>
                <Routes />
              </main>
            </div>
          </Router>
        </div>
      </div>
    );
  }

  logout() {
    console.log("Logout");
  }
}

export default withStyles(styles)<{}>(App);
