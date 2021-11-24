
import '../index.js';

var foo = undefined;
if (foo.length > 0) {
    console.log(foo.bar + "!");
}


// TypeError: Cannot read properties of undefined (reading 'length')
//     at file:///home/aaron/dev/help-me/test/test3.js:5:9
//     at ModuleJob.run (node:internal/modules/esm/module_job:183:25)
//     at async Loader.import (node:internal/modules/esm/loader:178:24)
//     at async Object.loadESM (node:internal/process/esm_loader:68:5)
//     at async handleMainPromise (node:internal/modules/run_main:63:12)

// Found 5 possible answer(s) on Stackoverflow:
// ==================================================================================================
//   Tags:            angular, typescript
//   Title:           TypeError: Cannot read properties of undefined
//   Creation:        2021-09-15 14:07:09, Last activity: 2021-09-15 14:49:28
//   Answered:        true, answers: 1, views: 822
//   Question link:   https://stackoverflow.com/questions/69194715/typeerror-cannot-read-properties-of-undefined
// ==================================================================================================
//   Tags:            reactjs, material-ui
//   Title:           &#215; TypeError: Cannot read properties of undefined (reading &#39;map&#39;)
//   Creation:        2021-09-06 21:56:50, Last activity: 2021-11-19 04:15:05
//   Answered:        true, answers: 8, views: 106783
//   Question link:   https://stackoverflow.com/questions/69080597/%c3%97-typeerror-cannot-read-properties-of-undefined-reading-map
// ==================================================================================================
//   Tags:            angular, angularjs, typescript, karma-jasmine
//   Title:           TypeError: Cannot read properties of undefined (reading &#39;id&#39;)
//   Creation:        2021-08-27 21:43:39, Last activity: 2021-11-02 16:25:17
//   Answered:        true, answers: 2, views: 151689
//   Question link:   https://stackoverflow.com/questions/68959632/typeerror-cannot-read-properties-of-undefined-reading-id
// ==================================================================================================
//   Tags:            jquery
//   Title:           Uncaught TypeError: Cannot read properties of undefined
//   Creation:        2021-09-20 00:19:01, Last activity: 2021-09-21 11:41:16
//   Answered:        true, answers: 2, views: 231
//   Question link:   https://stackoverflow.com/questions/69247996/uncaught-typeerror-cannot-read-properties-of-undefined
// ==================================================================================================
//   Tags:            javascript, reactjs, mobx
//   Title:           mobX: TypeError: Cannot read properties of undefined
//   Creation:        2021-09-07 23:50:46, Last activity: 2021-09-08 09:30:00
//   Answered:        true, answers: 2, views: 154
//   Question link:   https://stackoverflow.com/questions/69095572/mobx-typeerror-cannot-read-properties-of-undefined
// ==================================================================================================
