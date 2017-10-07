import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../redux/modules/counter";

import { Header } from "semantic-ui-react";

import DynamicForm from "../../components/dynamicForm";

const Home = props => (
  <div>
    <Header as="h1">Home</Header>
    <p>This is a basic fixed menu template using fixed size containers.</p>
    <p>
      All ui is scemantic ui for React - just plugged it in for convenience as a temp measure
    </p>
    <p>The jury is out on what if any styling lib to use.</p>

    <DynamicForm {...props.form_data} />
  </div>
);

const mapStateToProps = state => ({
  form_data: state.form_data,
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/faq")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
