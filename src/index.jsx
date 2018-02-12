import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {articles} from './fixtures'
// function HelloWorld() {
// 	return <h1>Hello World</h1>
// }

// render(<Article article = {articles[0]} /* foo = 'bar'*//>, document.getElementById('container'));
render(<ArticleList articles = {articles} />, document.getElementById('container'));