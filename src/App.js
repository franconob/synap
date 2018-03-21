import React, { Component } from "react";
import { Provider } from "react-redux";
import MailApp from "./components/MailApp";
import createStore from "./redux/createStore";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <MailApp />
      </Provider>
    );
  }
}

export default App;
