const fs = require("fs")
const chalk = require("chalk")

global.owner = ["917594898804"]
global.mode = false 

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
