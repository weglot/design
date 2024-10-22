// The purpose of this script is to copy fonts from material-icons npm passage to jekyll build directory
// in order to avoid 404 when serving documentation.

const fs = require('fs');
const path = require('path');

function ensureDirExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, {recursive: true}); // recursive option creates parent directories if needed
    }
}

ensureDirExistence('docs/assets/css/material-icons.woff');
fs.copyFile(
    'node_modules/material-icons/iconfont/material-icons.woff',
    'docs/assets/css/material-icons.woff',
    (err) => {
        if (err) throw err;
        console.log('File material-icons.woff was copied to destination');
    }
);

fs.copyFile(
    'node_modules/material-icons/iconfont/material-icons.woff2',
    'docs/assets/css/material-icons.woff2',
    (err) => {
        if (err) throw err;
        console.log('File material-icons.woff2 was copied to destination');
    }
);
