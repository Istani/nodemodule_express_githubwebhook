var debug = require("@istani/debug")(require('./package.json').name);
debug.log('Imported');

const express = require('express');
const router = express.Router();

// Vielleicht kommen hier spater noch mehr urls, aber erstmal reicht eine!
router.use(async (req, res, next) => {
  var cmd = "sh " + __dirname + "}/update.sh";
  debug.log("CMD: " + cmd);
  require('child_process').execSync(cmd);
  res.send("OK");
});

module.exports = router;