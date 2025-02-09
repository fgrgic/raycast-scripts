#!/Users/fran/.nvm/versions/node/v20.7.0/bin/node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Label Maker
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🏷️
// @raycast.argument1 { "type": "text", "placeholder": "Urgency (1-4)" }
// @raycast.argument2 { "type": "text", "placeholder": "Importance (1-4)" }
// @raycast.argument3 { "type": "text", "placeholder": "Optional: YYYY-MM", "optional": true }


// Documentation:
// @raycast.description Label Maker
// @raycast.author fgrgic
// @raycast.authorURL https://frangrgic.com

// Creating a label from arguments and current date
// Label
// FG-YYYY-MM-URGENCYIMPORTANCECATEGORIES-CONTROLNUMBER
// URGENCY: 1 = Highest, 2 = High, 3 = Medium, 4 = Low
// IMPORTANCE: 1 = Highest, 2 = High, 3 = Medium, 4 = Low
// CATEGORIES: 1 = Productivity, 2 = Creative, 3 = Kitchen, 4 = Bathroom, 5 = Bedroom
// CONTROLNUMBER: 4 digits from 0001 to 9999 generated automatically based on the other numbers
// Doesn't have to have a category, but it could be more than one category.
// For example, 3D Printer:
// FG-2024-12-3212-0001

const { execSync } = require('child_process');

function generateControlNumber(urgency, importance, now) {
  // Convert inputs to numbers and ensure they are within valid ranges
  const u = parseInt(urgency, 10);
  const i = parseInt(importance, 10);

  // Validate inputs
  if (isNaN(u) || u < 1 || u > 4) {
      console.error("Invalid urgency. Must be between 1-4.");
      process.exit(1);
  }
  if (isNaN(i) || i < 1 || i > 4) {
      console.error("Invalid importance. Must be between 1-4.");
      process.exit(1);
  }

  // Generate a deterministic control number based on inputs AND date
  const dateHash = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  const inputHash = (u * 100) + i;
  
  // Combine date and input hashes, ensure it's within 0001-9999 range
  const combinedHash = (dateHash + inputHash) % 9999;
  const controlNumber = Math.max(1, combinedHash).toString().padStart(4, '0');

  return controlNumber;
}

function createLabel(urgency, importance, customDate) {
  // Use provided date or current date
  let now;
  if (customDate) {
    // Validate custom date format
    const dateMatch = customDate.match(/^(\d{4})-(\d{2})$/);
    if (!dateMatch) {
      console.error("Invalid date format. Use YYYY-MM.");
      process.exit(1);
    }
    
    const [, year, month] = dateMatch;
    // Use the 1st of the month to ensure consistent control number generation
    now = new Date(parseInt(year), parseInt(month) - 1, 1, 0, 0, 0);
  } else {
    // Use the predefined date as the default
    now = new Date('2024-12-28T17:09:00+01:00');
  }

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const controlNumber = generateControlNumber(urgency, importance, now);

  const label = `fg-${year}-${month}-${urgency}${importance}-${controlNumber}`;

  return label;
}

// Get arguments from command line
const [urgency, importance, customDate] = process.argv.slice(2);

// Generate and print the label
try {
    const label = createLabel(urgency, importance, customDate);
    
    // Print to console
    console.log(label);
    
    // Copy to clipboard using pbcopy
    execSync(`printf "%s" "${label}" | pbcopy`);
} catch (error) {
    console.error("Error generating label:", error.message);
    process.exit(1);
}
