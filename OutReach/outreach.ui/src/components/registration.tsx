import React from "react";
import Form from "react-bootstrap/Form";
import { string } from "prop-types";

interface IRegistrationProps {
}
interface IRegistrationState {
  forename: string
  surname: string
  mobileNumber: string
  dateOfBirth: string
}

export class Registration extends React.Component<IRegistrationProps, IRegistrationState> {
  constructor(props: IRegistrationProps, context?: IRegistrationState) {
    super(props, context);
    this.state = {
      forename: "",
      surname: "",
      mobileNumber: "",
      dateOfBirth: ""
    };
    this.handleForenameChange = this.handleForenameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
  }

  protected handleForenameChange({ target }: any) {
    this.setState({
      forename: target.value
    });
  }

  protected handleSurnameChange({ target }: any) {
    this.setState({
      surname: target.value
    });
  }

  protected handleMobileNumberChange({ target }: any) {
    this.setState({
      mobileNumber: target.value
    });
  }

  protected handleDateOfBirthChange({ target }: any) {
    this.setState({
      dateOfBirth: target.value
    });
  }

  /**
   * Render the registration component
   */
  public render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formForename">
            <Form.Label>Forename</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter forename"
              onChange={this.handleForenameChange}
            />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter surname"
              onChange={this.handleSurnameChange}
            />
          </Form.Group>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              onChange={this.handleMobileNumberChange}
            />
          </Form.Group>
          <Form.Group controlId="formDateOfBirth">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date of birth"
              onChange={this.handleDateOfBirthChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}