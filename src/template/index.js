'use strict';

// Internal deps
const getTemplate       = require('./get-template');
const renderTemplate    = require('./render-template');

module.exports = (conf) => {
    return renderTemplate(getTemplate(conf.template, conf.templatePath, conf.templateSuffix), conf);
};
