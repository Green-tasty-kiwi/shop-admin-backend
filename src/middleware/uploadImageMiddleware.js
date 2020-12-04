const multer = require('multer');
const path = require('path');
const fs = require('fs');

function createUploadFileMiddleware() {
    const productImageStorage = multer.diskStorage({
        destination: function (request, file, cb) {
            const dir = `/tmp/images/`;
            fs.mkdirSync(dir, { recursive: true });
            cb(null, dir);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        },
    });
    return multer({ storage: productImageStorage }).single('image')
}

module.exports = createUploadFileMiddleware