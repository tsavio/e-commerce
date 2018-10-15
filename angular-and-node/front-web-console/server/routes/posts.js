const express = require('express');
const router = express.Route();

// GET POST

router.get('/', (req, res)=>{
    res.send('POST WORKS');
});

module.exports = router;