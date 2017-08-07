'use strict';

// Test deps
const test = require('ava').test;

// Tested code
const getSavePath = require('../../../src/config/get-save-path');

test('getSavePath return the result of process.cwd() as the default savePath', (t) => {
    let savePath = getSavePath();
    let compareTo = process.cwd();
    t.is(savePath, compareTo);
	t.pass();
});

test('getSavePath should overwrite savePath with an environment variable', (t) => {
    process.env.NOTE_SAVE_PATH = 'foobar';
    let savePath = getSavePath();
    t.is(savePath, process.env.NOTE_SAVE_PATH);
    delete process.env.NOTE_SAVE_PATH;
	t.pass();
});
