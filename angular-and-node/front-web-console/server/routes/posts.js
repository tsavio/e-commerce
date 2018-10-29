const express = require('express');
const router = express.Route();

const axios = require('axios');
const PostApi = 'https://jsonplaceholder.typicode.com/';

// GET POST

router.get('/', (req, res)=>{
    axios.get(`${PostApi}/posts`).then(posts=>{

        res.status(200).json(posts.data);

    })
        .catch(erro =>{
            
            res.status(500).send(error);

        })
});

module.exports = router;