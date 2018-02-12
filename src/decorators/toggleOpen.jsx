import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
	state = {
		isOpen: false
	}

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
	}

	toggleOpen = (ev) => {
		ev && ev.preventDefault && ev.preventDefault() // проверки прежде чем вызвать этот метод
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

// const func = (...args) => {
// 	console.log('', ...args)
// 	return originalFunc(...args)
// }