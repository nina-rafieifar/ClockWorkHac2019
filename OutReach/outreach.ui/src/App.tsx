import React from "react";
import "./App.css";
import { Registration } from "./components/registration";

class App extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div className="App">
        <header>
          <div className="App-logo"></div>
        </header>
        <Registration></Registration>
      </div>
    );
  }
}
export default App;
