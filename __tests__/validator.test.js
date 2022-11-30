'use strict';

let validator = require('../src/middleware/validator');

describe('Validator middleware', () => {
    let req = {query: {name: Jacob}};
    let res = {};
    let next = jest.fn(); //mocks the "next" method
    
    it('validates query as expected', () => {
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });

    it('invalid query', () => {
        let req = {query: {}};
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith('name required. no name provided')
    });
});