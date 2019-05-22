

//由于webpack 是基于node.js构建的，所有 webpack的配置文件中 任何合法的node代码都是支持的
var path = require('path')
//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
//因为配置插件，需要在导出的对象中挂载一个plugin节点
var htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

//当以命令行形式运行webpack 或者 webpack-dev-server的时候，咱们工具会发现，我们并没有提供要打包的文件的入口和出口文件，此时 他会检查项目根目录中的配置文件并读取这个文件，
//就拿到了导出的这个配置对象,然后根据这个对象，进行打包构建
module.exports={
    entry:path.join(__dirname,'./src/main.js'), //入口文件
    output:{//指定输出选项
        path:path.join(__dirname,'./dist'), //输出路径
        filename:'bundle.js' //指定输出文件的名称

    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'), //指定模板文件路径
            filename:'index.html', //设置生成的内存页面名称
        }),
        new VueLoaderPlugin(),
    ],
    module:{//配置所有第三方loader模块
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}, //处理css样式的loader
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:"url-loader?limit=340737&name=[hash:8]-[name].[ext]"}, //处理css文件中图片或者字体库url地址的loader
            //limit给定的值是图片的大小，单位是byte,如果我们引用的图片大于或等于给定的limit值则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转换为base64
            {test:/\.(ttf|woff2|svg|eot|woff)$/,use:'url-loader' },//这是处理字体文件的loader
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},//这是babel来转换高级的ES语法
            {test:/\.vue$/,use:"vue-loader"}, //处理 .vue文件的loader
        ]
    },
    resolve:{
        alias:{//修改vue被导入时候的包路径
            // "vue$":"vue/dist/vue.js"
        }
    }

}