'use strict';

// External deps
const moment            = require('moment');

// Internal deps
const getArgv           = require('./get-argv');
const getSavePath       = require('./get-save-path');
const getTemplatePath   = require('./get-template-path');
const getTemplateSuffix = require('./get-template-suffix');
const getEditor         = require('./get-editor');

// Internal state
let config = {
    commandLineArgs:    getArgv(process.argv.slice(2)),
    savePath:           getSavePath(),
    templatePath:       getTemplatePath(),
    editor:             getEditor(),
    templateSuffix:     getTemplateSuffix()
};

const hydrateConfigData = (cliOutput) => {
    let conf = Object.assign(config, cliOutput);

    conf.timestamp = moment().format('MMM Do YYYY [@] H:mm');
    conf.fileName = `${conf.timestamp} - ${config.title}.md`;

    return conf;
};

module.exports = hydrateConfigData;
