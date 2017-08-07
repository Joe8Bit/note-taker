'use strict';

// Test deps
const test = require('ava').test;

// External deps
const fs = require('fs');
const path = require('path');

// Internal deps
const getTemplatePath = require('../../../src/config/get-template-path');

// Tested code
const template = require('../../../src/template');

// Fixtures
const renderedTemplateFixture = fs.readFileSync(path.join(__dirname, '..', '..', '_fixtures', 'note_rendered.md')).toString();

test('template should render a template end to end', (t) => {
    let rendered = template({
        template: 'note',
        templatePath: getTemplatePath(),
        templateSuffix: '.md.ejs',
        title: 'A title',
        timestamp: 'Foobar',
        location: 'Spectre',
        attendees: ['Joe', 'Steve', 'Sarah']
    });
    t.is(rendered, renderedTemplateFixture);
	t.pass();
});
