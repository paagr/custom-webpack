'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry: './src/index.js',
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		// filename: 'index_bundle.js',
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash][ext]', // Output path for images
				},
			},
			{
        test: /\.html$/i,
        use: 'html-loader',
      },
			{
				// test: /\.s[ac]ss$/i,
				test: /\.(scss)$/,
				// use: [
				// 	'style-loader',
				// 	'css-loader',
				// 	{
				// 		loader: 'sass-loader',
				// 		options: {
				// 			api: 'modern-compiler',
				// 			sassOptions: {
				// 				// Your sass options
				// 			},
				// 		},
				// 	},
				// ],
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader',
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader',
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [autoprefixer],
							},
						},
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader',
					},
				],
			},
			// For development:
			{
				test: /\.css$/i,
				use: [
					'style-loader', // Injects CSS into the DOM
					'css-loader', // Interprets CSS
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
	stats: {
		warnings: false, // Disable warnings in the console
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 8080,
		hot: true,
		client: {
			overlay: {
				errors: false,
				warnings: false,
			},
		},
	},
};
