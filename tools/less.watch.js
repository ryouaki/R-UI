const path = require('path');
const chokidar = require('chokidar');
const less = require('less');
const fs = require('fs');

const uri = path.resolve(process.cwd(), 'src');

let watcher = chokidar.watch(uri, {});

watcher.on('error', function(error) {
  console.error(error);
});

watcher.on('change', function(file) {
  if (file) {
    let extname = path.extname(file);
    if (extname !== '.less') {
      return;
    } else {
      let destFile = file.replace(extname, '.css');
      fs.readFile(file, 'utf8', (e, lessInput) => {
        if (e) {
          console.error('err', e);
        }
        less
          .render(lessInput, {
            sourceMap: {},
            paths: ['.', path.dirname(file)]
          })
          .then(output => {
            fs.writeFileSync(destFile, output.css);
          })
          .catch(err => {
            if (err) {
              console.log('err', err);
            }
          })
      });
    }
  }
});