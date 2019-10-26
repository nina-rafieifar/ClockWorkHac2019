import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface IRegistrationProps {}
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
      forename: "",
      surname: "",
      mobileNumber: "",
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
    this.handleForenameChange = this.handleForenameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
    this.handleSupportPersonNameChange = this.handleSupportPersonNameChange.bind(this);
    this.handleSupportPersonMobileNumberChange = this.handleSupportPersonMobileNumberChange.bind(this);
    this.handleSupportPersonRelationshipChange = this.handleSupportPersonRelationshipChange.bind(this);
    this.handleMedicationNameChange = this.handleMedicationNameChange.bind(this);
    this.handleMedicationFrequencyChange = this.handleMedicationFrequencyChange.bind(this);
    this.handleMedicationFormChange = this.handleMedicationFormChange.bind(this);
    this.handleMedicationDosageChange = this.handleMedicationDosageChange.bind(this);
    this.handleMedicationNotesChange = this.handleMedicationNotesChange.bind(this);
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
      medicationFrequency: target.value
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

  /**
   * Render the registration component
   */
  public render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formForename">
            <Form.Label>Forename</Form.Label>
            <Form.Control type="text" placeholder="Enter forename" onChange={this.handleForenameChange} />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Enter surname" onChange={this.handleSurnameChange} />
          </Form.Group>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number" onChange={this.handleMobileNumberChange} />
          </Form.Group>
          <Form.Group controlId="formDateOfBirth">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" placeholder="Enter date of birth" onChange={this.handleDateOfBirthChange} />
          </Form.Group>
          <Form.Group controlId="formSupportPersonName">
            <Form.Label>Support person name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter support person name"
              onChange={this.handleSupportPersonNameChange}
            />
          </Form.Group>
          <Form.Group controlId="formSupportPersonMobileNumber">
            <Form.Label>Support person mobile number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter support person mobile number"
              onChange={this.handleSupportPersonMobileNumberChange}
            />
          </Form.Group>
          <Form.Group controlId="formSupportPersonRelationship">
            <Form.Label>Support person relationship</Form.Label>
            <Form.Control as="select" onChange={this.handleSupportPersonRelationshipChange}>
              <option>Friend</option>
              <option>Relative</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMedicationName">
            <Form.Label>Medication name</Form.Label>
            <Form.Control type="text" placeholder="Enter medication name" onChange={this.handleMedicationNameChange} />
          </Form.Group>
          <Form.Group controlId="formMedicationFrequency">
            <Form.Label>Medication frequency</Form.Label>
            <Form.Control as="select" onChange={this.handleMedicationFrequencyChange}>
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMedicationForm">
            <Form.Label>Medication form</Form.Label>
            <Form.Control as="select" onChange={this.handleMedicationFormChange}>
              <option>Tablet</option>
              <option>Liquid</option>
              <option>Injection</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formMedicationDosage">
            <Form.Label>Medication dosage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter medication dosage"
              onChange={this.handleMedicationDosageChange}
            />
          </Form.Group>
          <Form.Group controlId="formMedicationNotes">
            <Form.Label>Medication notes</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Enter medication notes"
              onChange={this.handleMedicationNotesChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
