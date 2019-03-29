const ClosureCompiler = require('google-closure-compiler').compiler;

const closureCompiler = new ClosureCompiler({
  js: ['index.js'],
  module_output_path_prefix: 'closure_output/dist/',
  language_in: 'ECMASCRIPT5',
  language_out: 'ECMASCRIPT5',
  compilation_level: 'ADVANCED',
  externs: ["tslib.extern.js"],
});

const compilerProcess = closureCompiler.run((exitCode, stdOut, stdErr) => {
  //compilation complete
  console.log(stdErr);
  console.log(stdOut);
});
