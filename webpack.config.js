const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack=require('webpack');
module.exports = {
	context: __dirname + '/app', //Директория файлов приложения
	entry: './index.js', //Файл, который будет главный, из которого будет сборка
	output:{
		path: __dirname + '/app',
		filename: 'build.js'
	},
	watch:NODE_ENV=='development', //следит за изменениями файлах и пересобирает пакет
	watchOptions:{
		aggregateTimeout:100 //ускоряет пересборку нашего проэкта
	},
	devtool:NODE_ENV=='development' ? "cheap-inline-module-source-map":null
}