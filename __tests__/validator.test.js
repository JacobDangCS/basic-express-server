'use strict';

let validator = require('../src/middleware/validator');

describe('Validator middleware', () => {
    let next = jest.fn(); //mocks the "next" method

    it('validates query as expected', () => {
        const req = {
            query:
                { name: 'Jacob', },
        }
        validator(req, {}, next);
        expect(next).toHaveBeenCalledWith();
    });

    it('invalid query', () => {
        const req = {
            query: {},
        };
        validator(req, {}, next);
        expect(next).toHaveBeenCalledWith('name required. no name provided')
    });
});