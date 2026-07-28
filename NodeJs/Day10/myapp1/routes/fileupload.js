var express = require('express');
var multer = require('multer');
var router = express.Router();
const storage= multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'routes/uploads')
        },
        /*************  ✨ Windsurf Command ⭐  *************/
                /**
                 * Returns the filename which will be used to store the file.
                 * It appends the current timestamp to the original filename.
                 * @param {Object} req - The request object.
                 * @param {Object} file - The file which is being uploaded.
                 * @param {Function} cb - The callback function.
                 */
        /*******  3cea6d5d-3440-4387-9ebe-af5d5bf769ec  *******/
        filename: function (req, file, cb) {
            cb(null,  Date.now()+file.originalname)
        }
    })
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

var upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

/* GET users listing. */
router.post('', upload.single('image'), function(req, res, next) {
    res.send({result:'success', message:'File uploaded successfully'});
});

module.exports = router;
