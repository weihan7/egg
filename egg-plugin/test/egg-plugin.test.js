'use strict';

const mock = require('egg-mock');

describe('test/egg-plugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-plugin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggPlugin')
      .expect(200);
  });
});
