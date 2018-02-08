import React, {Component}  from 'react'

export default class ArticleCommentsState extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isComntsShown: false
		}
		//this.toggleOpen = this.toggleOpen.bind(this)
	}

	render() {
		const {comments} = this.props
		const {isComntsShown} = this.state

		if(typeof comments === "undefined") return null
		//console.log(this.props)		
		const articleComments = comments.map((comment) => 
			<li key = {comment.id}>
				<section>{comment.user}</section>
				<section>{comment.text}</section>
			</li>)
		
		 	return (
		 		<div>
		 			<button onClick = {this.showComments}>
		 				{isComntsShown ? 'Hide comments' : 'Show comments'}
		 			</button>
		 			{isComntsShown ? <ul>{articleComments}</ul> : null}
				</div>		
				)
	}

	showComments = () => {
		console.log('showComments called')
		this.setState({
			isComntsShown: !this.state.isComntsShown
		})
	}
}