'use strict';

// Test deps
const test = require('ava').test;

// External deps
const path = require('path');

// Tested code
const getTemplatePath = require('../../../src/config/get-template-path');

test('getTemplatePath should return the NOTE_TEMPLATE_PATH env var if available', (t) => {
    process.env.NOTE_TEMPLATE_PATH = 'foo';

    let templatePath = getTemplatePath();
    t.is(templatePath, process.env.NOTE_TEMPLATE_PATH);

    delete process.env.NOTE_TEMPLATE_PATH;
	t.pass();
});

test('getTemplatePath should return the current working dir if NOTE_TEMPLATE_PATH not present', (t) => {
    let testPath = path.join(__dirname, '..', '..','templates').replace('test/', '');

    let templatePath = getTemplatePath();
    t.is(templatePath, testPath);

	t.pass();
});
