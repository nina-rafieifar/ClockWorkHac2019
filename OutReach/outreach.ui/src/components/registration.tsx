import React from "react";
import { Col, Label, Input, Button, Form, FormGroup } from "reactstrap";

interface IRegistrationProps {
  forename: string;
  surname: string;
  mobileNumber: string;
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
interface IRegistrationState {
  forename: string;
  surname: string;
  mobileNumber: string;
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
      forename: this.props.forename,
      surname: this.props.surname,
      mobileNumber: this.props.mobileNumber,
      dateOfBirth: this.props.dateOfBirth,
      supportPersonName: this.props.supportPersonName,
      supportPersonMobileNumber: this.props.supportPersonMobileNumber,
      supportPersonRelationship: this.props.supportPersonRelationship,
      medicationName: this.props.medicationName,
      medicationFrequency: this.props.medicationFrequency,
      medicationForm: this.props.medicationForm,
      medicationDosage: this.props.medicationDosage,
      medicationNotes: this.props.medicationNotes
    };
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
    this.handleSupportPersonNameChange = this.handleSupportPersonNameChange.bind(this);
    this.handleSupportPersonMobileNumberChange = this.handleSupportPersonMobileNumberChange.bind(this);
    this.handleSupportPersonRelationshipChange = this.handleSupportPersonRelationshipChange.bind(this);
    this.handleMedicationNameChange = this.handleMedicationNameChange.bind(this);
    this.handleMedicationFrequencyChange = this.handleMedicationFrequencyChange.bind(this);
    this.handleMedicationFormChange = this.handleMedicationFormChange.bind(this);
    this.handleMedicationDosageChange = this.handleMedicationDosageChange.bind(this);
    this.handleMedicationNotesChange = this.handleMedicationNotesChange.bind(this);
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
      supportPersonRelationship: target.name
    });
  }

  protected handleMedicationNameChange({ target }: any) {
    this.setState({
      medicationName: target.value
    });
  }

  protected handleMedicationFrequencyChange({ target }: any) {
    this.setState({
      medicationFrequency: target.name
    });
  }

  protected handleMedicationFormChange({ target }: any) {
    this.setState({
      medicationForm: target.name
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
    console.log(JSON.stringify(this.state));
    let url = process.env.REACT_APP_API_URL as string;
    fetch(url + "PatientRegistration", {
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
            <Input
              type="date"
              placeholder="Enter date of birth"
              onChange={this.handleDateOfBirthChange}
              value={this.state.dateOfBirth}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formSupportPersonName">
            <Label>Support person name</Label>
            <Input
              type="text"
              placeholder="Enter support person name"
              onChange={this.handleSupportPersonNameChange}
              value={this.state.supportPersonName}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formSupportPersonMobileNumber">
            <Label>Support person mobile number</Label>
            <Input
              type="text"
              placeholder="Enter support person mobile number"
              onChange={this.handleSupportPersonMobileNumberChange}
              value={this.state.supportPersonMobileNumber}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup tag="fieldset" controlId="formSupportPersonRelationship">
            <Label>Support person relationship</Label>
            <FormGroup check onChange={this.handleSupportPersonRelationshipChange}>
              <Label check>
                <Input type="radio" name="Friend" checked={this.state.supportPersonRelationship === "Friend"} /> Friend
              </Label>
            </FormGroup>
            <FormGroup check onChange={this.handleSupportPersonRelationshipChange}>
              <Label check>
                <Input type="radio" name="Relative" checked={this.state.supportPersonRelationship === "Relative"} />{" "}
                Relative
              </Label>
            </FormGroup>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationName">
            <Label>Medication name</Label>
            <Input
              type="text"
              placeholder="Enter medication name"
              onChange={this.handleMedicationNameChange}
              value={this.state.medicationName}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup tag="fieldset" controlId="formMedicationFrequency">
            <Label>Medication frequency</Label>
            <FormGroup check onChange={this.handleMedicationFrequencyChange}>
              <Label check>
                <Input type="radio" name="Hourly" checked={this.state.medicationFrequency === "Hourly"} /> Hourly
              </Label>
            </FormGroup>
            <FormGroup check onChange={this.handleMedicationFrequencyChange}>
              <Label check>
                <Input type="radio" name="Daily" checked={this.state.medicationFrequency === "Daily"} /> Daily
              </Label>
            </FormGroup>
            <FormGroup check onChange={this.handleMedicationFrequencyChange}>
              <Label check>
                <Input type="radio" name="Weekly" checked={this.state.medicationFrequency === "Weekly"} /> Weekly
              </Label>
            </FormGroup>
            <FormGroup check onChange={this.handleMedicationFrequencyChange}>
              <Label check>
                <Input type="radio" name="Monthly" checked={this.state.medicationFrequency === "Monthly"} /> Monthly
              </Label>
            </FormGroup>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup tag="fieldset" controlId="formMedicationForm">
            <Label>Medication form</Label>
            <FormGroup check onChange={this.handleMedicationFormChange}>
              <Label check>
                <Input type="radio" name="Tablet" checked={this.state.medicationForm === "Tablet"} /> Tablet
              </Label>
            </FormGroup>
            <FormGroup check onChange={this.handleMedicationFormChange}>
              <Label check>
                <Input type="radio" name="Liquid" checked={this.state.medicationForm === "Liquid"} /> Liquid
              </Label>
            </FormGroup>
            <FormGroup check onChange={this.handleMedicationFormChange}>
              <Label check>
                <Input type="radio" name="Injection" checked={this.state.medicationForm === "Injection"} /> Injection
              </Label>
            </FormGroup>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationDosage">
            <Label>Medication dosage</Label>
            <Input
              type="text"
              placeholder="Enter medication dosage"
              onChange={this.handleMedicationDosageChange}
              value={this.state.medicationDosage}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup controlId="formMedicationNotes">
            <Label>Medication notes</Label>
            <Input
              type="textarea"
              placeholder="Enter medication notes"
              onChange={this.handleMedicationNotesChange}
              value={this.state.medicationNotes}
            />
          </FormGroup>
        </Col>
        <div style={{ textAlign: "center" }}>
          <Button onClick={this.register}>Register</Button>
        </div>
      </div>
    );
  }
}
