const fs = require("fs");
const path = require("path");

function walk(baseDir) {
  const names = fs.readdirSync(baseDir);
  names
    .map((n) => path.join(baseDir, n))
    .forEach((fName) => {
      const state = fs.statSync(fName);
      if (state.isFile()) {
        if (!fName.endsWith(".vue")) return;
        console.log(fName);
        const content = fs.readFileSync(fName, "utf8");

        const replacedPX = content.replace(
          /:(.*?)(\d+)px(.*?);/g,
          (match, $1, n, $2) => {
            const number = parseFloat(n);
            if (number < 4) return match;
            return `:${$1}${(number / 16).toPrecision(2)}rem${$2};`;
          }
        );
        fs.writeFileSync(fName, replacedPX);
      } else if (state.isDirectory()) {
        walk(fName);
      }
    });
}

walk("../src");
