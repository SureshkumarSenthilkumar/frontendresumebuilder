import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";
import ProjectsDetails from "./components/ProjectsDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import ExtraDetails from "./components/ExtraDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Resume Builder
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <div>
          <Link to="/"></Link>
        </div>
        <Routes>
          <Route exact path="/" element={<PersonalDetails />} />
          <Route path="/Education" element={<EducationDetails />} />
          <Route path="/Projects" element={<ProjectsDetails />} />
          <Route path="/Experience" element={<ExperienceDetails />} />
          <Route path="/Extras" element={<ExtraDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
