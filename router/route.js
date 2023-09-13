const express = require("express");
const router = express.Router();
const controller = require("../controller.js/controller");


router.get("/",controller.home);
router.post("/",controller.createUser);
router.get("/:user_id",controller.getUser);
router.patch("/:user_id",controller.updateUser);
router.delete("/:user_id",controller.deleteUser);


module.exports = router;
