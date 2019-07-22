'use strict';

const fs = require('fs-jetpack');
const path = require('path');
const inline = require('inline-css');
const paths = require('../paths');

// There is a known issue where JavaScript coverage reports
// have their CSS removed when they're uploaded during builds
// via VSTS. This inlines the CSS of the HTML coverage output
// so that the report displays properly within the final Build Report
// https://github.com/Microsoft/vsts-tasks/issues/3027
const files = fs.find(paths.coverage, { matching: '*.html' });
files.forEach(filePath => {
  let options = {
    url: 'file://' + path.resolve(filePath),
    extraCss:
      '.wrapper {height: initial;} .clearfix { display: inline-block; } table {width: 1px;} .cline-any, .line-count {font-size: 12px;line-height: 16px;}'
  };

  const data = fs.read(path.resolve(filePath));
  inline(data, options)
    .then(html => {
      let outputFile = path.resolve(filePath);
      fs.write(outputFile, html);
    })
    .catch(err => {
      console.log(err);
    });
});
