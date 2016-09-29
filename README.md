# giftFlowers
花礼网

> 目录说明



```
//项目说明

index.html 首页入口

access 开发时 入口文件的目录  （...为方便开发...）
	
	cake： 蛋糕分支的目录
	
	flower： 鲜花分支的目录
	
	other： 其他功能的 目录
	
build  项目发布目录（ 发布时，只要build文件夹里边的内容  ）
	index.html 		首页
	cake/ 			蛋糕
	flower/			鲜花
	other/			其它
	
	api/...			里面存放 mock数据里的json文件： 通过ajax 模拟真实接口数据
		
	prd/
		libs/		插件目录( 包含不常改变的打包后的js和css )
		scripts/	项目打包后的js目录
		styles/		项目打包后的css目录
	
	images/			存放图片字体等资源文件
```
mock	mock数据的json文件目录

> src		开发目录

```
	scripts/	js目录
		libs/		 要编译的 插件
		utils/		基础公共方法js文件夹
		page/		js入口
		
		moudle/		js模块
			cake/		蛋糕模版	
			flower/		鲜花模版
			other/		其他
			
		tpls/		模版目录  后缀  .html 或  .string
			cake/		蛋糕模版	
			flower/		鲜花模版
			other/		其他
			
		
		
		
		
	styles/		css目录
		lib/		需要编译的css插件		
		usage/		项目scss文件夹
			core/		公用scss
			module/		scss模快
				cake/		蛋糕模版	
				flower/		鲜花模版
				other/		其他
				
			page/		scss入口 目录
		
		
		
```
