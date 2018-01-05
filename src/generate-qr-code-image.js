import Syncano from 'syncano-server';
import qr from 'qr-image';

export default async (ctx) => {
  const { response } = Syncano(ctx);

  const checkQRImage = () => new Promise((resolve, reject) => {
    if (!ctx.args.text) {
      return reject(response.json({
        message: 'Enter text to generate QR Code.'
      }));
    }
    const qrImage = qr.image(ctx.args.text, ctx.args.options || {});
    return resolve(qrImage);
  });

  try {
    if (ctx.meta.request.REQUEST_METHOD === 'POST') {
      const getQRImage = await checkQRImage();
      return response.json({
        message: 'QR Image Generated.',
        statusCode: 200,
        data: getQRImage
      });
    }
  } catch (error) {
    return response.json({
      message: 'Make sure to use `POST` request method for generating QRCode',
      statusCode: 400,
      data: error
    });
  }
};
