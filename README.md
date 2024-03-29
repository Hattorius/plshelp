# plshelp
Plshelp is a javascript module that directly searches Stackoverflow for answers when you get an error. WITH TYPESCRIPT SUPPORT..

### What does it do?

![Example output](https://i.imgur.com/yc6Nc3T.gif)

It shows the 5 most relevant questions to your error, code with ease.

### Installation

Yarn

```shell
yarn add -D plshelp
```

NPM

```shell
npm install --save-dev plshelp
```

### Usage

Include the package to your code, and it'll start listening for uncaught exceptions:

```js
import "plshelp";
// OR
require("plshelp")
```

Nothing else is needed!
<small>If you come across any bugs, please create an issue</small>

The Stackoverflow API let's you make 300 requests a day, if you get over that you're a ficking beast.

### Inspiration

I created this module after seeing the following meme on Reddit:
![meme](https://i.imgur.com/eU1aY8e.png)





<small>Made by me: https://xlogic.sh/</small>
