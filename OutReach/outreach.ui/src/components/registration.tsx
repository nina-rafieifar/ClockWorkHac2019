import React from "react";
import { Col, Label, Input, Button, Form, FormGroup } from "reactstrap";

interface IRegistrationProps {}
interface IRegistrationState {
  dateOfBirth: string;
  supportPersonName: string;
  supportPersonMobileNumber: string;
  supportPersonRelationship: string;
  medicationName: string;
  medicationFrequency: string;
  medicationForm: string;
  medicationDosage: string;
  medicationNotes: string;
}

export class Registration extends React.Component<IRegistrationProps, IRegistrationState> {
  constructor(props: IRegistrationProps, context?: IRegistrationState) {
    super(props, context);
    this.state = {
      dateOfBirth: "",
      supportPersonName: "",
      supportPersonMobileNumber: "",
      supportPersonRelationship: "Friend",
      medicationName: "",
      medicationFrequency: "Hourly",
      medicationForm: "",
      medicationDosage: "",
      medicationNotes: ""
    };
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
    this.handleSupportPersonNameChange = this.handleSupportPersonNameChange.bind(this);
    this.handleSupportPersonMobileNumberChange = this.handleSupportPersonMobileNumberChange.bind(this);
    this.handleSupportPersonRelationshipChange = this.handleSupportPersonRelationshipChange.bind(this);
    this.handleMedicationNameChange = this.handleMedicationNameChange.bind(this);
    this.handleMedicationFrequencyChange = this.handleMedicationFrequencyChange.bind(this);
    this.handleMedicationFormChange = this.handleMedicationFormChange.bind(this);
    this.handleMedicationDosageChange = this.handleMedicationDosageChange.bind(this);
    this.register = this.register.bind(this);
  }

  protected handleDateOfBirthChange({ target }: any) {
    this.setState({
      dateOfBirth: target.value
    });
  }

  protected handleSupportPersonNameChange({ target }: any) {
    this.setState({
      supportPersonName: target.value
    });
  }

  protected handleSupportPersonMobileNumberChange({ target }: any) {
    this.setState({
      supportPersonMobileNumber: target.value
    });
  }

  protected handleSupportPersonRelationshipChange({ target }: any) {
    this.setState({
      supportPersonRelationship: target.value
    });
  }

  protected handleMedicationNameChange({ target }: any) {
    this.setState({
      medicationName: target.value
    });
  }

  protected handleMedicationFrequencyChange({ target }: any) {
    this.setState({
      medicationFrequency: target.value
    });
  }

  protected handleMedicationFormChange({ target }: any) {
    this.setState({
      medicationForm: target.value
    });
  }

  protected handleMedicationDosageChange({ target }: any) {
    this.setState({
      medicationDosage: target.value
    });
  }

  protected handleMedicationNotesChange({ target }: any) {
    this.setState({
      medicationNotes: target.value
    });
  }

  protected register() {
    let url = process.env.REACT_APP_API_URL as string;
    fetch(url + "/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  }

  /**
   * Render the registration component
   */
  public render() {
    return (
      <div className="formRegistration">
        <Col>
          <FormGroup controlId="formDateOfBirth">
            <Label>Date of birth</Label>
            <Input type="date" placeholder="Enter date of birth" onChange={this.handleDateOfBirthChange} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formSupportPersonName">
            <Label>Support person name</Label>
            <Input type="text" placeholder="Enter support person name" onChange={this.handleSupportPersonNameChange} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formSupportPersonMobileNumber">
            <Label>Support person mobile number</Label>
            <Input
              type="text"
              placeholder="Enter support person mobile number"
              onChange={this.handleSupportPersonMobileNumberChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formSupportPersonRelationship">
            <Label>Support person relationship</Label>
            <Input as="select" onChange={this.handleSupportPersonRelationshipChange}>
              <option>Friend</option>
              <option>Relative</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationName">
            <Label>Medication name</Label>
            <Input type="text" placeholder="Enter medication name" onChange={this.handleMedicationNameChange} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationFrequency">
            <Label>Medication frequency</Label>
            <Input as="select" onChange={this.handleMedicationFrequencyChange}>
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationForm">
            <Label>Medication form</Label>
            <Input as="select" onChange={this.handleMedicationFormChange}>
              <option>Tablet</option>
              <option>Liquid</option>
              <option>Injection</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationDosage">
            <Label>Medication dosage</Label>
            <Input type="text" placeholder="Enter medication dosage" onChange={this.handleMedicationDosageChange} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationNotes">
            <Label>Medication notes</Label>
            <Input type="textarea" placeholder="Enter medication notes" onChange={this.handleMedicationNotesChange} />
          </FormGroup>
        </Col>
        <Button onClick={this.register}>Register</Button>
      </div>
    );
  }
}
