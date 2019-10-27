import React from "react";
import "./App.css";
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
          <header>{/* <div className="App-logo"></div> */}</header>
          <Container>
            <div>
              <h1 className="formTitle">Welcome to ReachOut</h1>
            </div>
            <Verification forename="" surname="" mobileNumber=""></Verification>
          </Container>
        </div>
        <footer></footer>
      </div>
    );
  }
}
export default App;
