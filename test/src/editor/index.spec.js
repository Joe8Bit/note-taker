'use strict';

// Test deps
const test = require('ava').test;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

const spawnStub = sinon.spy();

// Tested code
const editor = proxyquire('../../../src/editor', {
    child_process: {
        spawn: spawnStub,
        '@noCallThru': true
    }
});

test('should launch an external editor with the saveLocation for the note', (t) => {
    editor('nvim', 'foobar');
    t.true(spawnStub.called);
    t.is(spawnStub.args[0][0], 'nvim');
    t.is(spawnStub.args[0][1][0], 'foobar');
    t.is(spawnStub.args[0][2].stdio, 'inherit');
	t.pass();
});
