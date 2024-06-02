
const firebase = require("../config/firebase/config")
const firestore = firebase?.db

const image = async(req, res) => {
    try {
        const file = req.file;
        let imagePath = req.body?.path

        const bucket = firebase.storage().bucket();
        const fileUpload = bucket.file(imagePath);

        const stream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype,
            },
        });

        let ended = false;
        stream.on('error', (err) => {
            console.error(err);
            if (!ended) {
                ended = true;
                res.status(500).json({ error: 'Unable to upload image' });
            }
        });

        imagePath = imagePath.replaceAll("/","%2F")

        stream.on('finish', () => {
            if (!ended) {
                ended = true;
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${imagePath}?alt=media`
                res.json({ imageUrl: publicUrl });
            }
        });

        if (!stream.writableEnded) {
            stream.end(file.buffer);
        }

    } catch (err) {
        console.log("Error : ", err.message);
        res.status(403).json({ error: err.message });
    }
}

module.exports = {
    image
}