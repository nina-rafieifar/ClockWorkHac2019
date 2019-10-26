import React from "react";
import "./App.css";
import { Registration } from "./components/registration";

interface IAppState {
  /**
   * Patient Forename
   */
  offset: any;
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      offset: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  public render(): React.ReactNode {
    const { offset } = this.state;
    return (
      <div className="App">
        <header className="header-background" style={{ backgroundPositionY: offset }}>
          <section className="info-container" style={{ bottom: offset / 2 }}>
            <div className="App-logo"></div>
          </section>
        </header>
        <Registration></Registration>
      </div>
    );
  }
}
export default App;
