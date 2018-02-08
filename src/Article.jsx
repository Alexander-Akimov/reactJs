import React, {Component} from 'react'
import ArticleCommentsState from './ArticleCommentsState'
//import ArticleComments from './ArticleComments'

export default class Article extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: true,
			isComntsShown: false
		}
		//this.toggleOpen = this.toggleOpen.bind(this)
	}

	render() {
		const {article} = this.props
		const {isOpen} = this.state
		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick = {this.toggleOpen/*this.toggleOpen.bind(this)*/}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		if(!this.state.isOpen) return null
		const {article} = this.props
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

	toggleOpen = (ev) => {
		//ev.preventDefault()
		console.log('---', ev.nativeEvent)
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}
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