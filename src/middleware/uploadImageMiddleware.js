const multer = require('multer');
const path = require('path');
const fs = require('fs');

function createUploadFileMiddleware() {
    const productImageStorage = multer.diskStorage({
        destination: function (request, file, cb) {
            const dir = path.join(__dirname, '../../', '/tmp/images/');
            fs.mkdirSync(dir, { recursive: true });
            cb(null, dir);
        },
        filename: function (req, file, cb) {
            cb(null, `product_image${path.extname(file.originalname)}`);
        },
    });
    return multer({ storage: productImageStorage }).single('image')
}

module.exports = createUploadFileMiddleware