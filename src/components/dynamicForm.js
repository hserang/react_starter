import React from "react";
import { Form, Input, Icon } from "semantic-ui-react";

import { connect } from "react-redux";

const DynamicForm = props => {
  console.log("props", props);
  return (
    <Form>
      <p>Put form here</p>
      <Form.Field>
        <label>Label or no?</label>
        <Input
          icon={<Icon name="add circle" inverted circular link />}
          placeholder="Enter the Dragon"
        />
      </Form.Field>
    </Form>
  );
};

const mapStateToProps = state => ({ form_list: state.form });

export default connect(mapStateToProps, null)(DynamicForm);
