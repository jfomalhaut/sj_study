var path = require('path');

module.exports = {
	entry: [
		"@babel/polyfill",
		"./src/index.js"
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 3000,
		historyApiFallback: true
	}
}