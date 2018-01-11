import { assert, expect } from 'chai';
import { run, generateMeta } from 'syncano-test';

const meta = generateMeta('generate-qr-code-image');
let args = {};

describe('Generate QR Code', () => {
  it('returns an error if a `GET` request method is passed to Url', (done) => {
    meta.request.REQUEST_METHOD = 'GET';
    run('generate-qr-code-image', {
      meta
    }).then((response) => {
      const errorMessage = 'Make sure to use POST request method for generating QRCode';
      expect(response.data.message).to.equal(errorMessage);
      expect(response.data.statusCode).to.equal(400);
      expect(response.data.data).to.be.empty;
      done();
    });
  });

  it('returns error if text argument is not found', (done) => {
    meta.request.REQUEST_METHOD = 'POST';
    args = {
      options: { type: 'png' }
    };
    run('generate-qr-code-image', {
      args,
      meta
    }).then((response) => {
      expect(response.data.data).to.equal('Enter text to generate QR Code.');
      done();
    });
  });

  it('returns error if text argument is not found', (done) => {
    meta.request.REQUEST_METHOD = 'POST';
    args = {
      text: 'Testing QR Code Generator.',
      options: { type: 'png' }
    };
    run('generate-qr-code-image', {
      args,
      meta
    }).then((response) => {
      expect(response.data.message).to.equal('QR Image Generated.');
      expect(response.data).to.have.property('data').to.not.be.empty;
      done();
    });
  });
});
