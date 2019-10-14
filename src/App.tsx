import React from "react";
import { Route, Switch } from "react-router-dom";
import Ranking from "./containers/Ranking";
import Nav from "./containers/Nav";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Yahoo!ショッピングランキング
          </Typography>
        </Toolbar>
      </AppBar>
      <Nav />
      {/* 総合ランキングのルート */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/all" component={Ranking} />
          <Route
            path="/category/:id"
            render={({ match }) => <Ranking categoryId={match.params.id} />}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
