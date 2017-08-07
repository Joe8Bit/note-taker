'use strict';

// External deps
const inquirer      = require('inquirer');
const fs            = require('fs');

// Internal deps
const getTemplates  = require('../template/get-templates');
const getSavePath   = require('../config/get-save-path');

const questions = [{
    type: 'input',
    name: 'title',
    message: 'Note title?',
    default: 'Untitled',
    filter: (val) => {
        return val.trim();
    }
}, {
    type: 'input',
    name: 'location',
    message: 'Current location?',
    default: 'Unknown',
    filter: (val) => {
        return val.trim();
    }
}, {
    type: 'input',
    name: 'attendees',
    message: 'Attendees?',
    default: 'Unknown',
    filter: (val) => {
        return val.split(',').map((attendee) => {
            return attendee.trim();
        });
    }
}, {
    type: 'rawlist',
    name: 'template',
    message: 'Template?',
    choices: getTemplates()
}, {
    type: 'input',
    name: 'path',
    message: 'Location?',
    default: getSavePath(),
    validate: (value) => {
        if (fs.existsSync(value)) {
            return true;
        } else {
            throw new Error("That path doesn't seem to exist, please try again");
        }
    }
}];

module.exports = {
    start: () => {
        return inquirer.prompt(questions);
    },
    config: questions
};
