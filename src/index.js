import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App/app'
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
	const appRoot = document.createElement('main')
	document.body.appendChild(appRoot)
	ReactDom.render(<App />, appRoot)
})
