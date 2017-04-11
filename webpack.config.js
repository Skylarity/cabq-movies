const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin')

const subDir = (...dirs) => dirs.reduce((a1, a2) => path.resolve(a1, a2)),
	baseDir = __dirname,
	srcDir = subDir(baseDir, 'src'),
	buildDir = subDir(baseDir, 'dist'),
	libDir = subDir(baseDir, 'lib'),
	assetsDir = subDir(baseDir, 'assets')

module.exports = {
	context: srcDir,
	entry: './index.js',
	devtool: 'source-map',
	output: {
		path: buildDir,
		filename: 'index.js'
	},
	resolve: {
		alias: {
			'lib': libDir
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [srcDir],
				loader: 'babel-loader',
				options: {
					presets: ['es2017', 'react'],
					// plugins: ['transform-runtime']
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			Promise: 'es6-promise',
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new HtmlWebpackPlugin({ title: 'CABQ Movies' })
	]
}
