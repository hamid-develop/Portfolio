import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import About from "./About";
import Home from "./Home";
import TopNav from "./TopNav";
import Projects from "./Projects";
import Resume from "./Resume";

const Portfolio = () => {
  return (
    <Fragment>
      <TopNav />
      <Helmet>
        <style>{"body{background-color:#e9ecef;}"}</style>
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Fragment>
  );
};

export default Portfolio;
