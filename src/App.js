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

	linearSearch = () => {
		const intArray = stringToIntArray(this.input.value);
		this.setState({ error: null, searchCount: null }, () => {
			this.processSearchResult(linearSearch(intArray));
		});
	};

	binarySearch = () => {
		const intArray = stringToIntArray(this.input.value);
		this.processSearchResult(binarySearch(intArray));
	};

	processSearchResult = result => {
		console.log(result);
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
					<button onClick={this.linearSearch}>Linear Search</button>
					<button onClick={this.binarySearch}>Binary Search</button>
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
