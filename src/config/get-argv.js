'use strict';

module.exports = () => {
    return require('minimist')(process.argv.slice(2));
};
