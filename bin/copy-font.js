const fs = require('fs');
const path = require('path');

// Get basePath from command-line arguments or default to 'docs'
const basePath = process.argv[2] || 'docs/';

function ensureDirExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

const destinationWoff = path.join(basePath, 'assets/css/material-icons.woff');
const destinationWoff2 = path.join(basePath, 'assets/css/material-icons.woff2');
// Ensure the directory exists and copy the files
ensureDirExistence(destinationWoff);
fs.copyFile(
    'node_modules/material-icons/iconfont/material-icons.woff',
    destinationWoff,
    (err) => {
        if (err) throw err;
        console.log(`File material-icons.woff was copied to ${destinationWoff}`);
    }
);

fs.copyFile(
    'node_modules/material-icons/iconfont/material-icons.woff2',
    destinationWoff2,
    (err) => {
        if (err) throw err;
        console.log(`File material-icons.woff2 was copied to ${destinationWoff2}`);
    }
);
