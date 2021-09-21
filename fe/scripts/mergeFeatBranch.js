#!/usr/bin/env node

const child_process = require("child_process");

async function exec(command) {
  return new Promise((resolve, reject) => {
    child_process.exec(command, (err, stdout, stderr) => {
      console.log(stdout);
      if (stderr || err) console.log(err, stderr);
      resolve();
    });
  });
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function readLineSync(hint) {
  return new Promise((resolve, reject) => {
    readline.question(hint, (res) => {
      resolve(res);
      readline.close();
    });
  });
}

(async function () {
  const name = await readLineSync(`Enter name of branch to be merged to DEV: `);

  console.log(`\n### commit ${name} ###\n`);
  await exec("git add .");
  await exec("git commit -m 'merge to dev'");

  console.log("\n### switch to DEV ###\n");
  await exec("git switch dev");

  console.log(`\n### merge ${name} to DEV ###\n`);
  await exec(`git merge ${name} --no-ff`);

  console.log(`\n### delete branch: ${name} ###\n`);
  await exec(`git branch -D ${name}`);

  console.log("\n\n# # # # # # # # # # # #");
  console.log("#       ALL DONE      #");
  console.log("# # # # # # # # # # # #");
})();
