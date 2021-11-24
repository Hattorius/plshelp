# help-me
Help me is a node/typescript module that directly searches Stackoverflow for answers when you get an error. WITH TYPESCRIPT SUPPORT..

### What does it do?

![Example output](https://i.imgur.com/xBKHjr9.gif)

It shows the 5 most relevant questions to your error, Code with ease.

### Installation

Yarn

```shell
yarn add -D https://github.com/Hattorius/help-me.git
```

NPM

```shell
npm install --save-dev https://github.com/Hattorius/help-me.git
```

### Usage

Include the package to your code, and it'll start listening for uncaught exceptions:

```js
import "help-me";
// OR
require("help-me")
```

Nothing else is needed!
<small>If you come across any bugs, please create an issue</small>

The Stackoverflow API let's you make 300 requests a day
