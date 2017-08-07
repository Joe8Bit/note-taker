'use strict';

// Test deps
const test = require('ava').test;

// External deps
const fs = require('fs');
const path = require('path');

// Internal deps
const getTemplatePath = require('../../../src/config/get-template-path');
const getTemplateSuffix = require('../../../src/config/get-template-suffix');

// Tested code
const getTemplate = require('../../../src/template/get-template');

test('getTemplate should return the contents of a template if it exists', (t) => {
    let template = getTemplate('note', getTemplatePath(), getTemplateSuffix());
    t.is(template, fs.readFileSync(path.join(__dirname, '..', '..', '..', 'templates', 'note.md.ejs')).toString());
	t.pass();
});

test('getTemplate should throw if the template doesnt exist', (t) => {
    const error = t.throws(() => {
		getTemplate('foo', getTemplatePath(), getTemplateSuffix());
	}, Error);

    t.is(error.message, 'Template "foo" does not exist');
    t.pass();
});
