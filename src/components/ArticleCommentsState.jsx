import React, {Component}  from 'react'
import Comment from './Comment'
// ArticleCommentsState.defaultProps = {
// 		comments: []
// 	}

export default class ArticleCommentsState extends Component {
	static defaultProps = {
		comments: []
	}

	state = { //ES7 syntax
		areComntsShown: false
	}

	constructor(props) {
		super(props)
	}

	render() {
		const {comments} = this.props
		const {areComntsShown} = this.state

		// if(typeof comments === "undefined") return null
		if(!comments.length) return null
		//console.log(this.props)		
		const articleComments = comments.map((comment) => 
			<li key = {comment.id}><Comment comment = {comment}/></li>)
		
		return (
			<div>
				<button onClick = {this.showComments}>
					{areComntsShown ? 'Hide comments' : 'Show comments'}
				</button>
				{areComntsShown ? <ul>{articleComments}</ul> : null}
			</div>		
		)
	}

	showComments = () => {
		console.log('showComments called')
		this.setState({
			areComntsShown: !this.state.areComntsShown
		})
	}
}