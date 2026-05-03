#!/Users/fran/.nvm/versions/node/v24.15.0/bin/node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title isplata-dobiti
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 💸
// @raycast.argument1 {"type": "text", "placeholder": "bruto ili neto" }

// Documentation:
// @raycast.description izračunaj neto → bruto i bruto → neto
// @raycast.author fgrgic
// @raycast.authorURL https://frangrgic.com

const argument = process.argv.slice(2);
let raw = String(argument[0] ?? "")
  .trim()
  .replace(/\s/g, "");
if (raw.includes(",") && raw.includes(".")) {
  raw =
    raw.lastIndexOf(",") > raw.lastIndexOf(".")
      ? raw.replace(/\./g, "").replace(",", ".")
      : raw.replace(/,/g, "");
} else {
  raw = raw.replace(",", ".");
}
const inputAmount = parseFloat(raw);

if (isNaN(inputAmount)) {
  console.log("Please provide a valid amount");
  process.exit(1);
}

const tax = 0.12; // 12% tax

// gross2net
const gross2net = {
  grossAmount: inputAmount,
  taxAmount: inputAmount * tax,
  netAmount: inputAmount - inputAmount * tax,
};

// net2gross
const net2gross = {
  netAmount: inputAmount,
  grossAmount: inputAmount / (1 - tax),
  taxAmount: (inputAmount / (1 - tax)) * tax,
};

console.log("BRUTO → NETO");
console.log("Bruto: ", gross2net.grossAmount.toFixed(2));
console.log("Neto: ", gross2net.netAmount.toFixed(2));
console.log("Porez: ", gross2net.taxAmount.toFixed(2));
console.log("--------------------------------");
console.log("");
console.log("NETO → BRUTO");
console.log("Bruto: ", net2gross.grossAmount.toFixed(2));
console.log("Porez: ", net2gross.taxAmount.toFixed(2));
console.log("Neto: ", net2gross.netAmount.toFixed(2));
