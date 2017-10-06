import React from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createInput, updateValue } from "../redux/modules/form";

// Form state with controlled components relies heavily on props
// used a class here as passing the props to all methods was unwieldy
class DynamicForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreateInput = this.handleCreateInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // while not necessary, created this method
  // in case future munging is required
  handleCreateInput() {
    this.props.createInput();
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.props.updateValue({ id, value });
  }

  handleSubmit() {
    console.log("A form was submitted but we're not doing anything yet");
  }

  getInput(currentItem, currentIndex) {
    if (this.props.formItems.length === currentIndex + 1) {
      return (
        <Input
          action={{
            color: "blue",
            labelPosition: "right",
            icon: "add circle",
            onClick: this.handleCreateInput
          }}
          id={currentItem.id}
          name={"name-" + currentItem.id}
          placeholder="Enter the Dragon"
          onChange={this.handleChange}
          value={currentItem.value}
        />
      );
    }

    return (
      <Input
        placeholder="Enter the Dragon"
          onChange={this.handleChange}
        value={currentItem.value}
        id={currentItem.id}
      />
    );
  }

  getFormFields() {
    return this.props.formItems.map((formItem, i) => {
      return (
        <Form.Field key={i}>
          <label>{formItem.label + (i + 1)}</label>
          {this.getInput(formItem, i)}
        </Form.Field>
      );
    });
  }

  getSubmitButton() {
    if (this.props.formItems.length > 2) {
      return <Button>I'm so done</Button>;
    }

    return "";
  }

  render() {
    const fields = this.getFormFields();
    const submitButton = this.getSubmitButton();
    return (
      <Form onSubmit={this.handleSubmit}>
        <p>Put form here</p>
        {fields}
        {submitButton}
      </Form>
    );
  }
}

const mapStateToProps = state => ({ formItems: state.form });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createInput,
      updateValue
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DynamicForm);
