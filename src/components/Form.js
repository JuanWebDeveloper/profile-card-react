import React, { Component } from "react";

import "./styles/Form.css";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h1>card data</h1>

        <form>
          <div className="form-group">
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={this.props.formValues.fullName}
            />
          </div>

          <div className="form-group">
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.props.onChange}
              className="form-control"
              name="description"
              placeholder="Description"
              value={this.props.formValues.description}
            />
          </div>

          <div className="form-group">
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              placeholder="Twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default Form;
