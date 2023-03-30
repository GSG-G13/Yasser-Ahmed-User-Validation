const express = require("express");
const router = express.Router();
const path = require("path");
const fetch = require('node-fetch');



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '69048f8187msh9464fb413eaf011p1c42c9jsnf65d444f35de',
        'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
    }
};
// node fetch 
router.post('/submit', (req, res) => {

    fetch(`https://mailcheck.p.rapidapi.com/?domain=${req.body.email}`, options)
        .then(response => response.json())
        .then(result => res.send(result))
        .catch(err => console.error(err));

});

module.exports = router;