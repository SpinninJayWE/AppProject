#这是一个APP项目
#来自Djj

#用(传统方式)命令行把修改后的代表上传到GitHub
1.git add .
2.git commit -m'提交备注'
3.使用git push


##制作首页App组件
1.完成header区域 使用的是mint-UI的header组件
2.制作底部的tabbar区域，使用的是mui的tabbar 代码块
3.要在中间区域放置一个 router-view  来展示路由匹配到的组件

##改造tabbar 为router-link  

##设置路由高亮

##实现tabbar中的路由链接展示对应的路由组件

##制作首页轮播图布局

##加载首页轮播图数据
1.获取数据，如何获取呢  vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据要保存到我们data上
4.使用V-FOR循环渲染每一个item项

##改造九宫格区域样式

##改造 新闻资讯 路由链接

## 新闻资讯 页面制作
1.绘制界面 
2.使用V-resource获取数据
3.渲染数据

##实现 新闻资讯列表点击跳转新闻详情
1.把列表中的每一项改造为router-link，同时在跳转的时候应该提供唯一的ID标识符
2.创建新闻详情的组件页面 newsinfo.vue
3.在路由模块中，将新闻详情的路由地址和组件页面对应

##实现新闻详情 的 页面布局和数据渲染


##单独封装一个 pinglun.vue组件 评论组价
1.先创建一个单独的 pinglun.vue组件模板
2.在需要使用 pinglun的组件的页面中，先导入 pinglun组件
+ 'import pinglun from './pinglun.vue''
3.在父组件中使用 'components' 属性 将刚才导入的 pinglun组件 注册为自己的子组件
4.将注册子组件时候的，注册名称 以标签形式，在页面中引用

##获取所有的评论数据显示到页面中


##实现点击加载更多显示评论的功能
1.为加载更多按钮绑定点击事件，在事件中去请求下一页数据

2.点击加载更多让配置index自增一下 然后重新调用一下this.方法 重新获取最新一页的数据

3.为了防止新数据覆盖了老数据的情况，我们在点击加载更多的时候 每当获取到新数据 应该让老数据调用数组的concat方法拼接上新的数组数据；

4.