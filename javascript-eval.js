#!/Users/fran/.nvm/versions/node/v16.17.0/bin/node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title JavaScript eval
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ☕️
// @raycast.argument1 {"optional": true, "type": "text", "placeholder": "!!true" }

// Documentation:
// @raycast.description Evaluate a JavaScript command
// @raycast.author Fran Grgic
// @raycast.authorURL @fgrgic

const myArgs = process.argv.slice(2);

console.log(eval(myArgs[0] ?? "true"));
