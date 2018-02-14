import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
// import ArticleCommentsState from './ArticleCommentsState'
//import ArticleComments from './ArticleComments'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
	static propTypes = {
		//article: PropTypes.number
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string,
			comments: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.string.isRequired,
				user: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired}))
		}).isRequired
	}

	render() {
		const {article, isOpen, toggleOpen} = this.props
		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick = {toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		const {article, isOpen} = this.props
		if(!isOpen) return null
		return (
			<div>
				<section>{article.text}</section>
				<CommentList comments = {article.comments}/>
			</div>			
		)//<ArticleCommentsState comments = {article.comments}/>
	}
}

export default toggleOpen(Article)