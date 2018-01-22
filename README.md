# Syncano Socket Aws-photo-rekognition

[![CircleCI](https://circleci.com/gh/Syncano/syncano-socket-qrcode-generator/tree/develop.svg?style=svg)](https://circleci.com/gh/Syncano/syncano-socket-qrcode-generator/tree/develop)

This socket encodes data (text) in a QR Code, it generates a binary stream representing the QR Code.

### Installation
To install this socket, run:
```
syncano-cli add qr-code-generator
```

## Socket Documentation

To view socket endpoints and corresponding parameters, kindly visit [here](https://syncano.io/#/sockets/qr-code-generator)

### Contributing

#### How to Contribute

* Fork this repository
* Clone from your fork
* Make your contributions (Make sure your work is well tested)
* Create Pull request from the fork to this repo

#### Setting up environment variables

* Create a `.envrc` on parent folder
* Copy contents of `.envrc.default` file to newly created `.envrc` file and assign appropriate values to the listed variables.

#### Testing

* Ensure all your tests are written in the `test` directory
* Use the command `npm test` to run tests
