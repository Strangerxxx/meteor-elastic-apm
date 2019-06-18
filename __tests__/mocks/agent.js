const agent = require('elastic-apm-node');

jest.mock('elastic-apm-node');

function newAgent() {
  agent.currentTransaction = undefined;
  agent.currentSpan = undefined;
  agent.currentTraceparent = undefined;

  agent.startSpan = jest.fn(() => ({
    end: jest.fn()
  }));
  agent.startTransaction = jest.fn(() => ({
    end: jest.fn()
  }));

  return agent;
}

module.exports = { newAgent };