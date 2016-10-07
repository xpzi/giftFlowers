	// 引入 gulp 工具
    var gulp = require('gulp');
    var webserver = require('gulp-webserver');

    // 引入 scss 预处理 模块  
    var sass = require('gulp-sass');
    var minifyCSS = require('gulp-minify-css' );
    
    //引入 js 模块化工具
    var named = require('vinyl-named' );
    var webpack = require('gulp-webpack');
    var uglify = require('gulp-uglify');
    
	//引入 URL模块
	var fs = require('fs');
	var url = require('url');
	
    var rev = require('gulp-rev');
	var revCollevtor = require('gulp-rev-collector');
	var sequence = require('gulp-sequence');
	
	//配置server 
    gulp.task('webserver', function(){
        gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 80,
            directoryListing:{
                enable: true,
                path: './'
            },
            livereload: true,
            middleware: function(req, res , next){
            	var urlObj = url.parse( req.url, true);
            	switch(urlObj.pathname){
            		case '/api/list.php':
            			res.setHeader('Content-Type', 'application/json');
            			fs.readFile('./mock/cake.json', function(err, data){
            				res.end(data);
            			});
            			return;
            		case '/api/cake/shanghai.php':
                     res.setHeader('Content-Type', 'application/json');
                        fs.readFile('./mock/shanghai.json', function(err, data){
                            res.end(data);
                        });
            			return;
            		case '/api/gift':
            			// ...
                          res.setHeader('Content-Type', 'application/json');
                        fs.readFile('./mock/gift.json', function(err, data){
                            res.end(data);
                        });
            			return;
            	}
            	next();
            }
        }))
    });
	
	//css 预处理
    var cssFiles = [
        './src/styles/usage/page/*.scss',
    ];
    gulp.task('scss', function(){
        gulp.src(cssFiles)
            .pipe( sass().on('error', sass.logError ) )
//          .pipe(minifyCSS())
            .pipe( gulp.dest('./build/prd/styles/'));
    });
    

    // js 模块化 ，合并，压缩
    var jsFiles = [
   		'./src/scripts/*.js',
    ];
    gulp.task('packjs', function(){
    	gulp.src(jsFiles)
    		.pipe(named())
    		.pipe(webpack({
    			output: {
    				filename: '[name].js'
    			},
    			module:{
    				loaders:[{
    					test: /\.js$/ ,
    					loader: 'imports?define=>false',
//  					exclude: './src/scripts/libs/zepto.js' //忽略zepto.js的引用
    				},{
    					test:/(\.html|\.string)$/,
    					loader: 'string'
    				}]
    			}
    		}))
    		.pipe(gulp.dest('./build/prd/scripts/'));
    });
    
    //拷贝 *.html 到 build 文件夹
    gulp.task('copy-html', function(){
        gulp.src('./*.html')
            .pipe(gulp.dest('./build/')) // 相对于            
    });
    
    // 拷贝 images 到 build 文件夹
    gulp.task('copy-images' ,function(){
        gulp.src('./img/**/*')
            .pipe( gulp.dest('./build/images/'));
    })
    
    
    gulp.task('watch' , function(){
    	gulp.watch('./*.html',['copy-html']);
    	gulp.watch('./img/**/*',['copy-images']);
    	gulp.watch('./src/styles/**/*', ['scss']);
    	gulp.watch('./src/scripts/**/*', ['packjs']);
    });
    
    
    // 配置 default 任务， 执行任务队列
    gulp.task('default', ['watch', 'webserver'], function(){
        console.log("任务队列执行完毕");
    })