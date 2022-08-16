import React from "react";
import H1 from "../src/components/h1"
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = ["HOLA","HOLA","HOLA","MUNDO"];
  render() {
    return (
    <div>
      {this.state.map((value)=><H1 palabra={value}></H1>)}
    </div>
    )
  }
}

export default App;