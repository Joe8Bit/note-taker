'use strict';

const fs = require('fs');

const getTemplateSuffix = require('../config/get-template-suffix');
const getTemplatePath = require('../config/get-template-path');

module.exports = () => {
    return fs.readdirSync(getTemplatePath()).map((file) => {
        return file.replace(getTemplateSuffix(), '');
    });
};
