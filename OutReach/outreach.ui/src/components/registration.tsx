import React from "react";
import Form from "react-bootstrap/Form";

interface IRegistrationProps {
  dateOfBirth?: any
}
interface IRegistrationState {
  dateOfBirth: any
}

export class Registration extends React.Component<IRegistrationProps, IRegistrationState> {
  constructor(props: IRegistrationProps, context?: IRegistrationState) {
    super(props, context);
    this.state = {
      dateOfBirth: props.dateOfBirth
    };
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
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