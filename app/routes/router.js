var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");

router.get("/", function (req, res) {
    res.render("pages/index", { "erros": null, "valores": { nome: "", "email": "", "cpf": "" }, "retorno": null });
});

router.post("/index",
    body("nome").isLength({ min: 3, max: 30}).withMessage("O nome deve ter de 3 a 30 caracteres caracteres"),
    body("email").isEmail().withMessage("insira um email válido"),
    body("cpf").isLength({ min: 11, max: 14}),
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
      console.log(errors);
      return res.render("pages/index", { "erros": errors, "valores":req.body,"retorno":null});
    }

      return res.render("pages/index", { "erros": null, "valores":req.body,"retorno":req.body});
  }
);

module.exports = router;