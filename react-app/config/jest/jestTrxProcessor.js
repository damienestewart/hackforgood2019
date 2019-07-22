// This is a custom Jest processor to output a .TRX file with the
// test results for integration with the Visual Studio and VSTS
// test reports.
// https://github.com/no23reason/jest-trx-results-processor

const builder = require('jest-trx-results-processor');
const fs = require('fs-jetpack');
const paths = require('../paths');

if (!fs.exists(paths.coverage)) {
  fs.dir(paths.coverage);
}

let processor = builder({
  outputFile: paths.coverage + '/test-results.trx' // this defaults to "test-results.trx"
});

module.exports = processor;