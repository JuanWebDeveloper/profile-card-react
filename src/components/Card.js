import React, { Component } from "react";

import "./styles/Card.css";

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Cards">
          <div className="Cards_content">
            <div className="Card_data text-center">
              <h2>{this.props.fullName}</h2>
              <h2>{this.props.jobTitle}</h2>
            </div>

            <div className="Card_info">
              <p>{this.props.description}</p>
            </div>

            <div className="Card_contact">
              <p>
                {this.props.email} <br /> @{this.props.twitter}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
