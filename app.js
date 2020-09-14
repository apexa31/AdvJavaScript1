/**Name: - Apexa Mistry
 * Date: - 14/09/2020
 * Purpose: - Advance JavaScript Ex1
 */


//Show the current directory
let currentDir = `Current dir: ${__dirname}`;
console.log(currentDir);

//Show the name and path of the current file
let fileAndDir = `File name with full path ${__filename}`;
console.log(fileAndDir);

const path = require('path');

//show the file name only
let fileNameOnly = `File name only ${path.basename(__filename)}`;
console.log(fileNameOnly);

