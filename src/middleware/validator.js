'use strict';

const validator = (req, res, next) => {
    if (req.query.name){
        next();
    }
    else next ('name required. no name provided');
};

module.exports = validator;