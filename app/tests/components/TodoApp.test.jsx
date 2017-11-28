var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('The Todo application', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
})