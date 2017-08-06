'use strict';

const child_process = require('child_process');

module.exports = (editor, savePath) => {
    child_process.spawn(editor, [savePath], { stdio: 'inherit' });
};

