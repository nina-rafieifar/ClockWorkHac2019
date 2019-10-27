import React from "react";
import { Registration } from "./registration";
import { Col, Label, Input, Button, Form, FormGroup } from "reactstrap";

interface IVerificationProps {
  forename: string;
  surname: string;
  mobileNumber: string;
}

interface IVerificationStates {
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
  isVerified: boolean;
}

/**
 * Responsible for verifiying a patient's phone number
 */
export class Verification extends React.Component<IVerificationProps, IVerificationStates> {
  url = process.env.REACT_APP_API_URL as string;
  constructor(props: any, context?: any) {
    super(props, context);
    this.state = {
      forename: this.props.forename,
      surname: this.props.surname,
      mobileNumber: this.props.mobileNumber,
      dateOfBirth: "",
      supportPersonName: "",
      supportPersonMobileNumber: "",
      supportPersonRelationship: "",
      medicationName: "",
      medicationFrequency: "",
      medicationForm: "",
      medicationDosage: "",
      medicationNotes: "",
      isVerified: false
    };

    this.handleForenameChange = this.handleForenameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
    this.verify = this.verify.bind(this);
  }

  /**
   * Render the page with a name and phone number input
   */
  public render(): React.ReactNode {
    if (!this.state.isVerified) {
      return (
        <>
          <div className="formRegistration">
            <Col>
              <FormGroup controlId="formForename">
                <Label>Forename</Label>
                <Input type="text" placeholder="Enter forename" onChange={this.handleForenameChange} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup controlId="formSurname">
                <Label>Surname</Label>
                <Input type="text" placeholder="Enter surname" onChange={this.handleSurnameChange} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup controlId="formMobileNumber">
                <Label>Mobile number</Label>
                <Input type="text" placeholder="Enter mobile number" onChange={this.handleMobileNumberChange} />
              </FormGroup>
            </Col>
            <div style={{ textAlign: "center" }}>
              <Button type={"submit"} variant={"primary"} onClick={this.verify}>
                Submit
              </Button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Registration></Registration>
        </>
      );
    }
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

  protected verify() {
    if (this.state.forename !== "" && this.state.surname !== "" && this.state.mobileNumber !== "") {
      this.checkIfIsVerified();
      if (!this.state.isVerified)
        fetch(this.url + "/api/VerifyPhoneNumber", {
          method: "POST",
          body: JSON.stringify({
            patientForename: this.state.forename,
            patientSurname: this.state.surname,
            phoneNumber: this.state.mobileNumber
          })
        })
          .then(response => {
            return response.text();
          })
          .then(result => {
            let response = JSON.parse(result);
            // this.setState({
            //   items: response.audit as []
            // });
          });
    }
  }

  protected checkIfIsVerified() {
    if (this.state.mobileNumber !== "")
      fetch(this.url + "/api/Patient?mobilePhoneNumber=" + this.state.mobileNumber)
        .then(response => {
          return response.text();
        })
        .then(result => {
          let response = JSON.parse(result);
          // this.setState({
          //   items: response.audit as []
          // });
        });
  }
}

export default Verification;
