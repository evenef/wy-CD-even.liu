var gulp = require('gulp'),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-htmlmin'),
cssmin = require('gulp-clean-css'),
concat = require('gulp-concat')

//要操作的子项目名（数组），若数组为空，则打包所有项目
var fileArr = [
'christmasActivity',
// 'exchangeStore',
// 'movieGame',
// 'registerCards',
]

var projectsName = ''
fileArr.length || (projectsName = '*')
fileArr.length && fileArr.forEach((item, index) => {
  !index && (projectsName += '{')
  projectsName += item + ','
  if(index === fileArr.length - 1)
    projectsName += '}'
  else
    projectsName += ','
})

//默认任务
gulp.task('default', ['build'])

//生成发布包
gulp.task('build', ['htmlmin', 'uglify', 'cssmin'])

//压缩html
gulp.task('htmlmin', function () {
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
  .pipe(gulp.dest('dist'))
})

//压缩js
gulp.task('uglify', function(){
  var options = {
    mangle: true,//类型：Boolean 默认：true 是否修改变量名
    // mangle: {except: ['require' ,'exports' ,'module' ,'$']},//排除混淆关键字
    compress: true,//类型：Boolean 默认：true 是否完全压缩
    // preserveComments: 'none' //保留所有注释
  }
  gulp.src('src/' + projectsName + '/js/*.js')
  // .pipe(concat(projectsName))
  .pipe(uglify(options))
  .pipe(gulp.dest('dist'))
})

//压缩css
gulp.task('cssmin', function(){
  var options = {
    advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
    compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式；'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
    keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
    keepSpecialComments: '*',//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
  }
  gulp.src('src/' + projectsName + '/css/*.css')
  .pipe(cssmin())
  .pipe(gulp.dest('dist'))
})