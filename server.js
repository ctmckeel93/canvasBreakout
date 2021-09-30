const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = 8000;

router.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname+'/public/start.html'))
})
router.get("/breakout", (req, res) => { 
    res.sendFile(path.join(__dirname+'/public/index.html'));
}) 

router.get('/instructions', (req, res) => { 
    res.sendFile(path.join(__dirname+'/public/instructions.html'))
})

router.get('/game-over', (req, res) => { 
    res.sendFile(path.join(__dirname+'/public/gameOver.html'))
})

router.get("/winner", (req, res) => { 
    res.sendFile(path.join(__dirname + "/public/playerScore.html"))
})


app.use('/', router);
app.use(express.static(__dirname+'/public'));
app.listen(port, () => console.log('listening on port', port));