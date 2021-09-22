#!/usr/bin/env node

const child_process = require("child_process");

// TODO change script

async function exec(command) {
  return new Promise((resolve, reject) => {
    child_process.exec(command, (err, stdout, stderr) => {
      if (stderr || err) {
        console.log({ err }, { stderr });
        return reject(err || stderr);
      }
      console.log(stdout);
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

<<<<<<< HEAD
  console.log(`\n### commit ${name} ###\n`);
  await exec("git add .").catch((e) => console.log("# error"));
  await exec('git commit -m "merge to dev"').catch((e) =>
    console.log("# error")
  );
=======
  try {
    console.log(`\n### commit ${name} ###\n`);
    await exec("git add .").catch((e) => e);
    await exec('git commit -m "merge to dev"').catch((e) =>
      console.log("### already committed")
    );
  } catch (e) {}
>>>>>>> t

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
