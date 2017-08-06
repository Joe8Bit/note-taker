'use strict';

const path = require('path');
const fs = require('fs');

module.exports = (selectedTemplate, templatePath, templateSuffix) => {
    let fullTemplatePath = path.join(templatePath, `${selectedTemplate}${templateSuffix}`);
    if (fs.existsSync(fullTemplatePath)) {
        return fs.readFileSync(fullTemplatePath).toString();
    } else {
        throw new Error(`Template "${templateStr}" does not exist`);
    }
};
