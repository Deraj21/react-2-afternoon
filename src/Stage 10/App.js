import React, { Component } from 'react';

import Employee from './models/Employee';

// components
import Header from './components/Header';
import EmployeeEditor from "./components/EmployeeEditor";
import EmployeeList from "Employeelist";

class App extends Component {
  // constructor
  constructor(){
    super();

    this.state = {
      employees: [],
      selectedEmployee: null
    }
  }

  // selectEmployee
  selectEmployee(){

  }

  // refresh
  refresh(){
    
  }

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          // render EmployeeList here
          // render EmployeeEditor here
        </div>
      </div>
    )
  }
}

export default App;
