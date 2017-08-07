'use strict';

// Test deps
const test = require('ava').test;

// Tested code
const getTemplates = require('../../../src/template/get-templates');

test('getTemplates should return a list of all available template names', (t) => {
    let templates = getTemplates();
    t.is(templates.length, 1);
    t.is(templates[0], 'note');
	t.pass();
});
