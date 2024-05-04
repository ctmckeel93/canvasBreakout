const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;
const Score = require('./models/scores.model');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Views
router.get('/', (req, res) => { 
    res.sendFile('index.html', { root: 'public' });
})
router.get("/breakout", (req, res) => { 
    res.sendFile('index.html', { root: 'public' });
}) 

router.get('/instructions', (req, res) => { 
    res.sendFile('index.html', { root: 'public' });
})

router.get('/game-over', (req, res) => { 
    res.sendFile('index.html', { root: 'public' });
})

router.get("/winner", (req, res) => { 
    res.sendFile('index.html', { root: 'public' });
})

router.get('/high-scores', (req, res) => { 
    res.sendFile('index.html', { root: 'public' });
})


// Database queries
router.get("/api/scores", (req, res) => { 
    Score.find({}, ['name', 'score'], {
        skip:0,
        limit: 10,
        sort: {
            score: -1
        }
    })
        .then(allScores => res.json({scores:allScores}))
        .catch(err => res.json({message: "Couldn't get all scores", error: err}))
}) 

router.post('/api/scores', (req,res) => {
    Score.create(req.body)
        // .then(newScore => res.json({score: newScore}))
        .then(() => res.redirect('/high-scores'))
        .catch(err => res.json({message: "Couldn't create score", eror: err}))

        // location.replace('/high-scores')
})


app.use('/', router);
require("./config/mogoose.conig")
app.use(express.static('public'));
app.listen(port, () => console.log('listening on port', port));

