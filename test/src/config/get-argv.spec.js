'use strict';

// Test deps
const test = require('ava').test;

// Tested code
const getArgv = require('../../../src/config/get-argv');

test('getArgv should return current argv', (t) => {
    // This is actually just exposing minimst, so this is parsing the args to the unit testing run!
    let argv = getArgv();
    t.true(argv.color);
	t.pass();
});
