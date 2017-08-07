'use strict';

// Test deps
const test = require('ava').test;

// External deps
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Tested code
const save = require('../../../src/save');

const tmpDir = path.join(__dirname, '..', '..', '..','.tmp');
test.before(() => {
    // Setup .tmp dir in project base if it's not already created
    if (!fs.existsSync(tmpDir)){
        fs.mkdirSync(tmpDir);
    }
});

test('save should save a file to a desired directory', (t) => {
    save('Foobar', path.join(tmpDir, 'save.txt'));
    t.is('Foobar', fs.readFileSync(path.join(tmpDir, 'save.txt')).toString());
    fs.unlinkSync(path.join(tmpDir, 'save.txt'));
	t.pass();
});

test('save should throw if the file already exists', (t) => {
    const error = t.throws(() => {
        // Try to create the same file twice
		save('Foobar', path.join(tmpDir, 'save.txt'));
		save('Foobar', path.join(tmpDir, 'save.txt'));
	}, Error);

    t.is(error.message, 'The note already exists');
    fs.unlinkSync(path.join(tmpDir, 'save.txt'));
    t.pass();
});
