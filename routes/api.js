const router = require("express").Router();
//router usuario
const usuarioRouter = require("./api/usuario");
router.use("/usuario", usuarioRouter);

module.exports = router;