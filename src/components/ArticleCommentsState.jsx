import React, {Component}  from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
// ArticleCommentsState.defaultProps = {
// 		comments: []
// 	}

class ArticleCommentsState extends Component {
	static defaultProps = {
		comments: []
	}

/*	state = { //ES7 syntax
		areComntsShown: false
	}*/

	render() {
		const {comments, isOpen, toggleOpen} = this.props

		// if(typeof comments === "undefined") return null
		if(!comments.length) return null
		//console.log(this.props)		
		const articleComments = comments.map((comment) => 
			<li key = {comment.id}><Comment comment = {comment}/></li>)
		
		return (
			<div>
				<button onClick = {toggleOpen}>
					{isOpen ? 'Hide comments' : 'Show comments'}
				</button>
				{isOpen ? <ul>{articleComments}</ul> : null}
			</div>		
		)
	}
}
export default toggleOpen(ArticleCommentsState)