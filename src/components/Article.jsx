import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleCommentsState from './ArticleCommentsState'
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
				<ArticleCommentsState comments = {article.comments}/>
			</div>			
		)
	}				
	//{this.getComments()}

	getComments() {
		const {article} = this.props
		const {isComntsShown} = this.state
		if(!!article.comments) {
		 	return (
		 		<div>
		 			<button onClick = {this.showComments}>
		 				{isComntsShown ? 'Hide comments' : 'Show comments'}
		 			</button>
		 			{this.state.isComntsShown ? <ArticleComments comments = {article.comments}/> : null}
				</div>		
				)
		 	}
		return null		
	}

	showComments = () => {
		console.log('showComments called')
		this.setState({
			isComntsShown: !this.state.isComntsShown
		})
	}

	
}
export default toggleOpen(Article)


/*export default function Article(props) {
	const {article} = props
	//console.log('---', props)
	return (
		<div>
			<h3>{article.title}</h3>
			<section>{article.text}</section>
		</div>
	)
}*/