import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "section",
    message: "What section are you on?",
  },
  {
    type: "input",
    name: "start",
    message: "What is the start of the range?",
  },
  {
    type: "input",
    name: "end",
    message: "What is the end of the range?",
  },
];

inquirer.prompt(questions).then((answers) => {
  for (let i = answers.start; i <= answers.end; i++) {
    console.log("Complete Section " + answers.section + " " + i);
  }
});
