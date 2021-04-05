import React, { Component } from "react";

import "./global.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";

class App extends Component {
  state = {
    form: {
      fullName: "",
      jobTitle: "",
      description: "",
      email: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
          <div className="row App_content">
            <div className="col-12 col-md-6">
              <Card
                fullName={this.state.form.fullName}
                jobTitle={this.state.form.jobTitle}
                description={this.state.form.description}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>

            <div className="col-12 col-md-6">
              <Form onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
