'use strict';

const Create = require('./handlers/create.js');
const ReadAll = require('./handlers/read-all.js');
const ReadOne = require('./handlers/read-one.js');
const Update = require('./handlers/update.js');
const Delete = require('./handlers/delete.js');

exports.create = (event, context, callback) => {
  console.log(event);
  Create(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

exports.readAll = (event, context, callback) => {
  ReadAll(event, (error, result) => {
    // result.context = context;
    // result.event = event;
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

exports.readOne = (event, context, callback) => {
  ReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

exports.update = (event, context, callback) => {
  Update(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

exports.delete = (event, context, callback) => {
  Delete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
