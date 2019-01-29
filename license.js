const exec = require('child_process').exec;
const fs = require('fs');
const outputFilePath = "THIRD_PARTY_LICENSES.txt";

exec('yarn licenses generate-disclaimer --ignore-platform  --ignore-optional --ignore-engines', {maxBuffer: 400*4096}, (err, stdout, stderr)=> {
  if (err || stderr) {
    console.log("execエラー");
    throw err || stderr;
  };

  fs.writeFile(outputFilePath, stdout, (err)=> {
    if (err) {
      console.log("書き込みエラー");
      throw err;
    } else {
      console.log("完了!")
    }
  })
});
