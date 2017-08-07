'use strict';

// Test deps
const test = require('ava').test;

// Tested code
const getTemplateSuffix = require('../../../src/config/get-template-suffix');

test('getTemplateSuffix should return the NOTE_TEMPLATE_SUFFIX env var if available', (t) => {
    process.env.NOTE_TEMPLATE_SUFFIX = 'foo';

    let suffix = getTemplateSuffix();
    t.is(suffix, process.env.NOTE_TEMPLATE_SUFFIX);

    delete process.env.NOTE_TEMPLATE_SUFFIX;
	t.pass();
});

test('getTemplateSuffix should return ".md.ejs" if NOTE_TEMPLATE_SUFFIX not present', (t) => {
    let suffix = getTemplateSuffix();
    t.is(suffix, '.md.ejs');

	t.pass();
});
