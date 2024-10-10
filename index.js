var debug = require("@istani/debug")(require('./package.json').name);
debug.log('Imported');

const express = require('express');
const router = express.Router();

const {exec} = require('child_process');

// Vielleicht kommen hier spater noch mehr urls, aber erstmal reicht eine!

router.use(async (req, res, next) => {
  exec(`sh ${__dirname}/update.sh`, (error, out) => {
    if (error) {
      console.log(`error: ${error.message}`);
    } else if (out) {
      console.log(`stderr: ${out}`);
    }
  });
  
  res.send("");
});



module.exports = router;