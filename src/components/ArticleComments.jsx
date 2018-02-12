import React from 'react'

export default function ArticleComments({comments}) {
	const articleComments = comments.map((comment) => 
		<li key = {comment.id}>
			<section>{comment.user}</section>
			<section>{comment.text}</section>
		</li>)
	return (
		<ul>
			{articleComments}
		</ul>
	)
}