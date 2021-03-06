var gulp = require('gulp')
var uglify = require('gulp-uglify')
var htmlmin = require('gulp-htmlmin')
var cssmin = require('gulp-clean-css')
var concat = require('gulp-concat')
var less = require('gulp-less')
var revAppend = require('gulp-rev-append')
var imgmin = require('gulp-imagemin')
var pngquant = require('imagemin-pngquant')
var cache = require('gulp-cache')
var runSequence = require('run-sequence')
var browserSync = require('browser-sync')
var connect = require('gulp-connect')

//要操作的子项目名（数组），若数组为空，则打包所有项目
var fileArr = [
// 'cardDraw',
// 'exchangeStore',
// 'registerCards',
// 'christmasActivity',
// 'registerCards',
// 'ChangWanTing',
// 'chessRoom',
// 'park',
// 'starLand',
// 'movieGame',
'toKeepStayTips',
// 'Order_ChangWanTing',
// 'YuanDanActive',
// 'snowBallFight',
// 'LaBaActive',
// 'gameDetail',
// 'hallUpdateTipsWin',
// 'loadingPage',
// 'newSpringDaLianHuan',
// 'HanJiaDaFangSong',
// 'rankingList',
]
//服务器IP
var serverIP = '127.0.0.1:3000'

var projectsName = ''
fileArr.length || (projectsName = '*')
fileArr.length && fileArr.forEach((item, index) => {
  !index && (projectsName += '{')
  projectsName += item + ','
  if(index === fileArr.length - 1)
    projectsName += '}'
  // else
    // projectsName += ','
})

//默认任务
gulp.task('default', function(){
  console.log('\n')
  console.log('*******请按以下命令操作*******\n')
  console.log('gulp run \t-> 启动本机测试服务器，并监听文件自动编译（仅单个项目有效）')
  console.log('gulp watch \t-> 监听less/css/js文件自动编译输出')
  console.log('gulp build \t-> 输出发布包')
  console.log('\n')
})

//启动watch监听自动更新
gulp.task('watch', function(){
  gulp.watch('src/**/*.{less,js,html,jsp}', ['build'])
})

// //connect服务器
// gulp.task('run', function(){
//   if(fileArr[0] && fileArr.length === 1){
//     // runSequence('build')
//     var options = {
//       root: 'src/' + fileArr[0] + '/',
//       ip: serverIP,
//       livereload: true
//     }
//     connect.server(options)
//   }else{
//     console.log('\n启动服务器失败：仅支持单个项目！\n')
//   }
// })

//bowserSync服务器
gulp.task('run', function(){
  if(fileArr[0] && fileArr.length === 1){
    var options = {
      server: {
        baseDir: 'src/' + fileArr[0]
      }
    }
    runSequence('build')
    browserSync(options)
    runSequence('watch')
  }else{
    console.log('\n错误：无法搭建服务器，仅支持单个项目！\n')
  }
})

//输出发布包
//['htmlmin', 'uglify', 'cssmin', 'less', 'imgmin']
gulp.task('build', function(){
  runSequence('less', ['uglify', 'cssmin', 'imgmin'], 'htmlmin')
})

//压缩html
gulp.task('htmlmin', function (event) {
  var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  }
  gulp.src('src/' + projectsName + '/index.html')
  .pipe(htmlmin(options))
  .pipe(revAppend())
  .pipe(gulp.dest('dist'))
  gulp.src('src/' + projectsName + '/*.jsp')
  .pipe(gulp.dest('dist'))
})

//压缩js
gulp.task('uglify', function(){
  var options = {
    mangle: true,//类型：Boolean 默认：true 是否修改变量名
    // mangle: {except: ['require' ,'exports' ,'module' ,'$']},//排除混淆关键字
    compress: true,//类型：Boolean 默认：true 是否完全压缩
    // preserveComments: 'none' //保留所有注释【测试该属性报错】
  }
  gulp.src('src/' + projectsName + '/**/*.js')
  // .pipe(concat('main.js')) //合并多个js文件
  .pipe(uglify(options))
  .pipe(gulp.dest('dist'))
})

//压缩css
gulp.task('cssmin', function(){
  var options = {
    advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
    // compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式；'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
    keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]【实测无效】
    keepSpecialComments: '*',//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
  }
  gulp.src('src/' + projectsName + '/css/*.css')
  .pipe(cssmin(options))
  .pipe(gulp.dest('dist'))
})

//less转化
gulp.task('less', function(){
  gulp.src('src/' + projectsName + '/css/*.less')
  .pipe(less())
  .pipe(cssmin())
  .pipe(gulp.dest('src'))
  .pipe(gulp.dest('dist'))
})

//图片压缩
gulp.task('imgmin', function(){
  var options = {
    optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）【压缩程度小，体积变化小，保真度高】【没啥用】
    progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片【没啥用】
    svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
    interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
    multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
    use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
  }
  gulp.src('src/' + projectsName + '/img/*.{png,jpg,ico,gif,svg}')
  // .pipe(imgmin(options)) //所有图片完整重新压缩
  .pipe(cache(imgmin(options))) //同名图片不压缩，从缓存中获取已压缩图片
  .pipe(gulp.dest('dist'))
})