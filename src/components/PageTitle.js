import React from "react";

class PageTitle extends React.Component {
  render() {
    if (this.props.title.length > 12) {
      return (
        <h1 style={{ justifyContent: "space-between" }}>
          {this.props.title.split(" ").map((word) => {
            return <span>{word}</span>;
          })}
        </h1>
      );
    } else {
      return <h1 style={{ justifyContent: "center" }}>{this.props.title}</h1>;
    }
  }
}

export default PageTitle;
