import React, { Component } from "react";

class Inputfield extends Component {
  render() {
    return (
      <input
        type={
          ["password", "email"].includes(this.props.type)
            ? this.props.type
            : "text"
        }
        placeholder={this.props.type}
        onChange={e => {
          this.props.submit(
            e.currentTarget.value,
            this.props.type,
            this.props.action
          );
        }}
      />
    );
  }
}

export default Inputfield;
