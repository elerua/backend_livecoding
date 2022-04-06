const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

/** Récupération de la date d'aujourd'hui */
let date_ob = new Date();

/** Message de test */
let test = "Test succeeded at " + date_ob;

/** Requête de test */
router.get("/", (req, res) => {
  res.json(test);
});

/** Requête post permettant le hashage de l'input envoyé */
router.post("/", (req, res) => {
  console.log("Hash begin !");
  console.log(req.body.input);
  const inputToHash = req.body.input;
  const hashedInput = bcrypt.hashSync(inputToHash, 10);
  res.json("HashedInput : " + hashedInput + " ! ");
});

module.exports = router;
