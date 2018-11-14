import React, { Component } from "react";
import "./App.css";
import linearSearch from "./algorithms/1-linear-search";
import binarySearch from "./algorithms/2-binary-search";

class App extends Component {
  state = {
    error: null,
    searchCount: null
  };

  handleSubmit = e => {
    e.preventDefault();

    this.input.value = "";
  };

  handleSearch = e => {
    const intArray = stringToIntArray(this.input.value);
    // Relies on the inner text of the button to determine the name of the algorithm
    // e.g. "Linear Search" if the button's text is such
    const algorithm = e.target.innerText;
    // Clear the error and previous search state before handling new search
    this.setState({ error: null, searchCount: null }, () => {
      switch (algorithm) {
        case "Linear Search":
          return this.processSearchResult(linearSearch(intArray));
        case "Binary Search":
          return this.processSearchResult(binarySearch(intArray));
        default:
          return this.setState({
            error: "Search submission handler broken! :("
          });
      }
    });
  };

  processSearchResult = result => {
    /**
     * All search algorithms should behave according to these specs.
     * @param {int[]} intArray
     * @param {int} target
     * @return {int} number of searches to find target OR -1 if not found
     */
    if (result === -1) this.setState({ error: `Item not found` });
    else this.setState({ searchCount: result });
  };

  render() {
    return (
      <>
        <h1>The Searchinator</h1>
        {this.state.error && (
          <h2 className="search-error">{this.state.error}</h2>
        )}
        <form onSubmit={this.handleSubmit}>
          <textarea ref={input => (this.input = input)} />
          <button onClick={this.handleSearch}>Linear Search</button>
          <button onClick={this.handleSearch}>Binary Search</button>
        </form>
        {this.state.searchCount && (
          <h2>
            It took {this.state.searchCount} fookin searches to find the target.
          </h2>
        )}
      </>
    );
  }
}

function stringToIntArray(string) {
  return string.split(" ").map(num => Number(num));
}

export default App;
