import React, { Component, createContext } from "react";
import { firestore } from "../firebase";

export const ScriptContext = createContext({ news });
class ScriptProvider extends Component {
    constructor(props){
      super(props);
    }
  state = {
    news: false
  };

  componentDidMount = () => {
    console.log(this.props.params.id);
    firestore.doc(`scripts/${this.props.params.id}`).onSnapshot(doc => {
      this.setState({ news: true });
    });
  };
  render() {
    const { news } = this.state;
    return (
      <ScriptContext.Provider value={news}>
        {this.props.children}
      </ScriptContext.Provider>
    );
  }
}
export default ScriptProvider;