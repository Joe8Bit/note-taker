'use strict';

// Test deps
const test = require('ava').test;

// External deps
const moment = require('moment');

// Tested code
const config = require('../../../src/config');

test('config returns the input data unmodified', (t) => {
    let conf = config({
        title: 'Some title',
        baz: 'bax'
    });
    t.is(conf.title, 'Some title');
    t.is(conf.baz, 'bax');
	t.pass();
});

test('config returns the timestamp in the correct format', (t) => {
    let conf = config({
        title: 'Some title'
    });
    // NOTE: this tests to latest minute so COULD fail temporaly 
    let timestamp = moment().format('MMM Do YYYY [@] H:mm');
    t.is(conf.timestamp, timestamp);
	t.pass();
});

test('config returns the current filename', (t) => {
    let conf = config({
        title: 'Some title'
    });
    // NOTE: this tests to latest minute so COULD fail temporaly 
    let timestamp = moment().format('MMM Do YYYY [@] H:mm');
    t.is(conf.fileName, `${timestamp} - Some title.md`);
	t.pass();
});

test('returns the correct scheme for internal configs', (t) => {
    // The content of these configs are tested in seperate tests per file
    let conf = config({
        title: 'Some title'
    });
    t.truthy(conf.commandLineArgs);
    t.truthy(conf.savePath);
    t.truthy(conf.templatePath);
    t.truthy(conf.editor);
    t.truthy(conf.templateSuffix);
	t.pass();
});

