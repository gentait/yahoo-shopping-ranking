import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItenText from "@material-ui/core/ListItemText";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    }
  })
);

export default function Nav({ categories, onClick }: any) {
  const classes = useStyles();
  //遷移先パスの
  const to = (category: any) =>
    category.id === "1" ? "/all" : `/category/${category.id}`;
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <List>
        {categories.map((category: any) => (
          <ListItem
            button
            key={`menu-item-${category.id}`}
            onClick={() => onClick(to(category))}
          >
            <ListItenText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
