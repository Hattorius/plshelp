
import '../index.js';

var foo = null;
if (foo.length > 0) {
    console.log(foo.bar + "!");
}


// TypeError: Cannot read properties of null (reading 'length')
//     at file:///home/aaron/dev/help-me/test/test4.js:5:9
//     at ModuleJob.run (node:internal/modules/esm/module_job:183:25)
//     at async Loader.import (node:internal/modules/esm/loader:178:24)
//     at async Object.loadESM (node:internal/process/esm_loader:68:5)
//     at async handleMainPromise (node:internal/modules/run_main:63:12)

// Found 5 possible answer(s) on Stackoverflow:
// ===========================================================================================================
//   Tags:            javascript, django, web
//   Title:           Uncaught TypeError: Cannot read properties of null
//   Creation:        2021-09-24 18:48:19, Last activity: 2021-09-25 07:56:51
//   Answered:        true, answers: 1, views: 164
//   Question link:   https://stackoverflow.com/questions/69319843/uncaught-typeerror-cannot-read-properties-of-null
// ===========================================================================================================
//   Tags:            discord.js
//   Title:           TypeError: Cannot read properties of null (reading &#39;id&#39;)
//   Creation:        2021-09-14 02:10:30, Last activity: 2021-09-14 05:11:05
//   Answered:        true, answers: 2, views: 2297
//   Question link:   https://stackoverflow.com/questions/69171008/typeerror-cannot-read-properties-of-null-reading-id
// ===========================================================================================================
//   Tags:            reactjs, next.js, node-modules
//   Title:           TypeError: Cannot read properties of null (reading &#39;suppressHydrationWarning&#39;)
//   Creation:        2021-09-16 16:50:31, Last activity: 2021-09-16 16:50:31
//   Answered:        false, answers: 0, views: 546
//   Question link:   https://stackoverflow.com/questions/69212292/typeerror-cannot-read-properties-of-null-reading-suppresshydrationwarning
// ===========================================================================================================
//   Tags:            highcharts
//   Title:           TypeError: Cannot read properties of null (reading &#39;0&#39;)
//   Creation:        2021-09-15 13:18:36, Last activity: 2021-09-16 07:52:42
//   Answered:        true, answers: 1, views: 1777
//   Question link:   https://stackoverflow.com/questions/69193959/typeerror-cannot-read-properties-of-null-reading-0
// ===========================================================================================================
//   Tags:            angular, typescript, firebase, firebase-realtime-database, angularfire
//   Title:           TypeError: Cannot read properties of null (reading &#39;quantity&#39;)
//   Creation:        2021-10-21 07:52:26, Last activity: 2021-10-22 07:40:49
//   Answered:        false, answers: 1, views: 317
//   Question link:   https://stackoverflow.com/questions/69657983/typeerror-cannot-read-properties-of-null-reading-quantity
// ===========================================================================================================
