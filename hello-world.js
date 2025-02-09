#!/Users/fran/.nvm/versions/node/v20.7.0/bin/node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Hello World
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 👋
// @raycast.argument1 {"optional": true, "type": "text", "placeholder": "name" }

// Documentation:
// @raycast.description Say hello world
// @raycast.author Fran Grgić
// @raycast.authorURL https://github.com/fgrgic

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const myArgs = process.argv.slice(2);
const capitalizedName = capitalizeFirstLetter(myArgs[0] ?? "World");

console.log(`Hello, ${capitalizedName}!`);
