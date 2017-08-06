'use strict';

const path = require('path');

module.exports = () => {
    return process.env.NOTE_TEMPLATE_SUFFIX || '.md.ejs';
};
