import React from "react";
import { Route, Link } from "react-router-dom";

import { Container, Menu, Image } from "semantic-ui-react";

import Home from "../home";
import Faq from "../faq";

import logo from "../../logo.svg";
import "./App.css";

const App = () => (
  <div>
    <header>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
            Your Header Here
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/faq">Faq</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </header>
    <main>
      <Container text style={{ marginTop: "7em" }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Faq} />
      </Container>
    </main>
  </div>
);

export default App;
