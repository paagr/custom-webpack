const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]', // Output path for fonts
        },
      },
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash][ext]',
				},
			},
			{
				test: /\.html$/i,
				use: 'html-loader',
			},
			{
				test: /\.(scss)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 2,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [autoprefixer],
							},
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								includePaths: [path.resolve(__dirname, 'node_modules')],
							},
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				server: { baseDir: ['dist'] },
			},
			{
				reload: true,
			}
		),
	],
	stats: {
		warnings: false,
	},
	devtool: 'source-map',
};
