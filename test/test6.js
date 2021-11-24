// I find this a ha-ha test

import "../index.js";
require("../index.js");


// ReferenceError: require is not defined in ES module scope, you can use import instead
// This file is being treated as an ES module because it has a '.js' file extension and '/home/aaron/dev/help-me/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///home/aaron/dev/help-me/test/test6.js:4:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:183:25)
//     at async Loader.import (node:internal/modules/esm/loader:178:24)
//     at async Object.loadESM (node:internal/process/esm_loader:68:5)
//     at async handleMainPromise (node:internal/modules/run_main:63:12)

// Found 1 possible answer(s) on Stackoverflow:
// ====================================================================================================================
//   Tags:            javascript, sass, gulp, gulp-sass
//   Title:           ReferenceError: require is not defined in ES module scope, you can use import instead gulp sass
//   Creation:        2021-09-08 08:41:52, Last activity: 2021-11-18 16:22:21
//   Answered:        true, answers: 2, views: 2318
//   Question link:   https://stackoverflow.com/questions/69099763/referenceerror-require-is-not-defined-in-es-module-scope-you-can-use-import-in
// ====================================================================================================================
