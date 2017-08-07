'use strict';

// External deps
const fs    = require('fs');

module.exports = (rendered, savePath) => {
    if (!fs.existsSync(savePath)) {
        fs.writeFileSync(savePath, rendered);
    } else {
        throw new Error(`The note already exists`);
    }
};
  