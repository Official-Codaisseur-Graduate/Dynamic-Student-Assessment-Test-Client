import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Instructions extends Component {
  state = {
    instructions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nisi, pulvinar quis erat at, blandit iaculis nisl. In feugiat tincidunt ligula eget condimentum. Praesent nulla odio, iaculis eu tortor quis, rutrum posuere lorem. Proin eget arcu id mi pulvinar imperdiet. Fusce at ante vitae justo maximus accumsan. Suspendisse tempus at purus in molestie. Nunc eu magna condimentum, pulvinar lorem eu, tincidunt dui. Etiam laoreet faucibus nisi, quis viverra lacus sodales ac. Morbi ac dui a odio placerat iaculis. Quisque imperdiet massa quis hendrerit laoreet. Suspendisse molestie viverra dapibus."
  };

  render() {
    return (
      <div>
        <h1>Instructions</h1>
        <p>{this.state.instructions}</p>
        <Link>
          <button>Start test</button>
        </Link>
      </div>
    );
  }
}
