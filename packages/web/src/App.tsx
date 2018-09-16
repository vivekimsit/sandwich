import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  withStyles,
  WithStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";

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
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root} />
      </div>
    );
  }

  logout() {
    console.log("Logout");
  }
}

export default withStyles(styles)<{}>(App);
