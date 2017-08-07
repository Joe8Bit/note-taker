'use strict';

// Test deps
const test = require('ava').test;

// Tested code
const renderTemplate = require('../../../src/template/render-template');

test('renderTemplate should render an EJS template', (t) => {
    let rendered = renderTemplate('Foo <%= bar %>', { bar: 'baz' });
    t.is(rendered, 'Foo baz');
	t.pass();
});
