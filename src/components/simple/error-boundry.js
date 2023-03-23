import React, { Component } from 'react';

import '../simple/simple.css'

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1 className='error'>Something went wrong!</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundry;