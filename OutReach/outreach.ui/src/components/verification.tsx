import React from "react";
import { Button } from "react-bootstrap";

interface IVerificationProps {
  /**
   * Patient Forename
   */
  patientForename: any;

  /**
   * Patient Surname
   */
  patientSurname: any;

  /**
   * Phone number
   */
  phoneNumber: any;
}

/**
 * Responsible for verifiying a patient's phone number
 */
export class Verification extends React.Component<IVerificationProps> {
  constructor(props: any, context?: any) {
    super(props, context);
    this.verify = this.verify.bind(this);
  }

  /**
   * Render the page with a name and phone number input
   */
  public render(): React.ReactNode {
    return <Button type={"submit"} variant={"primary"} onClick={this.verify}></Button>;
  }

  protected verify() {
    let url = process.env.REACT_APP_API_URL as string;
    fetch(url + "/api/VerifyPhoneNumber", {
      body: JSON.stringify({
        patientForename: this.props.patientForename,
        patientSurname: this.props.patientSurname,
        phoneNumber: this.props.phoneNumber
      })
    });
  }
}

export default Verification;
