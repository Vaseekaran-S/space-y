const  { image } = require("../controller/upload.controller")

const router = require("express").Router()
const multer = require("multer")

const upload = multer({
    storage: multer.memoryStorage(),
    dest: 'uploads/',
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
    fileFilter: (req, file, callback) => {
        if (file.mimetype.startsWith('image/')) {
            return callback(null, true);
        } else {
            return callback(new Error('Invalid file type.'));
        }
    },
});

// Routes
router.post("/image", upload.single('image'), image)

module.exports = router