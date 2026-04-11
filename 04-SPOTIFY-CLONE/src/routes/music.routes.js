const express = require('express');
const musicController = require("../controllers/music.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");


const upload = multer({
    storage: multer.memoryStorage()
})





const router = express.Router();


router.post("/upload", authMiddleware.authArtistMiddleware, upload.single("music"), musicController.createMusic);
router.post("/album", authMiddleware.authArtistMiddleware, musicController.createAlbum); 


router.get("/", authMiddleware.authUser, musicController.getAllMusic);
router.get("/albums", authMiddleware.authUser, musicController.getallAlbums);
router.get("/albums/:albumId", authMiddleware.authUser, musicController.getAlbumById);



module.exports = router;