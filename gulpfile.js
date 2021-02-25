const { src, dest, series } = require('gulp');
const { writeFile } = require('fs/promises');
const del = require('del');
const $ = require('gulp-load-plugins')();

// Utility to ignore Node modules and Bower components
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!**/REMOVE{,/**}',
    '!node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store',
  ]);
}

// JavaScript and JSON linter
const lint = () => {
  return src(addDefSrcIgnore(['**/*.js', '*.json']), { dot: true })
    .pipe($.eslint({ dotfiles: true }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
};

// Clean previous build
const clean = async () => {
  try {
    await del('dist');
  } catch (err) {
    console.error(err); //eslint-disable-line no-console
  }
};

// Remove solutions from exercises
const removeSolutions = () => {
  return src(addDefSrcIgnore(['**']), { dot: true })
    .pipe(
      $.replace(/^\s*(\/\/|<!--|\/\*)\s*REMOVE-START[\s\S]*?REMOVE-END\s*(\*\/|-->)?\s*$/gm, '')
    )
    .pipe(dest('dist'));
};

// Prepare for distribution to students
const removeMaster = async () => {
  try {
    let npmConfig = require('./package.json');
    npmConfig = JSON.stringify(npmConfig, null, 2).replace(/-master/g, '');
    await writeFile('dist/package.json', npmConfig);
  } catch (err) {
    console.error(err); //eslint-disable-line no-console
  }
};

exports.lint = lint;
exports.dist = series(lint, clean, removeSolutions, removeMaster);
