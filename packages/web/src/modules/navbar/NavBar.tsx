import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

export class NavBar extends React.PureComponent<RouteComponentProps<{}>> {
  public render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
            YABI
          </Typography>
          <Link to={"/login"}>
            <Button color="inherit">Login</Button>
          </Link>
          <Link to={"/logout"}>
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
