'use strict';

// Test deps
const test = require('ava').test;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

// Internal deps
const getSavePath = require('../../../src/config/get-save-path');

const promptStub = sinon.spy();

// Tested code
const prompt = proxyquire('../../../src/prompt', {
    inquirer: {
        prompt: promptStub,
        '@noCallThru': true
    }
});

test('should call inquirer to start the interactive prompt', (t) => {
    prompt.start();
    t.true(promptStub.called);
    t.pass();
});

test('should configure the "title" question properly', (t) => {
    t.is(typeof prompt.config[0], 'object');
    t.is(prompt.config[0].type, 'input');
    t.is(prompt.config[0].name, 'title');
    t.is(prompt.config[0].message, 'Note title?');
    t.is(prompt.config[0].default, 'Untitled');
    t.is(typeof prompt.config[0].filter, 'function');
    t.is(prompt.config[0].filter('Some title '), 'Some title');
    t.pass();
});

test('should configure the "location" question properly', (t) => {
    t.is(typeof prompt.config[1], 'object');
    t.is(prompt.config[1].type, 'input');
    t.is(prompt.config[1].name, 'location');
    t.is(prompt.config[1].message, 'Current location?');
    t.is(prompt.config[1].default, 'Unknown');
    t.is(typeof prompt.config[1].filter, 'function');
    t.is(prompt.config[1].filter('Some location '), 'Some location');
    t.pass();
});

test('should configure the "attendees" question properly', (t) => {
    t.is(typeof prompt.config[2], 'object');
    t.is(prompt.config[2].type, 'input');
    t.is(prompt.config[2].name, 'attendees');
    t.is(prompt.config[2].message, 'Attendees?');
    t.is(prompt.config[2].default, 'Unknown');
    t.is(typeof prompt.config[2].filter, 'function');
    t.deepEqual(prompt.config[2].filter('Mike, Steve, John'), ['Mike', 'Steve', 'John']);
    t.pass();
});

test('should configure the "template" question properly', (t) => {
    t.is(typeof prompt.config[3], 'object');
    t.is(prompt.config[3].type, 'rawlist');
    t.is(prompt.config[3].name, 'template');
    t.is(prompt.config[3].message, 'Template?');
    t.deepEqual(prompt.config[3].choices, ['note']);
    t.pass();
});

test('should configure the "path" question properly', (t) => {
    t.is(typeof prompt.config[4], 'object');
    t.is(prompt.config[4].type, 'input');
    t.is(prompt.config[4].name, 'path');
    t.is(prompt.config[4].message, 'Location?');
    t.is(prompt.config[4].default, getSavePath());
    t.true(prompt.config[4].validate(__dirname));

    const error = t.throws(() => {
		prompt.config[4].validate('/kladhfghe984lieuhgkjdhgk.jhsdgk/');
	}, Error);

    t.is(error.message, 'That path doesn\'t seem to exist, please try again');
    t.pass();
});