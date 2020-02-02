import React, { Component } from 'react';

class CounterButton extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}

// Don't overuse this due to shallow comparison...
	shouldComponentUpdate(nextProps, nextState) {
		// console.log(nextProps, nextState);
		// return true;
		if(this.state.count !== nextState.count) {
			return true;
		}
		return false;
	}

	// Note: the state should not be updated directly.
	// Use something like this below:
	updateCount = () => {
		this.setState(state => {
			return {count: this.state.count + 1}
		})
	}

	render() {
		console.log('CounterButton');
		return (
			<button color={this.props.color} onClick={this.updateCount}>
				Count: {this.state.count}
			</button>
			)
	}
}

export default CounterButton;