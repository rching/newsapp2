/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-04-23 00:16:54
 * @modify date 2020-04-23 00:16:54
 * @desc [description]
 */
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    minWidth: 275,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    flexGrow: 1,

    fontSize: 14,

    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  pos: {
    marginBottom: 12,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  card: {
    height: "35vw",
    transitionDuration: "0.3s",
    width: "30vw",
    display: "block",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },

  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [search, setSearch] = React.useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://newsapi.org/v2/top-headlines?pageSize=40&country=id&apiKey=8c2de4fc4ebc472a9256aec9bd3636af`
      );

      const value = result.data.articles.filter((index) =>
        index.title.toLowerCase().includes(data)
      );
      setSearch(value);
    };
    fetchData();
  }, [data]);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
               News Feed from NewsAPI
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                value={data}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Grid container spacing={1} className={classes.mainGrid}>
          {search.map((item, index) => (
            <Grid item xs={4} md={4} key={index}>
              <CardActionArea component="a" href={item.url} target="blank">
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="240"
                    image={item.urlToImage}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
