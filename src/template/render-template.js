'use strict';

const ejs = require('ejs');

module.exports = (template, data) => {
    return ejs.render(template, data);  
};
