import React from "react";
import { Button } from "react-bootstrap";

interface IVerificationProps {
  /*
   *
   */
}

/**
 * Responsible for verifiying a patient's phone number
 */
export class Verification extends React.Component<IVerificationProps> {
  /**
   * Render the page with a name and phone number input
   */
  public render(): React.ReactNode {
    return <Button type={"submit"} variant={"primary"} onClick={this.verify}></Button>;
  }

  protected verify() {}
}

export default Verification;
