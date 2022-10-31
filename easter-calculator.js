#!/Users/fran/.nvm/versions/node/v16.17.0/bin/node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Easter Calculator
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🐰
// @raycast.argument1 { "type": "text", "placeholder": "Year" }

// Documentation:
// @raycast.description Calculate Easter for input year
// @raycast.author Fran Grgić
// @raycast.authorURL https://github.com/fgrgic

const inputYear = process.argv.slice(2)[0];

const getEaster = (year) => {
  const G = year % 19;
  const C = Math.floor(year / 100);

  const H =
    (C - Math.floor(C / 4) - Math.floor((8 * C + 13) / 25) + 19 * G + 15) % 30;

  const I =
    H -
    Math.floor(H / 28) *
      (1 -
        Math.floor(H / 28) *
          Math.floor(29 / (H + 1)) *
          Math.floor((21 - G) / 11));

  const J = (year + Math.floor(year / 4) + I + 2 - C + Math.floor(C / 4)) % 7;

  const L = I - J;

  const month = 3 + Math.floor((L + 40) / 44);
  const day = L + 28 - 31 * Math.floor(month / 4);

  return [month, day];
};

const [month, day] = getEaster(inputYear);

console.log("Easter is on " + day + "." + month + "." + inputYear);
