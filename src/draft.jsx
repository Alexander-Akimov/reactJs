class Article extends Component {

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

export default function Article(props) {
	const {article} = props
	//console.log('---', props)
	return (
		<div>
			<h3>{article.title}</h3>
			<section>{article.text}</section>
		</div>
	)
}