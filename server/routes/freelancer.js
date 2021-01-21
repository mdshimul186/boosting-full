const express = require("express");
const router = express.Router();
const { requireSignin,adminMiddleware } = require("../common-middleware");
const {createFreelancer,getAll,deleteFreelancer,editFreelancer} = require("../controller/freelancer");
const upload = require("../common-middleware/imageUpload");

router.post('/create',requireSignin,adminMiddleware,upload.single('freelancerImg'),createFreelancer)
router.patch('/edit/:freelancerid',requireSignin,adminMiddleware,upload.single('freelancerImg'),editFreelancer)
router.delete('/delete/:freelancerid',requireSignin,adminMiddleware,deleteFreelancer)
router.get('/getall',getAll)



module.exports = router;