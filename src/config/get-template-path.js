'use strict';

const path = require('path');

module.exports = () => {
    return process.env.NOTE_TEMPLATE_PATH || path.join(__dirname, '..', '..','templates');
};
