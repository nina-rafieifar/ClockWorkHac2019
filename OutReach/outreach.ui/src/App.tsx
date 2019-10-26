import React from "react";
import "./App.css";
import { Registration } from "./components/registration";
import { Verification } from "./components/verification";
import { Container } from "reactstrap";

class App extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div className="App">
        <div className="Form">
          <div className="FormSubset">
            <header>{/* <div className="App-logo"></div> */}</header>
            <Container>
              <div>
                <h1 className="formTitle">Welcome to ReachOut</h1>
              </div>
              <Registration></Registration>
              <Verification patientForename="nina" patientSurname="raf" phoneNumber="448629639126"></Verification>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
