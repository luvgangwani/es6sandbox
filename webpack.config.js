module.exports = {
	
	entry: './script.js',
	output: {filename : 'bundle.js'}, // file that holds the ES6 to ES5 converted code
	module: {
		rules: [
			{
				test : /\.js?/,
				loader : 'babel-loader',
				exclude : /node_modules/,
				query : {
					presets : ['env']
				}
			}
		] // details of what we want to load
	},
	//mode: 'development'
};