'use strict';

// Test deps
const test = require('ava').test;

// Tested code
const getEditor = require('../../../src/config/get-editor');

test('getEditor should return the EDITOR env var', (t) => {
    let oldEditor = process.env.EDITOR;
    process.env.EDITOR = 'nvim';

    let editor = getEditor();
    t.is(editor, process.env.EDITOR);

    process.env.EDITOR = oldEditor;
	t.pass();
});
