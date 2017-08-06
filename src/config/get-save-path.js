'use strict';

module.exports = () => {
    return process.env.NOTE_SAVE_PATH || process.cwd();
};
