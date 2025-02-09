#!/Users/fran/.nvm/versions/node/v20.7.0/bin/node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Calculate BMI
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon ⚖️
// @raycast.argument1 { "type": "text", "placeholder": "Height (cm)" }
// @raycast.argument2 { "type": "text", "placeholder": "Weight (kg)" }

// Documentation:
// @raycast.description Calculate your BMI
// @raycast.author Fran Grgić
// @raycast.authorURL https://github.com/fgrgic

const arguments = process.argv.slice(2);
const height = arguments[0];
const weight = arguments[1];

if (!height || !weight) {
  console.log("Please provide height and weight");
  process.exit(1);
}

const bmi = weight / (height / 100) ** 2;
const roundedBmi = Math.round(bmi * 100) / 100;

console.log(`Your BMI is ${roundedBmi}`);

//calculate how much weight you should lose to get to normal weight
const lowerNormalWeight = 18.5 * (height / 100) ** 2;
const upperNormalWeight = 25 * (height / 100) ** 2;
const weightToLose = weight - upperNormalWeight;
const roundedWeightToLose = Math.round(weightToLose * 100) / 100;
const weightToGain = lowerNormalWeight - weight;
const roundedWeightToGain = Math.round(weightToGain * 100) / 100;

if (bmi < 18.5) {
  console.log("You are underweight");
  console.log(
    "You should gain " +
      roundedWeightToGain +
      " kg to make your BMI at least 18.5 weighing " +
      Math.round(lowerNormalWeight * 100) / 100 +
      " kg"
  );
} else if (bmi < 25) {
  console.log("You are normal weight");
} else if (bmi < 30) {
  console.log("You are overweight");
  console.log(
    "You should lose " +
      roundedWeightToLose +
      " kg to make your BMI at most 25 weighing " +
      Math.round(upperNormalWeight * 100) / 100 +
      " kg"
  );
} else {
  console.log("You are obese");
  console.log(
    "You should lose " +
      roundedWeightToLose +
      " kg to make your BMI at most 25 weighing " +
      Math.round(upperNormalWeight * 100) / 100 +
      " kg"
  );
}
