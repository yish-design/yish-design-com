/**
 * 2016年04月29日10:51:34
 * Julian
 */
import gulp         from 'gulp';
import uglify       from 'gulp-uglify';
import sass         from 'gulp-sass';
import prefix       from 'gulp-autoprefixer';
import rename       from 'gulp-rename';
import minifycss    from 'gulp-minify-css';

import concat       from 'gulp-concat';
import notify       from 'gulp-notify';
import babel        from 'gulp-babel';
import browserSync  from 'browser-sync';
import saveLicense  from 'uglify-save-license';

import header       from 'gulp-header';
import pkg          from './package.json';

const  reload  = browserSync.create().reload;
const buildSrc = './build/';
const minjs = 'app.js';

const proCss = '/Users/julaud/www/php/mantou/yish/mantob/statics/zanjs/build/css/';
const proJs = '/Users/julaud/www/php/mantou/yish/mantob/statics/zanjs/build/js/';

const banner = [
  '/*! ',
    '<%= pkg.name %> ',
    'v<%= pkg.version %> | ',
    `(c) ${new Date()} <%= pkg.author %> |`,
    ' <%= pkg.homepage %>',
  ' */',
  '\n'
].join('');


gulp.task('sass', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
        .pipe(rename('app.css'))
		.pipe(minifycss())
        .pipe(header(banner, { pkg }))
        .pipe(gulp.dest('./build/css/'))
        .pipe(gulp.dest(proCss))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts',() => {
    return gulp.src('./src/js/*.js')
        .pipe(concat(minjs))
        .pipe(gulp.dest('./.tmp/js'))
        .pipe(uglify())
         .pipe(header(banner, { pkg }))
        .pipe(gulp.dest(buildSrc+'/js/'))
        .pipe(gulp.dest(proJs))
        .pipe(browserSync.reload({stream:true}))
        .pipe(notify("Found file: <%= file.relative %>!"));
});


gulp.task('watch', () => {

    // browserSync.init({
    //     server: './'
    // });
    
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
    
    gulp.watch('./src/scss/**', ['sass']);
    // 看守所有.js档
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./*.html',['scripts']);
    
});


gulp.task('default', ['scripts','sass','watch'], () => {});