var path = require('path');

module.exports = {
  //시작점
	entry: [
		"@babel/polyfill",
		"./src/index.js"
	],
  //내가 사용할 모듈 리스트
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
  //내가 사용할 확장자 내역
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
  //내가 build를 하고난 결과물들이 나오는 위치
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
  //개발용 서버에 대한 내용
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3000,
		historyApiFallback: true
	}
}